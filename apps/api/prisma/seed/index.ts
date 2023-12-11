import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const deleteAll = async () => {
  // Tables with no dependencies
  await prisma.transaction.deleteMany()
  await prisma.inventory.deleteMany()
  await prisma.product.deleteMany()
  await prisma.location.deleteMany()
  await prisma.warehouse.deleteMany()

  // User roles
  await prisma.retailer.deleteMany()
  await prisma.distributor.deleteMany()
  await prisma.manufacturer.deleteMany()

  // User authentication
  await prisma.authProvider.deleteMany()
  await prisma.credentials.deleteMany()

  // Users
  await prisma.user.deleteMany()
}

const reset = async () => {
  await deleteAll()
}

const main = async () => {
  await reset()
}

main()
