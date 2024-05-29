-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "pdfId" TEXT,
    CONSTRAINT "Post_pdfId_fkey" FOREIGN KEY ("pdfId") REFERENCES "Pdf" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Image" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT NOT NULL,
    "postId" TEXT,
    CONSTRAINT "Image_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pdf" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "path" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Post_pdfId_key" ON "Post"("pdfId");
