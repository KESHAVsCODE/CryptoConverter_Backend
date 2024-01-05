const express = require("express");

const router = express.Router();

const {
  getTopCoins,
  getFiatCurrencies,
  cryptoCurrencyConversion,
} = require("../controllers/cryptoCurrencyController");

router.get("/top-coins", getTopCoins);
router.get("/fiat-currencies", getFiatCurrencies);
router.post("/conversion", cryptoCurrencyConversion);

module.exports = router;
