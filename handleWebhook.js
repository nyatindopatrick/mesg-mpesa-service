const chargeData = require('./chargedata')

module.exports = MESG => async (req, res) => {
  if (req.body.type != 'charge.succeeded') { return res.status(200).send('ok') }

  try {
    await MESG.emitEvent('charged', chargeData(req.body.data.object))
    return res.status(200).send('ok')
  } catch (e) {
    return res.status(500).send(e.toString())
  }
}