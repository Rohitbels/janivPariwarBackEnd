var generalDbCrud=require('../generalCRUD/databaseCRUD');


const userUpdate=(req,res)=>{
  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }

  const successCallback=(result)=>{
    console.log(result);
    res.send(true);

  }
generalDbCrud.updateData("user",req.body,successCallback,errorCallback);

}

module.exports=userUpdate;
