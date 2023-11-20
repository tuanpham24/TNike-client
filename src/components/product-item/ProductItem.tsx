import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/product";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <Link to={product._id}>
        <div className="m-1 sm:mt-2 shadow-lg rounded-lg hover:shadow-xl hover:border hover:border-pink-300 hover:relative bottom-px ">
          <div>
            <img
              className="w-full h-auto rounded-t-lg"
              src={product.image_path}
              alt={product.name}
            />
          </div>
          <div className="product-content p-2">
            <h5>{product.name}</h5>
            <p className="text-sm">Category: {product.type.name}</p>
            <h5 className="text-red-950 text-lg">${product.price}</h5>
            <div className="product-rating">
              
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
