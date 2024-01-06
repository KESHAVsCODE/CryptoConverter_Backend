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
    res.status(200).json({ status: "success", data: data.data });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    console.error("Error:", error.message);
  }
};

const cryptoPriceConversion = async (req, res) => {
  const { amount, id, convert } = req.query;
  if (!amount || !id || !convert) {
    return res.status(400).json({
      status: "failed",
      message: `${!amount ? "*amount*" : ""}${!id ? "*id*" : ""}${
        !convert ? "*convert*" : ""
      } is required`,
    });
  }
  try {
    const data = await fetchCryptoData("v2/tools/price-conversion", {
      amount,
      id,
      convert,
    });
    res.status(200).json({ status: "success", data: data.data });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    console.error("Error:", error.message);
  }
};

module.exports = { getTopCoins, getFiatCurrencies, cryptoPriceConversion };
