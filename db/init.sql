CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password VARCHAR
);

create table inquiries (
id serial primary key,
contactdate text,
inquiry_id text,
fullname varchar(60) not null,
email text not null,
inquiry text,
date text,
location text,
details text,
checked BOOLEAN
)

create table products (
id serial primary key,
product_name text,
  product_size text,
  product_category text,
  product_price text,
  product_description text,
product_image text
);

create table weddings (
id serial primary key,
weddingcontactdate text,
fullnames text,
weddingemail text,
weddingphone text,
weddingdate text,
ceremonyinfo text,
receptioninfo text,
guestcount text,
bridalparty text,
colorscheme text,
needpersonal boolean,
needceremony boolean,
needreception boolean,
needcakeflowers boolean,
needother text,
envision text,
weddingstyle text,
budget text,
pinterest text,
extradetails text
)

select * from products;
select * from admin;
select * from inquiries;
select * from weddings;

drop table admin;



CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

select * from "session";