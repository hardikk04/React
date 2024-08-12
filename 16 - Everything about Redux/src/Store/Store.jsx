import { configureStore } from "@reduxjs/toolkit";
import CouterSlice from "./Counter/CouterSlice";

export const store = configureStore({
  reducer: {
    counter: CouterSlice,
  },
});
