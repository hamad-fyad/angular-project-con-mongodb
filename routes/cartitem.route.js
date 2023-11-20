const express = require("express");
const cartItemRoute = express.Router();

let CartItem = require("../models/Cart");

cartItemRoute.post("/", async (req, res) => {
    let cartItem = new CartItem(req.body);
    await cartItem.save();
    res.status(200).send(cartItem);
});


module.exports = cartItemRoute;
