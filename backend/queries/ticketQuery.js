const db = require('../services/db');

const addTicket = (ticketData) => {
  const query = `
    INSERT INTO lottery_tickets (draw_id, ticket_numbers, with_plus)
    VALUES (?, ?, ?)
  `;
  return db.promise().query(query, [
    ticketData.draw_id,
    ticketData.numbers,
    ticketData.isLottoPlus,
  ]);
};

module.exports = {
  addTicket,
};