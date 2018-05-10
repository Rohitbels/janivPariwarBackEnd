const sqlite3 = require('sqlite3');


db=new sqlite3.Database('test')



db.exec(`create table User(
  uid INTEGER NOT NULL PRIMARY KEY,
  NAME TEXT,
  MAIL TEXT

)
  `)

  db.exec(`create table Collections(
    cid INTEGER NOT NULL,
    period TEXT,
    description TEXT,
    primary key (cid)
  )`)

db.exec(`create table Transactions(
  tid INTEGER not null ,
  uid INTEGER NOT NULL,
  cid INTEGER NOT NULL,
  amount LONG,
  description TEXT,
  modeOfTransfer varchar(100),
  modified_date TEXT,
  modified_by TEXT,
  primary key(tid),
  FOREIGN KEY (uid) REFERENCES USER(uid),
  FOREIGN KEY (Cid) REFERENCES Collections(cid)

)`)



// db.exec('create table user (id INTEGER)')
//
// db.get('select * from user',(err,row)=>{
//   if(err)
//   {
//     console.log("err")
//   }
//   console.log(row)
//
// })
//
// db.exec('insert into user (id) values(1)')
//
//
// db.all('select * from user',(err,rows)=>{
//   if(err)
//   {
//     console.log("err")
//   }
//   console.log(rows)
//   for( row in rows){
//
//
//   console.log(row)
// }
// })
