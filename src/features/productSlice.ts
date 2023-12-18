// productSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductDetail } from "../interfaces/product";
import { getProductList, getProductById } from "../services/productAPI";

interface ProductState {
  products: Product[];
  productById: ProductDetail | null;
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  productById: null,
  loading: "idle",
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.products = action.payload.productList;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Failed to get product list";
      })
      .addCase(getProductById.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.productById = action.payload.productInfo;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Failed to get product by id";
      })
      ;
  },
});

export default productSlice.reducer;