import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface todosState {
  todos: any[];
  httpError: string;
  isLoading: boolean;
}

const initialState: todosState = {
  todos: [],
  httpError: "",
  isLoading: true,
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,

  reducers: {
    setTodos(state, action: PayloadAction<any[]>) {
      state.todos = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setHttpError(state, action: PayloadAction<string>) {
      state.httpError = action.payload;
    },
  },
});

export const { setTodos, setIsLoading, setHttpError } = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos;

export const todosReducer = todosSlice.reducer;
