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
        <div>
            <h2>Список товаров:</h2>
            <ul>
                {productsList.map(product => (
                    <li key={product.id}>
                        <p>{product.title}</p>
                        <img src={product.thumbnail} alt="" />
                        <p>Price: {product.price}$</p>
                        <p>---------------------</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductsList;
// состояние с продуктами 
// запрос и data запроса закидываю в стейт
// useEffect вызываем запрос как побочный эффект при обновлении делал загрузку
// отрисовать state через map (в getAllProducts будет весь массив продуктов)