import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const todosApi = createApi({
  reducerPath: "getTodos",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3020/" }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => `todos/`,
    }),
    addTodo: builder.mutation({
      query: (todo) => ({
        url: "/todos",
        method: "POST",
        body: JSON.stringify(todo),
      }),
    }),
    updateTodo: builder.mutation({
      query: (todo) => ({
        url: `/todos/${todo.id}}`,
        method: "PATCH",
        body: todo,
      }),
    }),
    DeleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/todos/${id}}`,
        method: "DELETE",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todosApi;
