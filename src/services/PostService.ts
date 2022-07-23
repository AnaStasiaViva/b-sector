import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost, IQuery } from 'interfaces';

export const postsApi = createApi({
  reducerPath: 'postsApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
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
