const axios = require("axios");
module.exports = async (payments, options) => {
  try {
    const result = await payments.mobileCheckout(options);
    console.log(result);
    return res
  } catch (err) {
    console.log(err);
  }
};
