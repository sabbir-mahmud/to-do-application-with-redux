// imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://glacial-lowlands-92255.herokuapp.com'
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
      })
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
      query: (id, data) => ({
        url: `api/tasks/${id}`,
        method: 'PUT',
        body: data,
        headers: {
          'content-type': 'application/json'
        }
      })
    })

  }),
});

export const { useGetAllTaskQuery, useGetTaskQuery, useCreateTaskMutation, useCompleteTaskMutation } = taskApi;