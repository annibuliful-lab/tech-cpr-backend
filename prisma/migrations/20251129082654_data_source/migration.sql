-- CreateEnum
CREATE TYPE "rawDataProcessStatus" AS ENUM ('PENDING', 'ON_QUEUE', 'PROCESSING', 'DONE', 'CANCELLED');

-- CreateTable
CREATE TABLE "data_source_configurations" (
    "id" UUID NOT NULL,
    "source" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "username" TEXT,
    "password" TEXT,
    "api_key" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "data_source_configurations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "data_source_raw" (
    "id" TEXT NOT NULL,
    "status" "rawDataProcessStatus" NOT NULL,
    "source_id" UUID NOT NULL,
    "raw" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "data_source_raw_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "data_source_configurations_source_endpoint_key" ON "data_source_configurations"("source", "endpoint");

-- AddForeignKey
ALTER TABLE "data_source_raw" ADD CONSTRAINT "data_source_raw_source_id_fkey" FOREIGN KEY ("source_id") REFERENCES "data_source_configurations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
