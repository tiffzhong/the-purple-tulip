const express = require("express");
const bodyParser = require("body-parser");
// const massive = require("massive");
// const session = require("express-session");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
app.use(bodyParser.json());

const controller = require("./controller");
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
