require('dotenv').config();
const ticketQuery = require('../queries/ticketQuery');
const sendNotification = require('../controllers/notificationController')

async function processTicketsAndSetNotification() {
    // Getting numbers from database
        const [rows] = await ticketQuery.getAllNumbers();
        //Loop for handling multiple tickets
        for(let index = 0; index < rows.length; index++){
                const { draw_id, id, ticket_numbers, numbers, numbers_plus } = rows[index];
                let rightNumbers = [];
                let rightNumbersPlus = [];
                const ticketNumbersArray = ticket_numbers.split(',').map(n => parseInt(n, 10));
                const numbersArray = numbers.split(',').map(n => parseInt(n, 10));
                const numbersPlusArray = numbers_plus.split(',').map(n => parseInt(n, 10));

            // Comparing winning numbers to ticket numbers

                for(let i = 0; i<6;i++){
                    for(let j = 0; j<6;j++){
                        if(ticketNumbersArray[i] == numbersArray[j]){
                            rightNumbers.push(ticketNumbersArray[i])
                        }
                        if(ticketNumbersArray[i] == numbersPlusArray[j]){
                            rightNumbersPlus.push(ticketNumbersArray[i])
                        }
                    }
                }
                const rightNumbersCount = rightNumbers.length
                const rightNumbersPlusCount = rightNumbersPlus.length
                rightNumbers = rightNumbers.join(",");
                rightNumbersPlus=rightNumbersPlus.join(",");
            // Adding notification
                const notification = {draw_id, rightNumbersCount, rightNumbers, rightNumbersPlusCount, rightNumbersPlus, id};
                
                await sendNotification(notification);
        }
  }

module.exports = { processTicketsAndSetNotification };