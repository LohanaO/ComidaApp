/*
  Warnings:

  - You are about to drop the column `incono` on the `categoria` table. All the data in the column will be lost.
  - Added the required column `icono` to the `Categoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `categoria` DROP COLUMN `incono`,
    ADD COLUMN `icono` VARCHAR(191) NOT NULL;
