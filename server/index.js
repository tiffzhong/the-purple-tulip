const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("error w massive", error);
  });

app.use(bodyParser.json());
app.use(
  session({
    secret: "098jkdfn3r9udsjszvwrp0",
    saveUninitialized: false,
    resave: false
  })
);
const nmController = require("./controllers/nmController");
const igController = require("./controllers/igController");
const adminController = require("./controllers/adminController");
const productController = require("./controllers/productController");
//Product
app.get("/api/products", productController.getProducts);
app.post("/api/product", productController.createProduct);
app.delete("/api/product/:id");
app.put("/api/product/:id");

//Nodemailer
app.post("/api/email/order", nmController.newOrder);

// //Instagram
// app.get("/api/ig/getPictures", igController.getImages);

//Admin
app.post("/admin/register", adminController.register);
app.post("/admin/login", adminController.login);
app.post("/admin/logout", adminController.logout);
app.get("/admin/inquiries", adminController.inquiries);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
