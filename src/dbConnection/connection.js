var mysql=require('mysql');
const path = require('path');
const sqlite3 = require('sqlite3');


connection=new sqlite3.Database(path.join(__dirname,'..','..','db','test'))
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'janivadmin',
//   password : 'qwerty',
//   database : 'janiv'
// });
//
// connection.connect();

module.exports=connection;
