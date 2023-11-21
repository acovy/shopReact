import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllProducts = () => {
    const [allProductsList, setAllProductsList] = useState([]);

    const getAllProducts = async (all) => {
        try {
            const response = await axios.get(`https://dummyjson.com/products/category/${all}`);
            return response.data.products;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const productsMotorcycle = await getAllProducts('motorcycle');
                const productsSmartphones = await getAllProducts('smartphones');
                const productsDecoration = await getAllProducts('home-decoration');

                const allProducts = [...productsMotorcycle, ...productsSmartphones, ...productsDecoration];

                const shuffledProducts = allProducts.sort(() => Math.random() - 0.5);

                setAllProductsList(shuffledProducts);
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
                    <li key={index}>
                        <Link to={`/product/${product.id}`}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AllProducts;
