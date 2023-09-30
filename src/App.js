// import logo from './logo.svg';

import React from "react";
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddProd from "./components/addProd";
import Products from './components/Products';
import ProductDetails from "./components/productDetails";
import Update from "./components/update";
import './App.css';






const App = () => {
  
  return(
    <div id='root'>

        <Navbar/>

        <div className="contianer-fluid">

          <div className="small-sidebar">
            
              <Sidebar flag={true}/>
          </div>
            
            <div className="row">
                <div className="col-lg-2 col-md-2 sidebar">
                    <Sidebar flag={false}/>
                </div>
                <div className=" col-lg-10 col-md-10">
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/products' element={<Products/>} />
                  <Route path='/AddProd' element={<AddProd/>} />
                  <Route path='products/:productdId' element={<ProductDetails />} />
                  <Route path='update/:prodid' element={<Update />} />
                </Routes>
                </div>
            </div>
        </div>
        
    </div>
  );
}

export default App;

