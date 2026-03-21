/*
  Warnings:

  - The `status` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `temperature` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `milkChoice` column on the `Order` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'IN_PROGRESS',
DROP COLUMN "temperature",
ADD COLUMN     "temperature" TEXT,
DROP COLUMN "milkChoice",
ADD COLUMN     "milkChoice" TEXT;

-- DropEnum
DROP TYPE "MILK_CHOICE";

-- DropEnum
DROP TYPE "TEMPERATURE";
