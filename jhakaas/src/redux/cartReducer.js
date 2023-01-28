import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const items = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (items) {
        items.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }

      //   console.log(action.payload.id);

      //   state.products.push(action.payload);
    },
    removeItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id != action.payload
      );
    },
    reset: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeItem, reset } = cartSlice.actions;
export default cartSlice.reducer;
