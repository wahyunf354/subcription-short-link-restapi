/*
  Warnings:

  - You are about to drop the `Link` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Link` DROP FOREIGN KEY `Link_userEmail_fkey`;

-- DropTable
DROP TABLE `Link`;

-- CreateTable
CREATE TABLE `links` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `destination` VARCHAR(255) NOT NULL,
    `title` VARCHAR(100) NULL,
    `shortLink` VARCHAR(100) NOT NULL,
    `userEmail` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `links` ADD CONSTRAINT `links_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `User`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;
