import React from 'react';
import Main from './components/main/Main';
import { Route, BrowserRouter, Router, Routes } from 'react-router-dom';
import AllProducts from './components/main/mainComponents/categories/allProducts/AllProducts';
import Homedecoration from './components/main/mainComponents/categories/homedecoration/Homedecoration';
import Motorcycle from './components/main/mainComponents/categories/motorcycle/Motorcycle';
import Smartphones from './components/main/mainComponents/categories/smartphones/Smartphones';
import SingleProduct from './components/main/mainComponents/singleProduct/SingleProduct';

import './App';

const App = () => {
   return (
      <div className='App'>
         <BrowserRouter>
            <Routes >
               <Route path='/' element={<Main />} />
               <Route path="/product/:id" element={<SingleProduct />} />
               <Route path="/all" element={<AllProducts />} />
               <Route path="/smartphones" element={<Smartphones />} />
               <Route path="/motorcycle" element={<Motorcycle />} />
               <Route path="/home-decoration" element={<Homedecoration />} />
            </Routes>
         </BrowserRouter>

      </div>
   );
}

export default App;

