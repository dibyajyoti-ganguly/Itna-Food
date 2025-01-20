import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: ["Frappe", "Jalapeno Cheese Shots", "Pizza"],
  },
  //reducer functions but they will map to actions
  reducers: {
    addItems: (state, action) => {
      //mutating the state
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
