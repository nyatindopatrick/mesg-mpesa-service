const Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

module.exports = async charge => {
  const customer = await Stripe.customers.retrieve(charge.customer)
  return {
    id: charge.id,
    date: new Date(charge.created * 1000),
    amount: charge.amount,
    currency: charge.currency,
    customer: customer.email,
    paid: charge.paid,
    metadata: charge.metadata
  }
}