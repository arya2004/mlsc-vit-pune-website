/*
  Warnings:

  - You are about to drop the `_BlogToUser` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `authorId` to the `Blog` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_BlogToUser" DROP CONSTRAINT "_BlogToUser_A_fkey";

-- DropForeignKey
ALTER TABLE "_BlogToUser" DROP CONSTRAINT "_BlogToUser_B_fkey";

-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "authorId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "_BlogToUser";

-- AddForeignKey
ALTER TABLE "Blog" ADD CONSTRAINT "Blog_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
