/*
  Warnings:

  - Added the required column `incono` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` ADD COLUMN `incono` VARCHAR(191) NOT NULL;
