const mongoose = require("mongoose");
let User = new mongoose.Schema(
    {
        name : String,
        email : {
            type: String,
            unique: true
        },
        password: String,
        gender : String,
        date:String,
        img: String
    },
    {
        collection:"Users",
        versionKey: false
    }
);
module.exports = mongoose.model("Users",User);


