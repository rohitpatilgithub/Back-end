import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    price : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
},{
    timestamps : true // createdAt , updatedAt
});

const Product = mongoose.model('Product',productSchema);
// products ( Mongoose takes 'Product' and converts it to 'products' )

export default Product;