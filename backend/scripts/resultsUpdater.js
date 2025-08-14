require('dotenv').config();
const { sendResults } = require('../controllers/drawResultController.js');
const { checkIfResultsPending } = require('../queries/ticketQuery.js');
const { processTicketsAndSetNotification } = require('../services/notificationService.js');

async function updateResultsAndNotify() {
  try {
    const resultsPending = await checkIfResultsPending();
    console.log(resultsPending);
    if(resultsPending){
        const result = await sendResults();
        console.log(result.message);
        await processTicketsAndSetNotification();
    }else{
      console.log("Results has been already updated");
    }

  } catch (err) {
    console.error("error:", err);
  }
}
updateResultsAndNotify();