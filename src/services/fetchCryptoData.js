const axios = require("axios");
require("dotenv").config();

const baseURL = "https://pro-api.coinmarketcap.com";
const fetchCryptoData = async (endpoint, params) => {
  try {
    const response = await axios.get(`${baseURL}/${endpoint}`, {
      headers: {
        "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
      },
      params: { ...params },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error occurred: ", error.response.data);
      console.error("status code: ", error.response.status);
    } else {
      console.error("Error message:", error.message);
    }
    throw error;
  }
};

module.exports = fetchCryptoData;
