const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'quockmart_db'
});

connection.connect((err) => {
    if (err) {
        console.log('conection field', err);
        return;
    } else {
        console.log('connect database');
    }
});

export default connection;