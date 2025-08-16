// const { getDrawNumber } = require("./lottoService");
require('dotenv').config();
// const { getNextDrawDate } = require("./lottoService");
// const { getDrawResults } = require("./lottoService");
// const { sendResults } = require("../controllers/drawResultController");
 const { getTicket } = require("../controllers/ticketController");
//const {processTicketsAndSetNotification} = require("./notificationService");

(async () => {
  try {
    //const number = await getDrawNumber();
    //const date = await getNextDrawDate();
    //console.log("Draw date is:", date);
    //console.log("Numer losowania:", number);
    // const result = await getDrawResults();
    // console.log(result);
    //const number = await getDrawNumber();
    //const results = await sendResults();
    //await processTicketsAndSetNotification();
    await getTicket();
  } catch (err) {
    console.error("Błąd:", err.message);
  }
})();
