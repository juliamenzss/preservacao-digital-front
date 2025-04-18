import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authActions";

interface AuthState{
    userToken: string | null;
    loading: boolean;
    error: string | null;
    success: boolean;
  };

const initialState: AuthState = {
    userToken: null,
    loading: false,
    error: null,
    success: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
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
          })
          .addCase(loginUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
          });
        },
});

export default authSlice.reducer;