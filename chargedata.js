module.exports = async (payments, options) => {
  try {
    const result = await payments.mobileCheckout(options);
    const { description, transactionId, providerChannel, status } = result;
    return { description, transactionId, providerChannel, status };
  } catch (err) {
    console.log(err);
  }
};
