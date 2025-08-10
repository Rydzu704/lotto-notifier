const express = require("express");
const app = express();
app.use(express.json());

const ticketController = require("./controllers/ticketController");

app.post("/api/tickets", ticketController.sendTicket);

app.get("/", (req, res) => {
  res.send("Lotto Notifier API działa");
});

app.listen(3001, () => {
  console.log("Serwer działa na http://localhost:3001");
});