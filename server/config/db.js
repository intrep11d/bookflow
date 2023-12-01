const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',  // MySQL username
    password: '',  // MySQL password
    database: 'BookFlow',  // Your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool.promise();
