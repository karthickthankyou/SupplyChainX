import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { TransactionsService } from './transactions.service'
import { Transaction } from './entity/transaction.entity'
import {
  FindManyTransactionArgs,
  FindUniqueTransactionArgs,
} from './dtos/find.args'
import { CreateTransactionInput } from './dtos/create-transaction.input'
import { UpdateTransactionInput } from './dtos/update-transaction.input'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { Product } from 'src/models/products/graphql/entity/product.entity'
import { Warehouse } from 'src/models/warehouses/graphql/entity/warehouse.entity'
import { AllowAuthenticated, GetUser } from 'src/common/auth/auth.decorator'
import { GetUserType } from 'src/common/util/types'

@Resolver(() => Transaction)
export class TransactionsResolver {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly prisma: PrismaService,
  ) {}

  @Mutation(() => Transaction)
  createTransaction(
    @Args('createTransactionInput') args: CreateTransactionInput,
  ) {
    return this.transactionsService.create(args)
  }

  @Query(() => [Transaction], { name: 'transactions' })
  findAll(@Args() args: FindManyTransactionArgs) {
    return this.transactionsService.findAll(args)
  }

  @AllowAuthenticated()
  @Query(() => [Transaction], { name: 'myTransactions' })
  async myTransactions(
    @Args() { distinct, orderBy, skip, take, where }: FindManyTransactionArgs,

    @GetUser() user: GetUserType,
  ) {
    const warehouses = await this.prisma.warehouse.findMany({
      where: {
        OR: [
          { distributorId: user.uid },
          { manufacturerId: user.uid },
          { retailerId: user.uid },
        ],
      },
    })

    const wareHouseIds = warehouses.map((warehouse) => warehouse.id)
    return this.prisma.transaction.findMany({
      distinct,
      orderBy,
      skip,
      take,
      where: {
        ...where,
        OR: [
          { toWarehouseId: { in: wareHouseIds } },
          { fromWarehouseId: { in: wareHouseIds } },
        ],
      },
    })
  }

  @Query(() => Transaction, { name: 'transaction' })
  findOne(@Args() args: FindUniqueTransactionArgs) {
    return this.transactionsService.findOne(args)
  }

  @Mutation(() => Transaction)
  updateTransaction(
    @Args('updateTransactionInput') args: UpdateTransactionInput,
  ) {
    return this.transactionsService.update(args)
  }

  @Mutation(() => Transaction)
  removeTransaction(@Args() args: FindUniqueTransactionArgs) {
    return this.transactionsService.remove(args)
  }

  @ResolveField(() => Product)
  product(@Parent() transaction: Transaction) {
    return this.prisma.product.findUnique({
      where: { id: transaction.productId },
    })
  }

  @ResolveField(() => Warehouse, { nullable: true })
  fromWarehouse(@Parent() transaction: Transaction) {
    if (!transaction.fromWarehouseId) {
      return null
    }
    return this.prisma.warehouse.findUnique({
      where: { id: transaction.fromWarehouseId },
    })
  }

  @ResolveField(() => Warehouse, { nullable: true })
  toWarehouse(@Parent() transaction: Transaction) {
    if (!transaction.toWarehouseId) {
      return null
    }
    return this.prisma.warehouse.findUnique({
      where: { id: transaction.toWarehouseId },
    })
  }
}
