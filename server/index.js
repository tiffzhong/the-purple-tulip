const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
// const session = require("express-session");
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

const ig = require("instagram-node").instagram();
ig.use({
  client_id: process.env.IG_CLIENT_ID,
  client_secret: process.env.IG_CLIENT_SECRET
});

const redirect_uri = "http://localhost:3000/auth/callback";

exports.authorize_user = function(req, res) {
  res.redirect(
    ig.get_authorization_url(redirect_uri, {
      scope: ["public_content", "likes"],
      state: "a state"
    })
  );
};

exports.handleauth = function(req, res) {
  ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
    if (err) {
      console.log(err.body);
      res.send(err, "Didn't work");
    } else {
      access_token = result.access_token;
      console.log("Yay! Access token is " + result.access_token);
      res.send("You made it!!");
    }
  });
};

app.get("/authorize_user", exports.authorize_user);
// This is your redirect URI
app.get("/handleauth", exports.handleauth);

const controller = require("./controller");
app.post("/api/email/order", controller.newOrder);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
