const express = require("express");

const router = express.Router();

const { getFiatCurrencies } = require("../controllers/fiatCurrencyController");

router.get("/", getFiatCurrencies);

module.exports = router;
