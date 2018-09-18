
var MongoClient = require('mongodb').MongoClient;
//const gethotel  = require('./test')

var path = require('path');
const url = "mongodb://localhost:27017/";
var fs = require('fs'); //file system
var express = require('express');
var app = express();
var dataFromDB = "";

app.use(express.static(path.join(__dirname, 'dist')));

//cors: Cross-origin resource sharing
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
//create database 
var urlForDBCreation = "mongodb://localhost:27017/HotelDB"; 
MongoClient.connect(urlForDBCreation, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


//create collection
MongoClient.connect(url, function(err, db) {
    var dbo = db.db("HotelDB");
  if (err) throw err;
  dbo.createCollection("hotelCollection", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});


//insert hotel 
MongoClient.connect(url, function(err, db) {
    var dbo = db.db("HotelDB");
  if (err) throw err; 
  fs.readFile('database.json', 'utf8', function (err, data) {
    if (err) throw err; 
    var json = JSON.parse(data);
    
    dbo.collection("hotelCollection").insert(json, function(err, doc) { 
    if(err) throw err;
    });
});
});


//find hotels
MongoClient.connect(url, function(err, db) {
    var dbo = db.db("HotelDB");
    if (err) throw err; 
    dbo.collection("hotelCollection").find().toArray(function(err, result) {  //result= data from database
      if (err) throw err;
      console.log(result); 
      dataFromDB = result;
      db.close(); 
  });
});
 
//drop database
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("HotelDB");
   dbo.dropCollection("hotelCollection");
  // dbo.dropDatabase();
    if (err) throw err; 
    db.close();
  }); 

 app.get('/sample', function(req,res){
     res.send(dataFromDB); 
 });

 
 app.listen(3000);

