// Conexion a la base de datos
const mysql=require('mysql2');


const db = mysql.createPool(
{
        host:"localhost",
        user:"root",
        password:"1068216789",
        database:"pagina",
        port:3306
});

module.exports = db.promise();
