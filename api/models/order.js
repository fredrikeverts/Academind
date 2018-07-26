const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model('Order', orderSchema);
//from aaa
//git push origin master
//20180726
//from git 20180726
//git push from local
//git push 0632
//git add .
//git commit -m "git add 0624"
//to make it added to repo git push