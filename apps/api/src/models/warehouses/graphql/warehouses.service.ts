import { Injectable } from '@nestjs/common'
import {
  FindManyWarehouseArgs,
  FindUniqueWarehouseArgs,
} from './dtos/find.args'
import { PrismaService } from 'src/common/prisma/prisma.service'
import { CreateWarehouseInput } from './dtos/create-warehouse.input'
import { UpdateWarehouseInput } from './dtos/update-warehouse.input'

@Injectable()
export class WarehousesService {
  constructor(private readonly prisma: PrismaService) {}
  create({ address, description, name, manufacturerId }: CreateWarehouseInput) {
    return this.prisma.warehouse.create({
      data: {
        name,
        description,
        location: { create: address },
        manufacturer: {
          connect: { uid: manufacturerId },
        },
      },
    })
  }

  findAll(args: FindManyWarehouseArgs) {
    return this.prisma.warehouse.findMany(args)
  }

  findOne(args: FindUniqueWarehouseArgs) {
    return this.prisma.warehouse.findUnique(args)
  }

  update(updateWarehouseInput: UpdateWarehouseInput) {
    const { id, ...data } = updateWarehouseInput
    return this.prisma.warehouse.update({
      where: { id },
      data: data,
    })
  }

  remove(args: FindUniqueWarehouseArgs) {
    return this.prisma.warehouse.delete(args)
  }
}
