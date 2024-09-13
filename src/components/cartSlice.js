import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// Helper function to load cart from local storage
const loadCartFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState) {
      return JSON.parse(serializedState);
    }
  } catch (e) {
    console.error('Failed to load cart from local storage', e);
  }
  return initialState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadCartFromLocalStorage(), // Initialize state from local storage
  reducers: {
    addItemToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      state.totalQuantity++;
      state.totalAmount += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      }

      // Save to local storage
      localStorage.setItem('cart', JSON.stringify(state));
    },

     removeItemFromCart: (state, action) => {
        const id = action.payload;
        const existingItem = state.items.find((item) => item.id === id);
      
        if (!existingItem) {
          console.error(`Item with id ${id} not found in the cart.`);
          return;
        }
      
        state.totalQuantity--;
        state.totalAmount -= existingItem.price;
      
        if (existingItem.quantity === 1) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          existingItem.quantity--;
          existingItem.totalPrice -= existingItem.price;
        }
      
        // Save updated state to local storage
        localStorage.setItem('cart', JSON.stringify(state));
      }
      ,

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;

      // Save to local storage
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItemToCart, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
