const ig = require("instagram-node").instagram();
let axios = require("axios");

ig.use({
    client_id: process.env.IG_CLIENT_ID,
    client_secret: process.env.IG_CLIENT_SECRET
  });

  module.exports = {
      getImages: (req, res) => {
          axios.get("https://api.instagram.com/v1/users/self/media/recent/?access_token=802048.1677ed0.1c61334eefc141299bf9aad3ac9e972a").then(response => {
              res.status(200).send(response.data)
          })
      }
  }