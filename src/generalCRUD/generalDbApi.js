var generalDbCrud=require('./databaseCRUD');



const insert=(tableName,req,res)=>{
  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }
  const successCallback=(result)=>{
    console.log(result);
    res.send(true);
  }
generalDbCrud.insertData(tableName,req.body,successCallback,errorCallback);
}

const view=(tableName,req,res)=>{

  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }
  const successCallback=(result)=>{
    console.log(result);
    res.json(result);
  }
generalDbCrud.viewAllData(tableName,successCallback,errorCallback);
}

const update=(tableName,req,res)=>{
  const errorCallback=(error)=>{
    console.log(error);
    res.send(false);
  }

  const successCallback=(result)=>{
    console.log(result);
    res.send(true);

  }
generalDbCrud.updateData(tableName,req.body,successCallback,errorCallback);

}


const obj={
  insert,
  view,
  update

}

module.exports=obj;


