const express = require('express');

const transctionInsert =require('./transctionInsert');
const transctionUpdate=require('./transctionUpdate');
const transctionView=require('./transctionView');
var router = express.Router();

router.post('/insert',function(req,res){

  console.log(req.body);
  transctionInsert(req,res);
});

router.post('/update',function (req,res) {
  console.log(req.body);
  transctionUpdate(req,res);
});

router.get('/',function(req,res){

transctionView(req,res);
});

module.exports=router;
