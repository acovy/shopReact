import axios from 'axios';
import { useState, useEffect } from 'react';

const Smartphones = () => {
    const [smartphonesList, setSmartphonesList] = useState([]);

    const getAllSmartphones = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/category/smartphones');
            return response.data.products;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    useEffect(() => {
        const fetchSmartphones = async () => {
            try {
                const smartphones = await getAllSmartphones();
                setSmartphonesList(smartphones);
            } catch (error) {
                console.error('Error getting products:', error);
            }
        };
        fetchSmartphones();
    }, []);

    return (
        <div>
            <h2>Smartphones</h2>
            <ul>
                {smartphonesList.map((smartphone, index) => (
                    <li key={index}>{smartphone.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default Smartphones;
