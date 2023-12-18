import React from "react";
import { Link } from "react-router-dom";
import { Product } from "../../interfaces/product";
import Rating from "../rating/Rating";

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <>
      <Link to={"/products/" + product._id}>
        <div className="relative m-1 bg-white shadow-around-sm rounded-lg hover:border hover:border-pink-300 hover:relative bottom-px ">
          <div className="absolute">
            <p
              className={
                product.sale_off
                  ? "py-1 px-2 relative bottom-2 right-1 bg-red-950 text-white rounded-tl-lg rounded-br-lg shadow-md"
                  : "hidden"
              }
            >
              {product.sale_off ? "Sale off" : ""}
            </p>
          </div>
          <div>
            <img
              className="w-full h-auto rounded-t-lg"
              src={product.image_path}
              alt={product.name}
            />
          </div>
          <div className="product-content p-2">
            <h5>{product.name}</h5>
            <p className="text-sm">{product.type.name}</p>
            <h5
              className={
                product.sale_off ? "text-gray-500" : "text-red-950 text-lg"
              }
            >
              {product.sale_off ? (
                <>
                  <span className="text-gray-500 line-through">{product.price}</span>
                  <span className="text-red-950 text-lg"> - ?</span>
                </>
              ) : (
                product.price
              )}
            </h5>
            <div className="md:flex items-center">
              <Rating productId={product._id} productRatings={product.stars} />
              <i className="md:pl-4 text-gray-500">
                Sold {product.sold_quantity}
              </i>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductItem;
