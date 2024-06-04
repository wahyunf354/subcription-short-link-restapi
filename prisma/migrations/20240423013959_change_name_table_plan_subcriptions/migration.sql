/*
  Warnings:

  - You are about to drop the `PlanSubcription` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_planSubcriptionId_fkey`;

-- DropTable
DROP TABLE `PlanSubcription`;

-- CreateTable
CREATE TABLE `plan_subcriptions` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(100) NOT NULL,
    `pricePerMonth` INTEGER NOT NULL,
    `shortLink` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_planSubcriptionId_fkey` FOREIGN KEY (`planSubcriptionId`) REFERENCES `plan_subcriptions`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
