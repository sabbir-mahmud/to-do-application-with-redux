// imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const url = process.env.REACT_APP_TO_DO_BASE_URL
console.log(url);

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${url}`
  }),
  tagTypes: ['tasks'],
  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => ({
        url: `api/tasks`,
        method: 'GET'
      }),
      providesTags: ['tasks']
    }),
    getTask: builder.query({
      query: (id) => ({
        url: `api/tasks/${id}`,
        method: 'GET'
      }),
      providesTags: ['tasks']
    })
    ,
    createTask: builder.mutation({
      query: (data) => ({
        url: `api/tasks`,
        method: 'POST',
        body: data,
        headers: {
          'content-type': `application/json`
        }
      }),
      invalidatesTags: ['tasks']
    }),
    completeTask: builder.mutation({
      query: (id) => ({
        url: `api/tasks/${id}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['tasks']
    }),
    updateTask: builder.mutation({
      query: ({ id, data }) => ({
        url: `api/tasks/${id}`,
        method: 'PUT',
        body: data,
        headers: {
          'content-type': 'application/json'
        }
      }),
      invalidatesTags: ['tasks']
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `api/tasks/${id}`,
        method: 'DELETE',
        headers: {
          'content-type': 'application/json'
        }
      }),
      invalidatesTags: ['tasks']
    })

  }),
});

export const { useGetAllTaskQuery, useGetTaskQuery, useCreateTaskMutation, useCompleteTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } = taskApi;