import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';
import ratingReducer from "../features/ratingSlice"

const store = configureStore({
  reducer: {
    products: productReducer,
    rating: ratingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
