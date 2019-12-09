// var mysql = require('mysql');
// var config = require('../config');

const config = {
  host: "us-cdbr-iron-east-05.cleardb.net",
  port: 3306, 
  uname: "b0df3641b70d8b",
  pword: "f622741a", 
  database: "heroku_d3bc50f9027c606?"
}

module.exports = config;


// var connect = mysql.createPool({
//   host: config.host,
//   port: config.port,
//   user: config.user,
//   password: config.password,
//   database: config.database,
//   connectionLimit : 20,
//   queueLimit : 100,
//   waitForConnections : true
// });

// module.exports = connect;