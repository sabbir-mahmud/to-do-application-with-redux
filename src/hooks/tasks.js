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
    })
  }),
});

export const { useGetAllTaskQuery, useCreateTaskMutation } = taskApi;