let axios = require("axios");

module.exports = {
  getImages: (req, res) => {
    axios
      .get(
        "https://api.instagram.com/v1/users/self/media/recent/?access_token=8405075809.1677ed0.6df5126af7b34514a7767db67d439ded"
      )
      .then(response => {
        res.status(200).send(response.data);
      });
  }
};
