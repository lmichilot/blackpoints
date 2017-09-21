'use strict';

var dotenv = require('dotenv');
dotenv.load()

const mysql = require('mysql'),
	dbOptions = {
		host: process.env.DB_HOST,
		user: process.env.DB_USER,
		password: process.env.DB_ACCE,
		port: process.env.DB_PORT,
		database: process.env.DB_ID
	},
	conn = mysql.createConnection(dbOptions);

conn.connect((err) => {
	return (err)
		? console.log(`Error al Conectarse a MySQL: ${err.stack}`)
		: console.log(`Conexión realizada con MySQL N°: ${conn.threadId}`);
});

module.exports = conn;
