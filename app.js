const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.ejs");

let items = ["To eat lunch","To do programming","To give exam"];
let workArray = [];

const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get("/",function(req,res){
  res.render('list', {listName: date.getDay(),items: items});
});


app.post("/",function(req,res){

  if (req.body.list === 'WorkList') {
    workArray.push(req.body.newItem);
    res.redirect("/work");
  } else {
    items.push(req.body.newItem);
    res.redirect("/");
  }

});


app.get("/work",function(req,res){
  res.render('list', {listName: 'WorkList',items: workArray});
});


app.listen(3000,function(){
  console.log("server is running on 3000");
});
