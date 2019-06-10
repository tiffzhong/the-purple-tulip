module.exports = {
  getProducts: (req, res) => {
    const database = req.app.get("db");
    database
      .get_products()
      .then(products => {
        console.log(products);
        res.status(200).send(products);
      })
      .catch(error => console.log("error in get products", error));
  },
  createProduct: (req, res) => {
    const db = req.app.get("db");
    let product_name,
      product_image,
      product_size,
      product_category,
      product_description,
      product_price = req.body;
    db.create_product([
      product_name,
      product_image,
      product_size,
      product_category,
      product_description,
      product_price
    ])
      .then(() => res.status(200).send())
      .catch(err => console.log("error in create product", err));
  }
};
