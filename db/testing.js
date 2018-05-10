const sqlite3 = require('sqlite3');




var db=new sqlite3.Database('test');



db.exec('insert into transactions (tid) values(123)')


db.all('select * from transactions',(e,r)=>{
  if(e)
    return

  console.log(r)

})
