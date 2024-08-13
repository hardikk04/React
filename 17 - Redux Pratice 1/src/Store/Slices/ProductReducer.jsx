import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const proudctSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export default proudctSlice.reducer;
export const { getProducts } = proudctSlice.actions;
