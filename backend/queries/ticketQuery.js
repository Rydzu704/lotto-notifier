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

const addDraw = (drawData) => {
  const query = `
    INSERT INTO draws (id, draw_date)
    VALUES (?, ?)
  `;
  return db.promise().query(query, [
    drawData.draw_id,
    drawData.draw_date
  ]);
};

const checkDrawExists = async (draw_id) => {
  const query = `SELECT 1 FROM draws WHERE id = ? LIMIT 1`;
  const [rows] = await db.promise().query(query, [draw_id]);
  return rows.length > 0;
};
const updateDrawResults = (drawResults) =>{
      const query = `UPDATE draws SET numbers = ?,numbers_plus = ?
      ,is_pending_for_results = false WHERE is_pending_for_results = 1`;

      return db.promise().query(query, [
        drawResults.numbers.join(','),
        drawResults.numbers_plus.join(',')
      ]);
}
const checkIfResultsPending = async () => {
  const query = `SELECT * FROM draws WHERE is_pending_for_results = 1 AND draw_date <= NOW()`;
  const [rows] = await db.promise().query(query);
  return rows.length > 0;
};
const getAllNumbers = async () => {
  const query = `SELECT lotterytickets.ticket_numbers, draws.numbers, draws.numbers_plus, lotterytickets.draw_id , lotterytickets.id FROM lotterytickets 
  Inner join draws on lotterytickets.draw_id = draws.id 
  where lotterytickets.is_pending_for_find_matches = 1;`;
   return db.promise().query(query);
};
const addNotification = (notification) => {
  const query = `
    INSERT INTO notifications (draw_id,lotto_hits_count,
    lotto_hits_numbers,lotto_plus_hits_count,lotto_plus_hits_numbers)
    VALUES (?,?,?,?,?)
  `;
  return db.promise().query(query, [
    notification.draw_id,
    notification.rightNumbersCount,
    notification.rightNumbers,
    notification.rightNumbersPlusCount,
    notification.rightNumbersPlus
  ]);
};
const updatePendingStatus = (notification) =>{
      const query = `UPDATE lotterytickets SET is_pending_for_find_matches = false WHERE id = ?`;

      return db.promise().query(query, [
        notification.id
      ]);
    }
module.exports = {
  addTicket,
  addDraw,
  checkDrawExists,
  updateDrawResults,
  checkIfResultsPending,
  getAllNumbers,
  addNotification,
  updatePendingStatus
};
