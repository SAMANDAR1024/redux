import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: undefined,
    user: undefined,
  },
  reducers: {
    login: (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    },
  },
});

export const { login } = AuthSlice.actions;
