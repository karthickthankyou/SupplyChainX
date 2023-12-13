-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_fromWarehouseId_fkey";

-- DropForeignKey
ALTER TABLE "Transaction" DROP CONSTRAINT "Transaction_toWarehouseId_fkey";

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "fromWarehouseId" DROP NOT NULL,
ALTER COLUMN "toWarehouseId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_fromWarehouseId_fkey" FOREIGN KEY ("fromWarehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_toWarehouseId_fkey" FOREIGN KEY ("toWarehouseId") REFERENCES "Warehouse"("id") ON DELETE SET NULL ON UPDATE CASCADE;
