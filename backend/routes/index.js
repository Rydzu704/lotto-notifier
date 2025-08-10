var express = require("express")
var router = express.Router();

const ticketRoute = require("./ticketRoute.js");

router.use("/ticket",ticketRoute);

module.exports = router;