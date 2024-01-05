// Example usage in a controller
const fetchCryptoData = require("../services/fetchCryptoData");

const getTopCoins = async (req, res) => {
  try {
    const data = await fetchCryptoData("v1/cryptocurrency/listings/latest", {
      start: 1,
      limit: 10,
    });
    res.status(200).json({ status: "success", data: data.data });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    console.error("Error:", error.message);
  }
};

const getFiatCurrencies = async (req, res) => {
  try {
    const data = await fetchCryptoData("v1/fiat/map");
    console.log(data.data.length);
    res.status(200).json({ status: "success", data: data.data });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    console.error("Error:", error.message);
  }
};

const cryptoCurrencyConversion = async (req, res) => {
  // try {
  //   const data = await fetchCryptoData("v1/fiat/map");
  //   console.log(data.data.length);
  //   res.status(200).json({ status: "success", data: data.data });
  // } catch (error) {
  //   res.status(400).json({ status: "failed", message: error.message });
  //   console.error("Error:", error.message);
  // }
};

module.exports = { getTopCoins, getFiatCurrencies, cryptoCurrencyConversion };

// get top 100 crypto -v1/cryptocurrency/map?sort=cmc_rank&limit=100&start=1  //only meta data // give 96 results excluded inactive crypto currency

// v1/cryptocurrency/listings/latest?start=1&limit=100 //full data // give 100 active crypto currency

// v1/fiat/map this gives fiat currencies meta data  total 93

// v1/fiat/map?include_metals  total 4 metals

// v2/tools/price-conversion?amount=1&id=1&convert=INR max amount support 1e12
