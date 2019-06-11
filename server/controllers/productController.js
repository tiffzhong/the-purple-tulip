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
    console.log(req.body);
    let {
      product_name,
      product_size,
      product_category,
      product_price,
      product_description,
      product_image
    } = req.body;
    db.create_product([
      product_name,
      product_size,
      product_category,
      product_price,
      product_description,
      product_image
    ])
      .then(() => res.status(200).send())
      .catch(err => console.log("error in create product", err));
  },

  updateProduct: (req, res) => {
    const db = req.app.get("db");
    let {
      product_name,
      product_size,
      product_category,
      product_price,
      product_description,
      product_image
    } = req.body;
    let { product_id } = req.params;
    db.update_product([
      product_id,
      product_name,
      product_size,
      product_category,
      product_price,
      product_description,
      product_image
    ])
      .then(() => res.status(200).send())
      .catch(error => console.log("error in updateProduct", error));
  },

  deleteProduct: (req, res) => {
    const db = req.app.get("db");
    let { product_id } = req.params;
    db.delete_product(product_id).then(() => {
      res.status(200).send();
    });
  }
};
