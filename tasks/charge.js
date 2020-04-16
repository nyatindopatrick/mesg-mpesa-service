const credentials = {
  apiKey: process.env.API_KEY,
  username: process.env.USER_NAME
}
const AfricasTalking = require('africastalking')(credentials);
const chargeData = require('../chargedata')


const payments = AfricasTalking.PAYMENTS;

module.exports = async ({ email, source, amount, currency, metadata }) => {
  const customer = await Stripe.customers.create({
    email,
    source
  })
  const charge = await Stripe.charges.create({
    amount,
    currency,
    customer: customer.id,
    metadata
  })
  return chargeData(charge)
}


module.exports = async function() {
  const options = {
      // Set the name of your Africa's Talking payment product
      productName: source,
      // Set the phone number you want to send to in international format
      phoneNumber: phone,
      // Set the 3-Letter ISO currency code and the checkout amount
      currencyCode: 'KES',
      amount: 'Amount to be sent by customer',
      // Set any metadata that you would like to send along with this request.
      // This metadata will be included when we send back the final payment notification
      metadata: {
          foo: "bar",
          key: "value"
      }
  };

  // That's it hit send and we'll take care of the rest
  try {
      const result = await payments.mobileCheckout(options);
      console.log(result);
  } catch (err) {
      console.log(err);
  }
}

initiateMobileCheckout();