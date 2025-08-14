const db = require('../services/db');

const addTicket = (ticketData) => {
  const query = `
    INSERT INTO lotterytickets (draw_id, ticket_numbers, if_lotto_plus)
    VALUES (?, ?, ?)
  `;
  return db.promise().query(query, [
    ticketData.draw_id,
    ticketData.numbers.join(','),
    ticketData.lottoPlusIsTrue,
  ]);
};

const getAllNumbers = async () => {
  const query = `SELECT lotterytickets.ticket_numbers, draws.numbers, draws.numbers_plus, lotterytickets.draw_id , lotterytickets.id FROM lotterytickets 
  Inner join draws on lotterytickets.draw_id = draws.id 
  where lotterytickets.is_pending_for_find_matches = 1;`;
   return db.promise().query(query);
};

const updatePendingStatus = (notification) =>{
      const query = `UPDATE lotterytickets SET is_pending_for_find_matches = false WHERE id = ?`;

      return db.promise().query(query, [
        notification.id
      ]);
    }
module.exports = {
  addTicket,
  getAllNumbers,
  updatePendingStatus
};
