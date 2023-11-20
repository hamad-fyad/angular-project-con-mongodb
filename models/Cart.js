const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: String },
    buildings: { type: mongoose.Schema.Types.Mixed },
    sum: { type: Number },
    isPaid:{type:Boolean},
    id: { type: Number }

},
    {
        collection: "Cart",
        versionKey: false
    }

);


module.exports = mongoose.model('cartSchema', cartSchema);
