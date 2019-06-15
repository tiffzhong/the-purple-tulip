module.exports = {
  getProducts: (req, res) => {
    const database = req.app.get("db");
    database
      .get_products()
      .then(products => {
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
    let { id } = req.params;
    db.update_product([
      id,
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
    console.log(req.params.id);
    let { id } = req.params;
    db.delete_product(id)
      .then(() => {
        res.status(200).send();
      })
      .catch(error => console.log("error in delete", error));
  },

  getProduct: (req, res) => {
    const db = req.app.get("db");
    let { id } = req.params;
    db.get_product(id)
      .then(product => {
        res.status(200).send(product[0]);
      })
      .catch(err => console.log(err));
  }
};
