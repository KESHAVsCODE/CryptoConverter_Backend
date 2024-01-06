const express = require("express");

const router = express.Router();

const {
  getTopCoins,
  getFiatCurrencies,
  cryptoPriceConversion,
} = require("../controllers/cryptoCurrencyController");

router.get("/top-coins", getTopCoins);
router.get("/fiat-currencies", getFiatCurrencies);
router.post("/price-conversion", cryptoPriceConversion);

module.exports = router;
