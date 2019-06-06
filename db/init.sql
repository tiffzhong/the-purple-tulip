create table inquiries (
id serial primary key,
inquiry_id text,
fullname varchar(60) not null,
email text not null,
inquiry text,
date text,
location text,
details text
)

select * from inquiries;

create table admin (
id serial primary key,
username varchar(15) unique,
password varchar(15)
);

create table products (
product_id serial primary key,
product_name text,
product_image text,
product_size text,
product_category text,
product_description text,
product_price decimal
);

insert into products (product_id, product_name, product_image, product_size, product_category, product_description, product_price)
values(1, 'Yellow Bunch', 'https://i.pinimg.com/originals/3f/61/d1/3f61d17195dd78c7e44d8381c48f7de4.jpg', 'Medium', 'Vases', 'Yellow Bouquet with a mix of yellow and white roses', '60.00')

select * from products;