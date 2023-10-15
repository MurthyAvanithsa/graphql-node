-- CreateTable
CREATE TABLE "Transaction" (
    "id" VARCHAR(255) NOT NULL,
    "type" TEXT NOT NULL,
    "amount" TEXT NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);
