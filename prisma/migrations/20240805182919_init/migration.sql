-- CreateTable
CREATE TABLE "Favourites" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "meal" JSONB NOT NULL,

    CONSTRAINT "Favourites_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Favourites" ADD CONSTRAINT "Favourites_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
