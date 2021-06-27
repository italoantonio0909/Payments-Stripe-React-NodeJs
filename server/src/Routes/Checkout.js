const Router = require('express').Router()
const Stripe = require('stripe')
const config = require('../config')

const stripe = new Stripe(config.STRIPE_SECRET_KEY)
console.log(config.STRIPE_SECRET_KEY)

Router.post('/api/checkout', async function (request, response) {
  const { id, amount } = request.body
  const payment = await stripe.paymentIntents.create({
    amount,
    currency: 'USD',
    payment_method: id,
    description: 'Watch sweet, border black and beatiful.',
    confirm: true,
  })

  console.log(payment)
  response.send({ message: 'Payment successfull' })
})

module.exports = Router
