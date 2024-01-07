// Example usage in a controller
const fetchCurrencyData = require("../services/fetchCurrencyData");

const getCryptoCurrencies = async (req, res) => {
  try {
    const data = await fetchCurrencyData("v1/cryptocurrency/listings/latest", {
      start: 1,
      limit: 100,
    });
    const cryptoCurrencies = data.data.map(({ id, name, symbol }) => {
      return { id, name, symbol };
    });
    res.status(200).json({ status: "success", data: cryptoCurrencies });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    console.error("Error:", error.message);
  }
};

module.exports = { getCryptoCurrencies };
