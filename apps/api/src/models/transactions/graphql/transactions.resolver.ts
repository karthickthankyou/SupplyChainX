import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { TransactionsService } from './transactions.service'
import { Transaction } from './entity/transaction.entity'
import {
  FindManyTransactionArgs,
  FindUniqueTransactionArgs,
} from './dtos/find.args'
import { CreateTransactionInput } from './dtos/create-transaction.input'
import { UpdateTransactionInput } from './dtos/update-transaction.input'

@Resolver(() => Transaction)
export class TransactionsResolver {
  constructor(private readonly transactionsService: TransactionsService) {}

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
}
