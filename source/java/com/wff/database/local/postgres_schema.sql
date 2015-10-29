-- Table: "BIGTABLES"

DROP TABLE "BIGTABLES";

CREATE TABLE "BIGTABLES"
(
  "ROWID" serial NOT NULL,
  "INSTANCE" character varying(255) NOT NULL,
  "COLUMN" character varying(255) NOT NULL,
  "TABLE" character varying(255) NOT NULL,
  "VALUE" character varying(255) NOT NULL,
  "USER_LABEL" character varying(255) NOT NULL,
  CONSTRAINT "BIGTABLES_pkey" PRIMARY KEY ("ROWID")
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "BIGTABLES"
  OWNER TO postgres;

INSERT INTO "BIGTABLES"(
            "ROWID", "INSTANCE","COLUMN", "TABLE", "VALUE", "USER_LABEL")
    VALUES (DEFAULT, '1', 'userName', 'User','admin', 'USER_ADMIN');
INSERT INTO "BIGTABLES"(
            "ROWID", "INSTANCE","COLUMN", "TABLE", "VALUE", "USER_LABEL")
    VALUES (DEFAULT, '1', 'userpassword','User', 'admin', 'USER_ADMIN');
    
 SELECT "ROWID", "INSTANCE","COLUMN", "TABLE", "VALUE", "USER_LABEL"
  FROM "BIGTABLES";
  
 UPDATE "BIGTABLES"
   SET  "VALUE"='password'
 WHERE "USER_LABEL"='USER_ADMIN'
 AND "INSTANCE" = '1'
 AND "COLUMN" = 'userPassword'
 AND "TABLE"='User';

 DELETE  FROM "BIGTABLES" WHERE "INSTANCE" ='1'; 
 
 INSERT INTO "BIGTABLES"(
            "ROWID", "INSTANCE","COLUMN", "TABLE", "VALUE", "USER_LABEL")
    VALUES (DEFAULT, '1', 'userName', 'User','admin', 'USER_ADMIN');
INSERT INTO "BIGTABLES"(
            "ROWID", "INSTANCE","COLUMN", "TABLE", "VALUE", "USER_LABEL")
    VALUES (DEFAULT, '1', 'userpassword','User', 'admin', 'USER_ADMIN');