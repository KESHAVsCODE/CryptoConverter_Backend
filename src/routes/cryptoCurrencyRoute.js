const express = require("express");

const router = express.Router();

const {
  getCryptoCurrencies,
} = require("../controllers/cryptoCurrencyController");

router.get("/", getCryptoCurrencies);

module.exports = router;
