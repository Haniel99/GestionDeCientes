const mysql = require("mysql");

const config = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DBNAME
}
/**Inicializar la coneccion a la base de datos*/
const connection = mysql.createConnection(config);

connection.connect(err => {
    err ? console.log('Error connectiong to the database') :
        console.log('Database connection ssucceful');
});

module.exports =  { connection };
