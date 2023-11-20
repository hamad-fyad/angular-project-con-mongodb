const express = require("express");
const userRoute = express.Router();

let User = require("../models/User");

userRoute.post("/add", async (req,res)=>{
    let user = new User(req.body);
    await user.save();
    res.status(200).send(user);
});

userRoute.get("/", async (req,res)=>{
    let users = await User.find({});
    res.status(200).send(users);
});
    
module.exports = userRoute;