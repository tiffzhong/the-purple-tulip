const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING)
  .then(database => {
    app.set("db", database);
  })
  .catch(error => {
    console.log("error w massive", error);
  });

const nmController = require("./controllers/nmController");
//IG
// app.post("/auth/token", controller.);
// app.get("/auth/authorize_user", controller.authorize_user);
// app.get("/auth/handleauth", controller.handleauth);

//Nodemailer
app.post("/api/email/order", nmController.newOrder);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
