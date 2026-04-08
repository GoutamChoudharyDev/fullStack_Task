import { useState } from "react"
import { api } from "../services/api";
import { useEffect } from "react";

const Products = () => {
    const [products, setProducts] = useState([]);

    // function to get all products
    const getProducts = async () => {
        try {
            const response = await api.get('/api/products/');
            setProducts(response.data.products);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            {/* Products table */}
            <h1 className='text-2xl text-gray-500'>Products Page</h1>
            <table className='w-full text-left border-collapse mt-4 '>
                <thead className='bg-gray-700 w-full text-white'>
                    <tr className='w-full'>
                        <th className='border-b-2 border-gray-300 p-2'>Product Name</th>
                        <th className='border-b-2 border-gray-300 p-2'>SKU</th>
                        <th className='border-b-2 border-gray-300 p-2'>Category</th>
                        <th className='border-b-2 border-gray-300 p-2'>Price</th>
                        <th className='border-b-2 border-gray-300 p-2'>Stock Quality</th>
                        <th className='border-b-2 border-gray-300 p-2'>Last Update</th>
                    </tr>
                </thead>
                <tbody className='bg-gray-800 w-full text-white'>
                    {/* Map through products and display in table rows */}
                    <tr className='w-full'>
                        {
                            products.map((product) => (
                                <tr key={product._id} className='w-full'>
                                    <td className='border-b border-gray-300 p-2'>{product.productName}</td>
                                    <td className='border-b border-gray-300 p-2'>{product.sku}</td>
                                    <td className='border-b border-gray-300 p-2'>{product.category}</td>
                                    <td className='border-b border-gray-300 p-2'>{product.price}</td>
                                    <td className='border-b border-gray-300 p-2'>{product.stockQuality}</td>
                                    <td className='border-b border-gray-300 p-2'>{new Date(product.lastUpdate).toLocaleString()}</td>
                                </tr>
                            ))
                        }
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Products
