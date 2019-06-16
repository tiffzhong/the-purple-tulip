insert into inquiries (contactdate, inquiry_id, fullname, email, inquiry, date, location, details, checked) 
values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
returning *;