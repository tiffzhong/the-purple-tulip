update products set
product_name = $2,
  product_size = $3,
  product_category = $4,
  product_price= $5,
  product_description= $6,
  product_image= $7
where product_id = $1