const db = require('../services/db');

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
module.exports = {addNotification};