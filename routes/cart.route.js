const express = require("express");
const cartRoute = express.Router();

const Cart  = require("../models/Cart.js");

cartRoute.post("/add", async (req, res) => {console.log(req.body);
    try {
        let cart = new Cart(req.body);
        await cart.save();
        res.status(200).send(cart);
    } catch (error) {
        console.error("Error occurred while saving the cart: ", error);
        res.status(500).send(error);
    }
});

module.exports = cartRoute;
