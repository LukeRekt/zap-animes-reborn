/*
  Warnings:

  - Added the required column `slug` to the `Anime` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Anime" ADD COLUMN     "slug" VARCHAR(255) NOT NULL;
