-- AlterTable
ALTER TABLE "User" ADD COLUMN     "generationCount" INTEGER NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "MidiPattern" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MidiPattern_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MidiPattern" ADD CONSTRAINT "MidiPattern_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
