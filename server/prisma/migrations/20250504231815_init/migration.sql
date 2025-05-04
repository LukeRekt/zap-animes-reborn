/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Anime` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Anime_slug_key" ON "Anime"("slug");
