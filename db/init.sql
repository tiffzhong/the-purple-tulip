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

select * from inquiries;



create table products (
id serial primary key,
product_name text,
  product_size text,
  product_category text,
  product_price text,
  product_description text,
product_image text
);



select * from products;

select * from admin;

drop table admin;

CREATE TABLE admin (
  id SERIAL PRIMARY KEY,
  username VARCHAR UNIQUE,
  password VARCHAR
);

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
    "sess" json NOT NULL,
    "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);
ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;


select * from "session";