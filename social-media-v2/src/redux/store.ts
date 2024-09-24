"use client";

import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./theme/themeSlice";
import apiSlice from "./auth/apiSlice";
import authReducer from "./auth/authSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		auth: authReducer,
		theme: themeReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(apiSlice.middleware);
	},
});

// Setup listeners for RTK Query
setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
