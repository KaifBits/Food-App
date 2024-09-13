import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '../components/cartSlice.js';
const store=configureStore({
    reducer: {
        cart: cartReducer,
      },
});

export default store;