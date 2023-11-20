const express = require("express");
const Buildingroute = express.Router();

let Building = require("../models/Building");
let Apartment= require("../models/apartment");
let Villa = require("../models/villa");

Buildingroute.get("/Building", async (req,res)=>{
    let users = await Building.find({});
    res.status(200).send(users);
});
Buildingroute.get("/", async (req, res) => {
    let allBuildings = [];
    
    const villas = await Villa.find({});
    const buildings = await Building.find({});
    const apartments = await Apartment.find({});

    allBuildings.push(...villas, ...buildings, ...apartments);

    res.status(200).send(allBuildings);
});

Buildingroute.get("/villa", async (req, res) => {
    let villas = await Villa.find({});
    res.status(200).send(villas);
});



Buildingroute.get("/apartment", async (req, res) => {
    let apartments = await Apartment.find({});
    res.status(200).send(apartments);
});


module.exports = Buildingroute;
