var express = require("express")
var router = express.Router();

const ticketController = reqire("../../../../controllers/ticketController.js");

router.post(
    "/",
    ticketController.sendTicket
);
