import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./CounterSlice";
import { AuthSlice } from "./Auth.slice";

export const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: AuthSlice.reducer },
});




