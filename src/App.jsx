import React from "react";
import {
  Routes,
  Route,
} from 'react-router-dom';
import ProductList from "./pages/Product/ProductList";
import ProductDetail from "./components/ProductItem/ProductDetail";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
