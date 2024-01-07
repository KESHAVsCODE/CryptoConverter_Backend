const express = require("express");

const router = express.Router();

const {
  cryptoToFiatConversion,
} = require("../controllers/currencyConversionController");

router.get("/crypto-to-fiat", cryptoToFiatConversion);

module.exports = router;
