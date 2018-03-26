var generalDbCrud=require('../generalCRUD/databaseCRUD');



const transctionInsert=(req,res)=>{

  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }

  const successCallback=(result)=>{
    console.log(result);
    res.send(true);

  }
generalDbCrud.insertData("transactions",req.body,successCallback,errorCallback);
}

module.exports=transctionInsert;
