const ig = require("instagram-node").instagram();

ig.use({
    client_id: process.env.IG_CLIENT_ID,
    client_secret: process.env.IG_CLIENT_SECRET
  });

  module.exports = {
      //IG API

  //   authorize_user = function(req, res) {
  //    res.redirect(
  //      ig.get_authorization_url(redirect_uri, {
  //        scope: ["public_content", "likes"],
  //        state: "a state"
  //      })
  //    );
  //  },
  //   handleauth = function(req, res) {
  //    ig.authorize_user(req.query.code, redirect_uri, function(err, result) {
  //      if (err) {
  //        console.log(err.body);
  //        res.send(err, "Didn't work");
  //      } else {
  //        access_token = result.access_token;
  //        console.log("Yay! Access token is " + result.access_token);
  //        res.send("You made it!!");
  //      }
  //    });
  //  }
  }