const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: ' root@localhost',
    password: ' ', // Reemplaza con tu contraseña
    database: 'todo_app'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});

module.exports = db;
msb-cbhc-qaz