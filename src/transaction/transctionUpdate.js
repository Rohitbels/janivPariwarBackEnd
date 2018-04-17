var generalDbCrud=require('../generalCRUD/databaseCRUD');


const transctionUpdate=(req,res)=>{
  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }

  const successCallback=(result)=>{
    console.log(result);
    res.send(true);

  }
generalDbCrud.updateData("transactions",req.body,successCallback,errorCallback);

}

module.exports=transctionUpdate;
