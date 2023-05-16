import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = "https://jsonplaceholder.typicode.com/";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    getAllTodos: builder.query({
      query: (name: string) => `${name}`,
    }),

    getTodoItem: builder.query({
      query: (id: any) => `todos/${id}`,
    }),
  }),
});

export const { useGetAllTodosQuery, useGetTodoItemQuery } = todosApi;
