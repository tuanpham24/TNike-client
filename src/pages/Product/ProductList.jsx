import React, { useState, useEffect, useMemo } from "react";
import {
  getAllProduct
} from "../../api/ProductApi";
import ProductItem from "../../components/ProductItem/ProductItem";
import '../../assets/css/product.css'

function ProductList() {
  // state
  const [products, setProducts] = useState([]);

  // console.log('product list', products);
  // handle get all product
  const handleGetAllProduct = () => {
    getAllProduct().then(res => setProducts(res.data.productList))
  }

  useEffect(() => {
    handleGetAllProduct();
  }, [])

  return (
    <div className="content product-list container">
      <div className="flex-container">
        {products.map(product => (
            <ProductItem
              key={product._id}
              product={product}
            />
        ))}
      </div>
    </div>
  )
}

export default ProductList;