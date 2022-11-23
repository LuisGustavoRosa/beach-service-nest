-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "companies" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "telephone" TEXT NOT NULL,
    "birth_date" TEXT NOT NULL,
    "type_user" TEXT NOT NULL,
    "lat" TEXT,
    "lng" TEXT,
    "distance" TEXT,
    "online" BOOLEAN
);
