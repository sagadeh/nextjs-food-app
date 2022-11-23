import { createSlice } from "@reduxjs/toolkit";

const defaultCartState = {
  items: [],
  totalAmount: 0,
  isCheckout: false,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultCartState,
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      state.totalAmount = state.totalAmount + newItem.price * newItem.amount;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          amount: newItem.amount,
          price: newItem.price,
        });
      } else {
        existingItem.amount = existingItem.amount + newItem.amount;
      }
    },
    increamentItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      existingItem.amount++;
      state.totalAmount = state.totalAmount + existingItem.price;
    },
    decrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalAmount =
        state.totalAmount.toFixed(2) - existingItem.price.toFixed(2);
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.isCheckout = false;
      } else {
        existingItem.amount--;
      }
    },
    checkoutFormVisible(state, action) {
      state.isCheckout = action.payload;
    },
    productIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      state.isCheckout = false;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
