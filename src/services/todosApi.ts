import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
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
