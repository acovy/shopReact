import axios from 'axios';
import { useState, useEffect } from 'react';
import './Categories.scss';
import Smartphones from './smartphones/Smartphones';
import Motorcycle from './motorcycle/Motorcycle';
import Homedecoration from './homedecoration/Homedecoration';
import AllProducts from './allProducts/AllProducts';

const Categories = () => {
    const [categoriesList, setCategoriesList] = useState([]);

    const [visibleComponent, setVisibleComponent] = useState('');

    const showComponent = (component) => {
        setVisibleComponent(component);
    };

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
                        <button
                            className="categories__btn"
                            onClick={() => showComponent(category)}
                        >
                            {category.toUpperCase()}
                        </button>
                    </li>
                ))
            ) : (
                <p>Loading categories...</p>
            )}
            {visibleComponent === 'smartphones' && <Smartphones />}
            {visibleComponent === 'motorcycle' && <Motorcycle />}
            {visibleComponent === 'home-decoration' && <Homedecoration />}
            {visibleComponent === 'all' && <AllProducts />}
        </div>
    )
}

export default Categories;
