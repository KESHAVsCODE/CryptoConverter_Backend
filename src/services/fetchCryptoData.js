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
    //check if error response properly received from server
    if (error.response && error.response.data && error.response.status) {
      const { status, data } = error.response; // Extracting error info from the API response
      console.error("Error occurred: ", status, data);
      const errorMessage = data.status
        ? data.status.error_message
        : "Unknown error";
      throw new Error(errorMessage);
    } else {
      console.error("Error message:", error.message);
      throw new Error("Request failed");
    }
  }
};

module.exports = fetchCryptoData;
