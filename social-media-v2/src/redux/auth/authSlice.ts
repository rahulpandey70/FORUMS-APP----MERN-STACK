import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	accessToken: null,
	refreshToken: null,
	status: "idle",
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginSuccess: (state, action) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.status = "succeeded";
		},
		registerSuccess: (state, action) => {
			state.user = action.payload;
		},
		refreshTokenSuccess: (state, action) => {
			state.accessToken = action.payload.accessToken;
		},
		logout: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
		},
		setError: (state, action) => {
			state.error = action.payload;
			state.status = "failed";
		},
	},
});

export const {
	loginSuccess,
	registerSuccess,
	refreshTokenSuccess,
	logout,
	setError,
} = authSlice.actions;
export default authSlice.reducer;
