import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = `/api`;

const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "/login",
				method: "POST",
				body: credentials,
			}),
		}),
		register: builder.mutation({
			query: (userData) => ({
				url: "/register",
				method: "POST",
				body: userData,
			}),
		}),
		refreshAccessToken: builder.mutation({
			query: (refreshToken) => ({
				url: "/refreshToken",
				method: "POST",
				body: { refreshToken },
			}),
		}),
	}),
});

export const {
	useLoginMutation,
	useRegisterMutation,
	useRefreshAccessTokenMutation,
} = apiSlice;

export default apiSlice;
