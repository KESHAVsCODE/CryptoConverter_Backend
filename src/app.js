const express = require("express");
const cors = require("cors");
const app = express();

const cryptoCurrencyRoute = require("./routes/cryptoCurrencyRoute");
const fiatCurrencyRoute = require("./routes/fiatCurrencyRoute");
const currencyConversionRoute = require("./routes/currencyConversionRoute");

app.use(cors());
app.use("/currency/crypto", cryptoCurrencyRoute);
app.use("/currency/fiat", fiatCurrencyRoute);
app.use("/currency/conversion", currencyConversionRoute);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Crypto Currency Conversion Web App",
  });
});
module.exports = app;
