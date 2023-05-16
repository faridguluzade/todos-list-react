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
  }),
});

export const { useGetAllTodosQuery } = todosApi;
