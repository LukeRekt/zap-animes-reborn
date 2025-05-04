/*
  Warnings:

  - You are about to drop the column `carouselPhoto` on the `Anime` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Anime" DROP COLUMN "carouselPhoto",
ADD COLUMN     "photoLarge" TEXT;
