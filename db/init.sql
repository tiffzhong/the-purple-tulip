create table inquiries (
id serial primary key,
name varchar(60) not null,
email text not null,
inquiry text,
date text,
location text,
details text
)