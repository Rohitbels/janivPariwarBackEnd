var generalDbCrud=require('../generalCRUD/databaseCRUD');


const transctionView=(req,res)=>{
  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }
  const successCallback=(result)=>{
    console.log(result);
    res.json(result);
  }
generalDbCrud.viewAllData("transactions",successCallback,errorCallback);
}

module.exports=transctionView;
