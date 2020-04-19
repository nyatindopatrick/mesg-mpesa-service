const Service = require("@mesg/service");
const charge = require("./tasks/charge");
const express = require("express");
const bodyParser = require("body-parser");
const handleWebhook = require("./webHook");
const axios = require("axios");

const fetchData = require('./_helper')

const app = express();

const PORT =  4000

// parse application/x-www-form-urlencoded⏎
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// url to get all the data from webhook.site
const url = 'https://webhook.site/token/9233ac5d-0ae0-407e-a06c-136810233aec/requests';
console.log(fetchData(url))

const MESG = new Service();

MESG.listenTask({
 charge
});

app.listen(PORT, ()=> console.log(`app running on port ${PORT} `))
