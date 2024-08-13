import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/UserReducer";
import proudctSlice from "./Slices/ProductReducer";

export const store = configureStore({
  reducer: {
    users: userSlice,
    products: proudctSlice,
  },
});
