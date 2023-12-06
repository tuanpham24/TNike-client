import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./apiAxios";

export const getProductList = createAsyncThunk(
  "products/getProductList",
  async (): Promise<any> => {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (productId: String | undefined): Promise<any> => {
    try {
      const response = await api.get("/products/" + productId);
      return response.data;
    } catch (error: any) {
      return error;
    }
  }
)