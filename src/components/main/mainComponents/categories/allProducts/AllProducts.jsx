import axios from 'axios';
import { useState, useEffect } from 'react';

const AllProducts = () => {
    const [allProductsList, setAllProductsList] = useState([]);

    const getAllProducts = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/');
            return response.data.products;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const products = await getAllProducts();
                setAllProductsList(products);
            } catch (error) {
                console.error('Error getting products:', error);
            }
        };
        fetchAllProducts();
    }, []);

    return (
        <div>
            <h2>All</h2>
            <ul>
                {allProductsList.map((product, index) => (
                    <li key={index}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts;
