/*
  Warnings:

  - A unique constraint covering the columns `[user_id,product__name]` on the table `favorite` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "favorite_user_id_product__name_key" ON "favorite"("user_id", "product__name");
