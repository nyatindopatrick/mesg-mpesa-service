module.exports = async (payments, options) => {
  try {
    const result = await payments.mobileCheckout(options);
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }
};
