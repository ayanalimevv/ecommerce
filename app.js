const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();
const { append } = require("vary");
const req = require("express/lib/request");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const url = "mongodb://localhost:27017/alpha_store";
mongoose.connect(url);
let schema = mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
let Store = mongoose.model("alpha_store", schema);

app.get("/add",(req,res)=>{
    res.render("add");
})
app.post("/add",(req,res)=>{
    let img=req.body.img;
    let title=req.body.title;
    let price=req.body.price;
    let item= new Store({
        img:img,
        title:title,
        price:price
    });
    item.save();
    res.redirect("/");
});

app.get("/", (req, res) => {
  res.render("index");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.render("index");
});
app.listen("3000", () => {
  console.log("Listening");
});
