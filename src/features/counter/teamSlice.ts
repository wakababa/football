import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define our single API slice object
export const teamApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'teams',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: 'https://app.sportdataapi.com/api/v1' }),

  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getTeams: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => `/soccer/teams?apikey=04066d90-62cd-11ed-9a9d-a15ebadcd0dd&country_id=120`
    }),
    getPlayers: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => `/soccer/players?apikey=04066d90-62cd-11ed-9a9d-a15ebadcd0dd&country_id=120`
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetTeamsQuery,useGetPlayersQuery } = teamApi


