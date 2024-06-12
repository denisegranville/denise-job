\connect "postgres";

CREATE SEQUENCE IF NOT EXISTS projects_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE IF NOT EXISTS "public"."projects" (
    "id" integer DEFAULT nextval('projects_id_seq') NOT NULL,
    "name" text NOT NULL,
    "country" text NOT NULL,
    "added_dstamp" timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
) WITH (oids = false);

INSERT INTO "projects" ("id", "name", "country", "added_dstamp") VALUES
(1,	'Test Project',	'United Kingdom',	'2024-03-06 11:36:28.790432'),
(2,	'Another One',	'France',	'2024-03-06 11:36:43.407885'),
(3,	'New Agas',	'Kenya',	'2024-03-06 11:37:15.942816'),
(4,	'Paris And More',	'France',	'2024-03-06 15:47:20.407885');

-- TODO: Set up ORM to manage the database and content

CREATE TABLE IF NOT EXISTS "public"."countries" (
    "name" text NOT NULL,
    "code" text NOT NULL,
    "population" bigint NOT NULL, --
    "emissionsTons" numeric NOT NULL,
    CONSTRAINT "countries_pkey" PRIMARY KEY ("code")
) WITH (oids = false);

INSERT INTO "countries" ("name", "code", "population", "emissionsTons") VALUES
('United Kingdom', 'GB', 66971395, 4.6),
('France', 'FR', 67971311, 4),
('Kenya', 'KE', 54027487, 0.4);
