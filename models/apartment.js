const mongoose = require("mongoose");

let Building = new mongoose.Schema(
    {
        title : {
            type: String,
            required: true
        },
        img: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    },
    {
        collection: "apartment",
        versionKey: false
    }
);

module.exports = mongoose.model("apatment", Building);
