import React from 'react';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Homedecoration from './components/categories/homedecoration/Homedecoration';
import Motorcycle from './components/categories/motorcycle/Motorcycle';
import Smartphones from './components/categories/smartphones/Smartphones';
import SingleProduct from './components/container/SingleProduct';
import MainPage from './components/main-page/MainPage';

import './App';

const App = () => {
   return (
      <div className='App'>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<MainPage />}/>
               <Route path="/product/:id" element={<SingleProduct />} />
               <Route path="/smartphones" element={<Smartphones />} />
               <Route path="/motorcycle" element={<Motorcycle />} />
               <Route path="/home-decoration" element={<Homedecoration />} />
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;

