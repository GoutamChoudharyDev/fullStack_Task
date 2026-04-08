import { Product } from "../models/product.model.js";

// get all products controller
const getAllProducts = async (_, res) => {
    try {
        // get all products from database
        const products = await Product.find();
        if (products.length === 0) {
            return res.status(404).json({
                message: "No products found"
            });
        }

        // send response
        return res.status(200).json({
            message: "Products fetched successfully",
            products
        })
    } catch (error) {
        console.error("Error in getAllProducts controller:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

// update product 
const updateProduct = async (req, res) => {
    try {
        // get product id from request params
        const { _id } = req.params;

        // get data from request body
        const { productName, sku, category, price, stockQuality } = req.body;

        // validate data
        if (!productName || !sku || !category || !price || !stockQuality) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        // find product by id and update
        const updatedProduct = await Product.findByIdAndUpdate(_id, {
            productName,
            sku,
            category,
            price,
            stockQuality,
            lastUpdate: Date.now(),
        }, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // send response
        return res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        })
    } catch (error) {
        console.error("Error in updateProduct controller:", error);
        return res.status(500).json({
            message: "Internal server error"
        });
    }
}

export {
    getAllProducts,
    updateProduct
};