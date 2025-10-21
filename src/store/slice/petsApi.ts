import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pet, PetsResponse } from '@/types/types';

const apiURL = '/api/';
export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
  endpoints: (builder) => ({
    getPetsByPage: builder.query<PetsResponse, { page: number; lang: string }>({
      query: ({ page, lang }) => `pets?page=${page}&limit=9&lang=${lang}`,
    }),
  }),
});

export const { useGetPetsByPageQuery } = petsApi;
