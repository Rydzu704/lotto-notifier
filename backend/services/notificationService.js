require('dotenv').config();
const ticketQuery = require('../queries/ticketQuery');
const sendNotification = require('../controllers/notificationController')

async function processTicketsAndNotify() {
    // Getting numbers from database
        const [rows] = await ticketQuery.getAllNumbers();
        const { draw_id, ticket_numbers, numbers, numbers_plus } = rows[0];
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

    // Adding notification
        const notification = {draw_id, rightNumbersCount, rightNumbers, rightNumbersPlusCount, rightNumbersPlus};

        await sendNotification(notification);

  }

module.exports = { processTicketsAndNotify };