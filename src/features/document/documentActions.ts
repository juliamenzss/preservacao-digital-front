import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./../../api/documentsApi";

export const uploadDocument = createAsyncThunk(
  "document/upload",
  async (formData: FormData, { getState, rejectWithValue }) => {
    const token = (getState() as any).auth.userToken;
    try {
      const response = await api.uploadDocument(formData, token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Erro ao enviar documento");
    }
  }
);

export const getDocuments = createAsyncThunk(
  "document",
  async (_, {getState,rejectWithValue }) => {
    const token = (getState() as any).auth.userToken;
    try {
      const response = await api.getDocuments(token);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Erro ao buscar documentos");
    }
  }
);