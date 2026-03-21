/*
  Warnings:

  - Added the required column `milkChoice` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "MILK_CHOICE" AS ENUM ('LACTOSE_FREE', 'OAT');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "milkChoice" "MILK_CHOICE" NOT NULL;
