const Service = require("@liteflow/service");
const charge = require("./tasks/charge");
require("dotenv").config()

const MESG = new Service();

MESG.listenTask({
  charge
});
