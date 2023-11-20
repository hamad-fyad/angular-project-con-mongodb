const express = require("express");
const app = express();
const PORT = 8000;

const path = require("path");
const folder = express.static(path.join(__dirname,"dist/"));
app.use(folder);

const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", 
               "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", 
               "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const mongoose = require("mongoose");
const mongoDB = "mongodb://127.0.0.1:27017/db";
mongoose.connect(mongoDB,{useNewUrlParser:true});

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var users = require("./routes/users.route");
var cart = require("./routes/cart.route");
var buildings= require("./routes/building.route");
app.use("/users",users);
app.use("/cart",cart);
app.use("/allbuilding",buildings);
app.use("/building",buildings);
app.use("/villa",buildings);
app.use("/apartment",buildings);

app.listen(PORT,()=>{console.log("server started to listen to port ",PORT)});