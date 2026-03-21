/*
  Warnings:

  - Added the required column `temperature` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TEMPERATURE" AS ENUM ('HOT', 'ICED');

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "temperature" "TEMPERATURE" NOT NULL;
