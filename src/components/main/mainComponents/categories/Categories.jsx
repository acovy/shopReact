import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

import Smartphones from './smartphones/Smartphones';
import Motorcycle from './motorcycle/Motorcycle';
import Homedecoration from './homedecoration/Homedecoration';
import AllProducts from './allProducts/AllProducts';

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
    
    const CategoryComponent = () => {
        
        const { category } = useParams();

        switch (category) {
            case 'smartphones':
                return <Smartphones />;
            case 'motorcycle':
                return <Motorcycle />;
            case 'home-decoration':
                return <Homedecoration />;
            case 'all':
                return <AllProducts />;
            default:
                return <p>Category not found</p>;
        }
    };

    return (
        <div className='categories__list'>
            {categoriesList && categoriesList.length > 0 ? (
                categoriesList.map((category, index) => (
                        <li className='categories__element' key={index}>
                            <Link to={`/${category}`}>{category.toUpperCase()}</Link>
                        </li>
                ))
            ) : (
                <p>Loading categories...</p>
            )}
            <Routes>
                <Route path="/:category" element={<CategoryComponent />} />
            </Routes>
        </div>
    )
}

export default Categories;
