const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const ejs=require('ejs');
const app=express();
const { append } = require('vary');

app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("index");
})
app.post("/",(req,res)=>{
    console.log(req.body);
    res.render("index");
})
app.listen('3000',()=>{
    console.log("Listening");
})