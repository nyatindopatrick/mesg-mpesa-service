const credentials = {
  apiKey: "9753d882178aae8de47018dc21ca27a3e448459ab1921084ceedbff0390cb414",
  username: "Sandbox"
};
const AfricasTalking = require("africastalking")(credentials);
const chargeData = require("../chargedata");

const payments = AfricasTalking.PAYMENTS;

module.exports = async function({ source, amount, phone }) {
  const options = {
    // Set the name of your Africa's Talking payment product
    productName: source,
    // Set the phone number you want to send to in international format
    phoneNumber: phone,
    // Set the 3-Letter ISO currency code and the checkout amount
    currencyCode: "KES",
    amount: amount,
    // Set any metadata that you would like to send along with this request.
    // This metadata will be included when we send back the final payment notification
    metadata: {
      foo: "bar",
      key: "value"
    }
  }


  return chargeData(payments, options);
};



