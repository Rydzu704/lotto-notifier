const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'lotto_notifier',
});

module.exports = pool;