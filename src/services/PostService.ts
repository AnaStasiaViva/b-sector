import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost, IQuery } from 'interfaces';

const url = process.env.REACT_APP_BASE_URL; // not used due to vercel

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/'}),
  endpoints: (build) => ({
    fetchPostsByPage: build.query<IPost[], any>({
      query: (arg: IQuery) => {
        const { limit, page } = arg;
        return {
          url: `posts`,
          params: {
            _limit: limit,
            _page: page
          }
        };
      },
    }),
    fetchPosts: build.query<IPost[], any>({
      query: () => {
        return {
          url: `posts`,
        };
      },
    }),
  }),
});


 export const { useFetchPostsByPageQuery, useFetchPostsQuery } = postsApi;
