const db = require('../services/db');

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

module.exports = {
  addDraw,
  checkDrawExists,
  updateDrawResults,
  checkIfResultsPending
};
