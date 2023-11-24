import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import './index.scss';

const Headers = ({setSelectedCategories}) => {
   const [categoriesList, setCategoriesList] = useState([]);

   useEffect(() => {
      const getAllCategories = async () => await axios
         .get('https://dummyjson.com/products/categories')
         .then(({ data }) => {
            const filtered = data.filter(category => (
               category === 'smartphones' ||
               category === 'motorcycle' ||
               category === 'home-decoration'
            ))
            setCategoriesList([...filtered])
         })
         .catch((error) => console.log(error));

      getAllCategories()
   }, [])

   return (
      <div className="main">
         {categoriesList && categoriesList.length > 0 ? (
            categoriesList.map((category, index) => (
               <div className='categories__element' key={index} onClick={() => setSelectedCategories(category)}>
                  {/* <Link to={`/${category}`}> */}
                     {category.toUpperCase()}
                     {/* </Link> */}
               </div>
            ))
         ) : (
            <p>Loading categories...</p>
         )};
      </div>
   )
}

export default Headers;