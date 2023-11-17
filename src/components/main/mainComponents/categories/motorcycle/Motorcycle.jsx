import axios from 'axios';
import { useState, useEffect } from 'react';

const Motorcycle = () => {
    const [motorcycleList, setMotorcycleList] = useState([]);

    const getAllMotorcycle = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/category/motorcycle');
            return response.data.products; 
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    useEffect(() => {
        const fetchMotorcycle = async () => {
            try {
                const motorcycle = await getAllMotorcycle();
                setMotorcycleList(motorcycle);
            } catch (error) {
                console.error('Error getting products:', error);
            }
        };
        fetchMotorcycle();
    }, []);

    return (
        <div>
            <h2>Motorcycle</h2>
            <ul>
                {motorcycleList.map((motorcycle, index) => (
                    <li key={index}>{motorcycle.title}</li>
                    // Здесь можешь отобразить любую информацию о смартфонах, доступную в объекте
                ))}
            </ul>
        </div>
    )
}

export default Motorcycle;
