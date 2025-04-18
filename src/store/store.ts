import { configureStore } from "@reduxjs/toolkit";
import documentReducer from "../features/document/documentSlice";
import authReducer from "../features/auth/authSlice";

export const store = configureStore({
    reducer: {
      auth: authReducer,
      document: documentReducer,
    },
  });
  
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;