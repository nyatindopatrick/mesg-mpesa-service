const Service = require("@mesg/service");
const charge = require("./tasks/charge");
// const express = require("express");
// const bodyParser = require("body-parser");
// const handleWebhook = require("./webHook");
// const axios = require("axios");

// const app = express();

// app.use(bodyParser.json());

const MESG = new Service();

MESG.listenTask({
  charge
});

// app.post("https://webhook.site/9233ac5d-0ae0-407e-a06c-136810233aec", handleWebhook(MESG));
// app.listen(3001, () =>
//   console.log(`Mpesa webhook server started app listening on port 3001!`)
// );
