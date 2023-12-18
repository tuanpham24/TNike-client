import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../services/productAPI";
import { RootState, AppDispatch } from "../app/store";
import { useParams } from "react-router-dom";
import { ProductDetail } from "../interfaces/product";
import EmptyPage from "../components/empty-page/EmptyPage";
import Loading from "../components/loading/Loading";
import Rating from "../components/rating/Rating";

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>() || "";
  const dispatch = useDispatch<AppDispatch>();
  const productDetail = useSelector(
    (state: RootState) => state.products.productById
  ) as ProductDetail;
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  let newPrice = Math.floor(
    ((100 - productDetail?.saleOffInfo?.percent) *
      productDetail?.product?.price) /
      100
  );

  useEffect(() => {
    dispatch(getProductById(productId));
  }, [productId]);

  if (loading === "pending") {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!productDetail) {
    return <EmptyPage title={"Product not found!"} />;
  }

  return (
    <>
      <div className="container px-8 lg:px-32 py-2">
        <div className="flex flex-wrap bg-white shadow-around-md rounded-md">
          <div className="product-image w-full md:w-1/2 lg:w-2/5">
            <img
              src={productDetail.product.image_path}
              alt=""
              className="max-w-full"
            />
          </div>
          <div className="product-info w-full md:w-1/2 lg:w-3/5 lg:px-8 p-2">
            <h2
              className={
                productDetail.product.sale_off
                  ? "py-1 px-2 inline-block bg-red-950 text-white rounded-tl-lg rounded-br-lg shadow-md"
                  : "hidden"
              }
            >
              {productDetail.product.sale_off
                ? `Sale off ${productDetail.saleOffInfo?.percent}%`
                : ""}
            </h2>
            <h2 className="text-2xl mt-1">{productDetail.product.name}</h2>
            <p>{productDetail.product.type.name}</p>
            <div className="flex items-center">
              <Rating
                productId={productDetail.product._id}
                productRatings={productDetail.product.stars}
              />
              <p className="px-2 ">
                {productDetail.product.sold_quantity} Sold
              </p>
            </div>
            <div className="flex items-center">
              <h2
                className={
                  productDetail.product.sale_off
                    ? "text-xl text-gray-500 line-through"
                    : "text-2xl text-red-950 ml-2"
                }
              >
                ${productDetail.product.price}
              </h2>
              <h2
                className={
                  productDetail.product.sale_off
                    ? "text-2xl text-red-950 ml-2"
                    : "hidden"
                }
              >
                ${newPrice}
              </h2>
            </div>
            <p>&emsp;{productDetail.product.description}</p>

            <div className="d-flex mt-4">
              <button className="w-1/3 py-1 px-2 mr-2 border-2 border-pink-600 rounded-sm hover:shadow-around-md">
                Add to cart
              </button>
              <button className="w-1/3 py-1 px-2 border-2 border-pink-600 bg-pink-600 text-white rounded-sm hover:shadow-around-md">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
