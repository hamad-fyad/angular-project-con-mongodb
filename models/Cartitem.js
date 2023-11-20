const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let cartproductSchema = new Schema(
  {
    building: {
      type: Schema.Types.ObjectId,
      ref: 'Building',
      required: true
    },
    qty: {
      type: Number,
      default: 1
    }
  },
  {
    collection: 'CartProducts',
    versionKey: false
  }
);

let cartSchema = new Schema(
  {
    userMail: {
      type: String,
      required: true
    },
    buildings: [
      {
        type: Schema.Types.ObjectId,
        ref: 'CartProduct'
      }
    ],
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    paid: {
      type: Boolean,
      default: false
    },
    total: {
      type: Number,
      default: 0
    }
  },
  {
    collection: 'Carts',
    versionKey: false
  }
);

const CartProduct = mongoose.model('CartProduct', cartproductSchema);

cartSchema.statics.addBuildings = async function (userMail, buildingIds) {
  try {
    const buildingDocuments = await Building.find({ _id: { $in: buildingIds } });

    const cartProducts = [];
    for (let building of buildingDocuments) {
      const cartProduct = new CartProduct({
        building: building._id,
        qty: 1
      });
      await cartProduct.save();
      cartProducts.push(cartProduct._id);
    }

    const cart = new this({
      userMail,
      buildings: cartProducts
    });

    const savedCart = await cart.save();
    return savedCart;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CartProduct,
  Cart: mongoose.model('Cart', cartSchema)
};
