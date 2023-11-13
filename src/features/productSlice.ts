// productSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/apiAxios";
import { Product } from "../interfaces/product";

interface ProductState {
  products: Product[];
  loading: "idle" | "pending" | "fulfilled" | "rejected";
  error: string | null;
}

const initialState: ProductState = {
  products: [],
  loading: "idle",
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (): Promise<any> => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = "fulfilled";
        state.products = action.payload.productList;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export default productSlice.reducer;