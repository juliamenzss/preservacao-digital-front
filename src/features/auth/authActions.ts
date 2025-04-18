import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type RegisterUserData = {
  name: string;
  email: string;
  password: string;
};

type LoginUserData = {
  email: string;
  password: string;
};

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData: RegisterUserData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/register",
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Erro ao registrar conta");
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData: LoginUserData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Erro ao acessar conta");
    }
  }
);
