import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

interface AuthState{
    userToken: string | null;
    loading: boolean;
    error: string | null;
    success: boolean;
    user: any,
    token: null,
  };

const initialState: AuthState = {
    userToken: localStorage.getItem("userToken") || null,
    loading: false,
    error: null,
    success: false,
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      resetAuthState: (state) => {
        state.success = false;
        state.error = null;
        state.loading = false;
      },
      logout: (state) => {
        state.userToken = null;
        state.user = null;
        state.success = false;
        state.error = null;
        state.loading = false;
        localStorage.removeItem("token")},},

    extraReducers: (builder) => {
        builder
          .addCase(registerUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.error = null;
            state.userToken = action.payload.token;
            state.user = action.payload.user;
            localStorage.setItem("token", action.payload.token);
          })
          .addCase(registerUser.rejected, (state, action) => {
            state.loading = false;
            state.success = false;
            state.error = action.payload as string;
          })

        .addCase(loginUser.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(loginUser.fulfilled, (state, action) => {
            state.loading = false;
            state.success = true;
            state.userToken = action.payload.token;
            localStorage.setItem("token", action.payload.token);
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
        },
});

export const { resetAuthState, logout } = authSlice.actions;
export default authSlice.reducer;