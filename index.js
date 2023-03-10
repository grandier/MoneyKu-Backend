const express = require("express");
const db = require("./src/config/config");
const app = express();
const bp = require("body-parser");
const moneykuRoute = require("./src/Routes/Routes");
const cors = require("cors");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
require("dotenv").config();
app.use("/moneyku", moneykuRoute);

const corsOptions = {
  origin: "*",
  Credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.listen(1234 || process.env.port, () => {
  console.log("Port berhasil dijalankan");
});
