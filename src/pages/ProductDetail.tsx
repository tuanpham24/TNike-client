import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useParams } from "react-router-dom";
import EmptyPage from "../components/empty-page/EmptyPage";
import Loading from "../components/loading/Loading";
import Rating from "../components/rating/Rating";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const products = useSelector((state: RootState) => state.products.products) || [];
  const product = useSelector((state: RootState) =>
    state.products.products.find((product) => (product._id === productId))
  );
  const loading = useSelector((state: RootState) => state.products.loading);

  console.log(products);
  if (loading === "pending") {
    return <Loading />;
  }
  
  
  if(!product) {
    return <EmptyPage title={"Product not found"}/>
  }

  return (
    <>
      <div className="container px-8 lg:px-32 py-2">
        <div className="flex flex-wrap bg-white shadow-around-md rounded-md">
          <div className="product-image w-full md:w-1/2 lg:w-2/5">
            <img src={product.image_path} alt="" className="max-w-full" />
          </div>
          <div className="product-info w-full md:w-1/2 lg:w-3/5 lg:px-8 p-2">
            <h2 className="text-2xl">{product.name}</h2>
            <p>{product.type.name}</p>
            <div className="flex items-center">
              <Rating productId={product._id} productRatings={product.stars}/>
              <p className="px-2">Sold: {product.sold_quantity}</p>
            </div>
            <h2 className="text-2xl text-red-950 py-2">${product.price}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
