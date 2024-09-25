import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
	id: string;
	name: string;
	email: string;
	username: string;
}

interface AuthState {
	user: User | null;
	accessToken: string | null;
	refreshToken: string | null;
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: AuthState = {
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
		loginSuccess: (
			state,
			action: PayloadAction<{
				user: User;
				accessToken: string;
				refreshToken: string;
			}>
		) => {
			state.user = action.payload.user;
			state.accessToken = action.payload.accessToken;
			state.refreshToken = action.payload.refreshToken;
			state.status = "succeeded";
		},
		registerSuccess: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
			state.status = "succeeded";
		},
		refreshTokenSuccess: (
			state,
			action: PayloadAction<{ accessToken: string }>
		) => {
			state.accessToken = action.payload.accessToken;
		},
		logout: (state) => {
			state.user = null;
			state.accessToken = null;
			state.refreshToken = null;
			state.status = "idle";
		},
		setError: (state, action: PayloadAction<string>) => {
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
