import React from "react";
import { Product } from "../../interfaces/product";

const ProductItem: React.FC<{product: Product}> = ({product}) => {

  return(
    <>
      <div className="m-1">
        <div>
          <img className="w-full h-auto" src={product.thumbnail} alt={product.name} />
        </div>
        <div>
          <h5>{product.name}</h5>
          <p>{product.type.name}</p>
        </div>
      </div>
    </>
  )
}

export default ProductItem;