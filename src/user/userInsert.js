var generalDbCrud=require('../generalCRUD/databaseCRUD');



const userInsert=(req,res)=>{

  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }

  const successCallback=(result)=>{
    console.log(result);
    res.send(true);

  }
generalDbCrud.insertData("user",req.body,successCallback,errorCallback);
}

module.exports=userInsert;
