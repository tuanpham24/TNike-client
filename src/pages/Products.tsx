import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productSlice";
import { RootState, AppDispatch } from "../app/store";
import ProductItem from "../components/product-item/ProductItem";
import EmptyPage from "../components/empty-page/EmptyPage";
import Loading from "../components/loading/Loading";

const Products: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const products = useSelector((state: RootState) => state.products.products) || [];
  const loading = useSelector((state: RootState) => state.products.loading);
  const error = useSelector((state: RootState) => state.products.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading === "pending") {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (products.length < 1) {
    return <EmptyPage title={"Product list not found!"} />;
  }
  return (
    <>
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
          {products?.map((product, index) => (
            <ProductItem key={index} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
