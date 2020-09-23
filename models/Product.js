const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    quantity: Number,
    image: Object
})

mongoose.model('products', productSchema);