import mongoose, { Schema } from "mongoose";

// create user schema
const productSchema = new Schema({
    productName: {
        type: String,
        required: true,
    },
    sku: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    stockQuality: {
        type: String,
        required: true,
    },
    lastUpdate: {
        type: Date,
    },
}, { timestamps: true });

// create user model
export const Product = mongoose.model("Product", productSchema);