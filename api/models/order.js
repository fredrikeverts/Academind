const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', orderSchema);
<<<<<<< HEAD

//test

//freom 
=======
//sadfghj
//test
>>>>>>> 852ddc2d29e3fe457f5ce2f27c7854ef968b263e
