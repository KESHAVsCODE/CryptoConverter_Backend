const fetchCurrencyData = require("../services/fetchCurrencyData");
const cryptoToFiatConversion = async (req, res) => {
  const { amount, id, convert_id } = req.query;
  if (!amount || !id || !convert_id) {
    return res.status(400).json({
      status: "failed",
      message: `${!amount ? "*amount*" : ""}${!id ? "*id*" : ""}${
        !convert_id ? "*convert_id*" : ""
      } is required`,
    });
  }
  try {
    const data = await fetchCurrencyData("v2/tools/price-conversion", {
      amount,
      id,
      convert_id,
    });
    res
      .status(200)
      .json({ status: "success", data: data.data.quote[convert_id] });
  } catch (error) {
    res.status(400).json({ status: "failed", message: error.message });
    console.error("Error:", error.message);
  }
};

module.exports = { cryptoToFiatConversion };
