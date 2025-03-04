import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; //RTK Query

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000",
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User", "Flight", "Booking"],
  endpoints: (builder) => ({}),
});
