const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const connect = require("connect-pg-simple");
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("error w massive", error);
  });

app.use(
  session({
    store: new (connect(session))({
      conString: process.env.CONNECTION_STRING
    }),
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2
    }
  })
);
const nmController = require("./controllers/nmController");
const igController = require("./controllers/igController");
const adminController = require("./controllers/adminController");
const productController = require("./controllers/productController");

//Items
app.get("/api/products", productController.getProducts);
app.post("/api/product", productController.createProduct);
app.delete("/api/product/:id");
app.put("/api/product/:id");

//Nodemailer
app.post("/api/email/order", nmController.newOrder);

// //Instagram
// app.get("/api/ig/getPictures", igController.getImages);

//Admin
app.get("/admin/user", adminController.getUser);
app.post("/admin/register", adminController.register);
app.post("/admin/login", adminController.login);
app.post("/admin/logout", adminController.logout);
app.get("/admin/inquiries", adminController.inquiries);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
