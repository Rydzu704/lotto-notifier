require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const ticketController = require("../controllers/ticketController");

app.post("/api/ticket", ticketController.sendTicket);

app.get("/", (req, res) => {
  res.send("Lotto Notifier API działa");
});

app.listen(3001, () => {
  console.log("Serwer działa na http://localhost:3001");
});