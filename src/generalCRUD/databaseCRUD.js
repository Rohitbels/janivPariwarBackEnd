var connection =require("../dbConnection/connection");


function insertData(tablename,data,successCallback,errorCallback){

  var query = connection.query(`INSERT INTO ${tablename} SET ?`, data, function (error, results, fields) {
    if (error)
    {
      errorCallback(error);
    }
    successCallback(results);
    // Neat!
  });
}



function viewAllData(tablename,successCallback,errorCallback){

  var query= connection.query(`select * from ${tablename}`,function (error,results,fields) {
    if(error){
      errorCallback(error);
    }
    successCallback(results);

  });


}

function updateData(tablename,data,successCallback,errorCallback){
var post=[];

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
      throw error;
      errorCallback(false);
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
