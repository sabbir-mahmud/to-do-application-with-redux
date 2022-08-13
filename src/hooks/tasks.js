// imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const taskApi = createApi({
  reducerPath: 'taskApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://glacial-lowlands-92255.herokuapp.com'
  }),

  endpoints: (builder) => ({
    getAllTask: builder.query({
      query: () => ({
        url: `api/tasks`,
        method: 'GET'
      }),
    }),
  }),
});

export const { useGetAllTaskQuery } = taskApi;