// const { getDrawNumber } = require("./lottoService");
// const { getNextDrawDate } = require("./lottoService");
// const { getDrawResults } = require("./lottoService");
// const { sendResults } = require("../controllers/drawResultController");
const {processTicketsAndSetNotification} = require("./notificationService");

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
    await processTicketsAndSetNotification();
      
  } catch (err) {
    console.error("Błąd:", err.message);
  }
})();
