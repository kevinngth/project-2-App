CREATE TABLE "users" (
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(15) UNIQUE,
	"password" VARCHAR(128)
);

CREATE TABLE "collection" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INTEGER,
	"liquor_id" INTEGER,
	"date_bought" TIMESTAMPTZ,
	"quantity" INTEGER
);

CREATE INDEX "FK" ON  "collection" ("user_id", "liquor_id");

CREATE TABLE "liquor" (
	"id" SERIAL PRIMARY KEY,
	"name" TEXT,
	"type" TEXT
);