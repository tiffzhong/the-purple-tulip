insert into inquiries (id, fullname, email, inquiry, date, location, details) 
values ($1, $2, $3, $4, $5, $6, $7);
select * from inquiries where id = $1;