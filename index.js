const express = require('express')
const bodyParser = require('body-parser')
const Service = require('@mesg/service')
const charge = require('./tasks/charge')
const handleWebhook = require('./handleWebhook')

const MESG = new Service()

MESG.listenTask({
  charge
})

const app = express()
app.use(bodyParser.json())
app.post('/mpesa', handleWebhook(MESG))
app.listen(3001, () => console.log(`Stripe webhook server started app listening on port 3001!`))
