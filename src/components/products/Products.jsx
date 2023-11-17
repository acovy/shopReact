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
        <div className='products'>
            {productsList.map(product => (
            <li className='products__li' key={product.id}>
                <p className='products__p'>{product.title}</p>
                <img className='products__icon'src={product.thumbnail} alt="" />
                <p className='products__p'>Price: {product.price}$</p>
                <p className='products__p'>---------------------</p>
            </li>
            ))}
        </div>
    );
}

export default ProductsList;
// состояние с продуктами 
// запрос и data запроса закидываю в стейт
// useEffect вызываем запрос как побочный эффект при обновлении делал загрузку
// отрисовать state через map (в getAllProducts будет весь массив продуктов)