var mysql=require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'janivadmin',
  password : 'qwerty',
  database : 'janiv'
});

connection.connect();

module.exports=connection;
