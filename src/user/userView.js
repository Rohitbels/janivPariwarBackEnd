var generalDbCrud=require('../generalCRUD/databaseCRUD');


const userView=(req,res)=>{
  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }
  const successCallback=(result)=>{
    console.log(result);
    res.json(result);
  }
generalDbCrud.viewAllData("user",successCallback,errorCallback);
}

module.exports=userView;
