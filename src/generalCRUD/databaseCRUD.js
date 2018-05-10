var connection =require("../dbConnection/connection");


function insertData(tablename,data,successCallback,errorCallback){
try {
  var colNamesList=Object.keys(data);
  var colNames=""
  var colValue=[]
  console.log(colNamesList)
  colNamesList.forEach((name)=>{
    if (colNames!=="")
    {
    colNames+=","+name;
      }
    else {
      colNames+=name;
    }
    colValue.push(data[name])
  })

  var questionMark="?,".repeat(colNamesList.length).slice(0,colNamesList.length*2-1)
  var query = connection.run(`INSERT INTO ${tablename} (${colNames}) values (${questionMark})`,colValue, function (error, results, fields) {
    if (error)
    {
      errorCallback(error);
      return;
    }
    successCallback(results);
    // Neat!
  });
}
catch(err){
  errorCallback(err);
  console.log("Catched")
  console.log(err)
}
}



function viewAllData(tablename,successCallback,errorCallback){

  var query= connection.all(`select * from ${tablename}`,function (error,results) {
    if(error){
      errorCallback(error);
      return;
    }
    console.log(results)
    successCallback(results);

  });


}

function updateData(tablename,data,successCallback,errorCallback){
var post=[];
//pass update under u object and where under w object table column name should be matched
var updateSet=Object.entries(data.u).reduce(function(prev,elemen){
post.push(elemen[1]);
return prev+","+elemen[0]+"=?";
},0);
updateSet=updateSet.slice(2);
var whereCondition=Object.entries(data.w).reduce(function(prev,elemen){
post.push(elemen[1]);
return prev+","+elemen[0]+"=?";

},0);
whereCondition=whereCondition.slice(2);

var qq=`UPDATE ${tablename} SET ${updateSet} where ${whereCondition}`;

  var query=connection.query(qq,post,function(error,results,fields){
    if(error)
    {
      errorCallback(false);
      return;
    }
    successCallback(true);
  });

}



const obj={
  'insertData':insertData,
  'viewAllData':viewAllData,
  'updateData':updateData

}

module.exports=obj;
