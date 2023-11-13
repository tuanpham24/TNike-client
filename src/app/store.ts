// store.ts
import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/productSlice';

const store = configureStore({
  reducer: {
    products: productReducer,
    // other reducers
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
