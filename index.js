const Service = require("@mesg/service");
const charge = require("./tasks/charge");
const express = require("express");
const bodyParser = require("body-parser");
const handleWebhook = require("./webHook");
const axios = require("axios");
const https = require('https')

const app = express();


const MESG = new Service();

MESG.listenTask({
  charge
});


const PORT =  4000⏎
 ⏎
// parse application/x-www-form-urlencoded⏎
app.use(bodyParser.urlencoded({ extended: false }))⏎
⏎
// parse application/json⏎
app.use(bodyParser.json())⏎
⏎
const url = 'https://webhook.site/token/9233ac5d-0ae0-407e-a06c-136810233aec/requests';⏎
⏎
// alternatively we can bind this into a body function
https.get(url, res => {⏎
  res.setEncoding("utf8");⏎
  let body = "";⏎
  res.on("data", data => {⏎
    body += data;⏎
  });⏎
  res.on("end", () => {⏎
    const parseData= JSON.parse(body)⏎
    console.log(parseData.data[1].content)⏎
    console.log(JSON.parse(parseData.data[1].content))⏎
  });⏎
});⏎
⏎
app.listen(PORT, ()=> console.log(`app running on port ${PORT} `))⏎
