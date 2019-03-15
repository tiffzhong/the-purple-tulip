insert into inquiries (fullname, email, inquiry, date, location, details) 
values ($1, $2, $3, $4, $5, $6)
returning *;