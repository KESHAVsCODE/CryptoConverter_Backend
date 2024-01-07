const fetchCurrencyData = require("../services/fetchCurrencyData");
const getFiatCurrencies = async (req, res) => {
  try {
    const data = await fetchCurrencyData("v1/fiat/map");
    const fiatCurrencies = data.data.map(({ id, name, symbol }) => {
      return { id, name, symbol };
    });
    res.status(200).json({ status: "success", data: fiatCurrencies });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    console.error("Error:", error.message);
  }
};
module.exports = { getFiatCurrencies };
