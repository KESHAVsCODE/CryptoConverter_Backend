const express = require("express");
const app = express();

const cryptoCurrencyRoute = require("./routes/cryptoCurrencyRoute");

app.use("/crypto-currency", cryptoCurrencyRoute);

app.get("/", (req, res) => {
  res.send("This is my new app");
});
module.exports = app;
