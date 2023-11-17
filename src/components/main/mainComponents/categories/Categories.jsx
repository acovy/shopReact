import axios from 'axios';
import { useState, useEffect } from 'react';
import './Categories.scss';

const Categories = () => {
    const [categoriesList, setCategoriesList] = useState([]);

    const getAllCategories = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products/categories');
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllCategories();
                
                const filteredCategories = ['all', ...data.filter(category => (
                    category === 'smartphones' || 
                    category === 'motorcycle' || 
                    category === 'home-decoration'
                ))];
                setCategoriesList(filteredCategories);
            } catch (error) {
                console.error('Error getting categories:', error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <div className='categories__list'>
            {categoriesList && categoriesList.length > 0 ? (
                categoriesList.map((category, index) => (
                    <li className='categories__element' key={index}>
                        <p>{category}</p>
                    </li>
                ))
            ) : (
                <p>Loading categories...</p>
            )}
        </div>
    )
}

export default Categories;
