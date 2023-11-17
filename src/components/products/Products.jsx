import axios from 'axios';
import { useState, useEffect } from 'react';

const ProductsList = () => {

    const [productsList, setProductsList] = useState([]);

    const getAllProducts = async () => {
        try {
        const response = await axios.get('https://dummyjson.com/products');
        return response.data.products;
        } catch (error) {
        console.error('Error:', error);
        throw error; 
        }
    }
    useEffect(() => {
        const inStateData = async () => {
            try {
                const products = await getAllProducts();
                setProductsList(products);
            } catch (error) {
                console.error('Error getting products:', error);
            }
        };
        inStateData();
    }, []);

    return (
        <div className='products__list'>
            {productsList.map(product => (
            <li className='products__element' key={product.id}>
                <p className='products__p'>{product.title}</p>
                <img className='products__icon' src={product.thumbnail} alt="" />
                <p className='products__p'>Price: {product.price}$</p>
            </li>
            ))}
        </div>
    );
}

export default ProductsList;