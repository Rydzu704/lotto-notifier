var express = require("express")
var router = express.Router();

const ticketController = require("../../../../controllers/ticketController.js");

router.post(
    "/",
    ticketController.sendTicket
);
