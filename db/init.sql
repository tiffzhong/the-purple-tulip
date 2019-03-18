create table inquiries (
id serial primary key,
inquiry_id text,
name varchar(60) not null,
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