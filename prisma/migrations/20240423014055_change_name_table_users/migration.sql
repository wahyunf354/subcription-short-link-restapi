/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_planSubcriptionId_fkey`;

-- DropForeignKey
ALTER TABLE `links` DROP FOREIGN KEY `links_userEmail_fkey`;

-- DropTable
DROP TABLE `User`;

-- CreateTable
CREATE TABLE `users` (
    `email` VARCHAR(100) NOT NULL,
    `firstName` VARCHAR(100) NOT NULL,
    `lastName` VARCHAR(100) NULL,
    `role` ENUM('USER', 'ADMIN') NOT NULL DEFAULT 'USER',
    `password` VARCHAR(100) NOT NULL,
    `planSubcriptionId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `users` ADD CONSTRAINT `users_planSubcriptionId_fkey` FOREIGN KEY (`planSubcriptionId`) REFERENCES `plan_subcriptions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `links` ADD CONSTRAINT `links_userEmail_fkey` FOREIGN KEY (`userEmail`) REFERENCES `users`(`email`) ON DELETE SET NULL ON UPDATE CASCADE;
