import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../services/productAPI";
import { RootState, AppDispatch } from "../app/store";
import { useParams } from "react-router-dom";
import { Product } from "../interfaces/product";
import EmptyPage from "../components/empty-page/EmptyPage";
import Loading from "../components/loading/Loading";
import Rating from "../components/rating/Rating";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>() || "";
  const dispatch = useDispatch<AppDispatch>();
  const productInfo = useSelector(
    (state: RootState) => state.products.productById
  ) as Product;
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);
  
  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId]);

  if (loading === "pending") {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productInfo) {
    return <EmptyPage title={"Product not found!"} />;
  }

  return (
    <>
      <div className="container px-8 lg:px-32 py-2">
        <div className="flex flex-wrap bg-white shadow-around-md rounded-md">
          <div className="product-image w-full md:w-1/2 lg:w-2/5">
            <img src={productInfo.image_path} alt="" className="max-w-full" />
          </div>
          <div className="product-info w-full md:w-1/2 lg:w-3/5 lg:px-8 p-2">
            <h2 className="text-2xl">{productInfo?.name}</h2>
            <p>{productInfo?.type.name}</p>
            <div className="flex items-center">
              <Rating
                productId={productInfo?._id}
                productRatings={productInfo?.stars}
              />
              <p className="px-2">Sold: {productInfo?.sold_quantity}</p>
            </div>
            <h2 className="text-2xl text-red-950 py-2">${productInfo?.price}</h2>
            <p>{productInfo.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
