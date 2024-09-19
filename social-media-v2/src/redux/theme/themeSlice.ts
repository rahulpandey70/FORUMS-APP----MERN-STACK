"use client";

import { createSlice } from "@reduxjs/toolkit";

// Define a type for your slice state
interface ThemeState {
	theme: "light" | "dark";
}

// Define the initial state with a default theme
const initialState: ThemeState = {
	theme: "dark",
};

// Create the slice
export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		toggleTheme(state) {
			const newTheme = state.theme === "dark" ? "light" : "dark";
			state.theme = newTheme;
			localStorage.setItem("theme", newTheme);
		},
	},
});

// Export the action creator
export const { toggleTheme } = themeSlice.actions;

// Export the reducer to be used in the store
export default themeSlice.reducer;
