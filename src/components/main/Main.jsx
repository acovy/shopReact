
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, } from 'react-router-dom';
import './Main.scss';


const Main = () => {
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
            setCategoriesList(["all", ...filtered])
         })
         .catch((error) => console.log(error));

      getAllCategories()
   }, [])


   return (
      <div className="main">
         {categoriesList && categoriesList.length > 0 ? (
            categoriesList.map((category, index) => (
               <li className='categories__element' key={index}>
                  <Link to={`/${category}`}>{category.toUpperCase()}</Link>
               </li>
            ))
         ) : (
            <p>Loading categories...</p>
         )};

      </div>

   )
}

export default Main;