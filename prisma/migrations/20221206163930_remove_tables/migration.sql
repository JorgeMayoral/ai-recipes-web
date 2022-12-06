/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Keyword` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_IngredientToRecipe` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_KeywordToRecipe` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_IngredientToRecipe" DROP CONSTRAINT "_IngredientToRecipe_A_fkey";

-- DropForeignKey
ALTER TABLE "_IngredientToRecipe" DROP CONSTRAINT "_IngredientToRecipe_B_fkey";

-- DropForeignKey
ALTER TABLE "_KeywordToRecipe" DROP CONSTRAINT "_KeywordToRecipe_A_fkey";

-- DropForeignKey
ALTER TABLE "_KeywordToRecipe" DROP CONSTRAINT "_KeywordToRecipe_B_fkey";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "ingredients" VARCHAR(255)[];

-- DropTable
DROP TABLE "Ingredient";

-- DropTable
DROP TABLE "Keyword";

-- DropTable
DROP TABLE "_IngredientToRecipe";

-- DropTable
DROP TABLE "_KeywordToRecipe";
