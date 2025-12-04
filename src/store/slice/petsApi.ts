import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pet, PetsResponse } from '@/types/types';

const apiURL = '/api/';
export const petsApi = createApi({
  reducerPath: 'petsApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiURL }),
  endpoints: (builder) => ({
    getPetsByPage: builder.query<
      PetsResponse,
      { page: number; lang: string; type?: string }
    >({
      query: ({ page, lang, type }) =>
        `pets?page=${page}&limit=12&lang=${lang}${
          type && type !== '' ? `&type=${type}` : ''
        }`,
    }),
    getPetByName: builder.query<Pet, { name: string; lang: string }>({
      query: ({ name, lang }) =>
        `pets/${encodeURIComponent(name)}?lang=${lang}`,
    }),
  }),
});

export const { useGetPetsByPageQuery, useGetPetByNameQuery } = petsApi;
