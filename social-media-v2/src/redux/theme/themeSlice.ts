"use client";

import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
	isDarkMode: boolean;
}

const initialState: ThemeState = {
	isDarkMode: true,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setIsDarkMode: (state, action) => {
			state.isDarkMode = action.payload;
		},
	},
});

export const { setIsDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
