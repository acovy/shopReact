import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './menu.scss';

const Menu = ({ selectedCategories }) => {
   const [products, setProducts] = useState([])

   useEffect(() => {
      const getAllProducts = async () => await axios
         .get(`https://dummyjson.com/products/category/${selectedCategories}`)
         .then(({ data }) => setProducts(data.products))
         .catch((error) => console.log('### menu request)', error))

      getAllProducts()
   }, [selectedCategories]);

   console.log('### products', products)

   return (
      <div className="menu">
         {products.map((product) => (
            <div className="nav-item">{product.title.toUpperCase()}</div>
         ))}
      </div>
   )
}
export default Menu;