import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "./../../api/documentsApi";

export const uploadDocument = createAsyncThunk(
    "document/upload",
    async (formData: FormData, { getState, rejectWithValue }) => {
      const token = (getState() as any).auth.userToken;
      try {
        return await api.uploadDocument(formData, token);
      } catch (err: any) {
        return rejectWithValue(err.response?.data?.message || "Erro no upload");
      }
    }
  );
  
  export const getDocuments = createAsyncThunk(
    "document/getAll",
    async (_, { getState, rejectWithValue }) => {
      const token = (getState() as any).auth.userToken;
      try {
        const response = await api.getDocuments(token);
        return response.data;
      } catch (err: any) {
        return rejectWithValue(err.response?.data?.message || "Erro ao buscar documentos");
      }
    }
  );
  