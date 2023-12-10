import { Injectable } from '@nestjs/common'
import {
  FindManyInventoryArgs,
  FindUniqueInventoryArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateInventoryInput } from './dtos/create-inventory.input'
import { UpdateInventoryInput } from './dtos/update-inventory.input'

@Injectable()
export class InventoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create({ productId, quantity, warehouseId }: CreateInventoryInput) {
    const existingInventory = await this.prisma.inventory.findFirst({
      where: {
        productId,
        warehouseId,
      },
    })

    if (existingInventory) {
      return this.prisma.inventory.update({
        where: {
          id: existingInventory.id,
        },
        data: {
          quantity: {
            increment: quantity,
          },
        },
      })
    } else {
      return this.prisma.inventory.create({
        data: { quantity, productId, warehouseId },
      })
    }
  }

  findAll(args: FindManyInventoryArgs) {
    return this.prisma.inventory.findMany(args)
  }

  findOne(args: FindUniqueInventoryArgs) {
    return this.prisma.inventory.findUnique(args)
  }

  update(updateInventoryInput: UpdateInventoryInput) {
    const { id, ...data } = updateInventoryInput
    return this.prisma.inventory.update({
      where: { id },
      data: data,
    })
  }

  async checkWarehouseOwner({
    uid,
    warehouseId,
  }: {
    uid: string
    warehouseId: number
  }) {
    const warehouse = await this.prisma.warehouse.findUnique({
      where: { id: warehouseId },
    })

    if (
      ![
        warehouse.distributorId,
        warehouse.manufacturerId,
        warehouse.retailerId,
      ].includes(uid)
    ) {
      throw new Error('Warehouse does not belong to you')
    }
  }

  remove(args: FindUniqueInventoryArgs) {
    return this.prisma.inventory.delete(args)
  }
}
