import React, { useState, useEffect, useMemo, memo, useCallback } from "react";
import {
  getAllProduct
} from "../../api/ProductApi";
import ProductItem from "../../components/ProductItem/ProductItem";
import '../../assets/css/product.css'

function ProductList() {
  // state
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([false]);

  // console.log('product list', products);
  // handle get all product
  const handleGetAllProduct = useCallback(() => {
    getAllProduct().then(res => setProducts(res.data.productList))
  })

  useEffect(() => {
    handleGetAllProduct();
  }, [loading])

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

export default memo(ProductList);