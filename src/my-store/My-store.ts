import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 1,
    ism: "Samandar",
    familya: "Zafarov",
    todos: [
      {
        id: 1,
        name: "Lyuboy",
      },
    ],
  },
  reducers: {
    add: (state) => {
      state.value = state.value + 10;
    },
    minus: (state) => {
      state.value = state.value - 10;
    },

    asligaQaytarish: (state) => {
      state.value = 0;
    },

    ozgartir: (state, { payload }) => {
      state.value = payload;
    },

    addTodo: (state, { payload }) => {
      state.todos = [
        {
          name: payload,
          id: Math.floor(Math.random() * 100),
        },
        ...state.todos,
      ];
    },
    ochirish: (state, { payload }) => {
      state.todos = state.todos.filter((i) => i.id !== payload);
    },
  },
});

export const { add, minus, asligaQaytarish, ozgartir, addTodo , ochirish} =
  counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
