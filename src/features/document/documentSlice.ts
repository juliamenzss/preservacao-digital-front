import { createSlice } from "@reduxjs/toolkit";
import { getDocuments, uploadDocument } from "./documentActions";

interface DocumentState {
  loading: boolean;
  success: boolean;
  error: string | null;
  documents: any[];
}

const initialState: DocumentState = {
  loading: false,
  success: false,
  error: null,
  documents: [],
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {
    resetDocumentState: (state) => {
      state.success = false;
      state.error = null;
      state.loading = false;
    },
    setMockDocuments: (state, action) => {
      state.documents = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadDocument.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadDocument.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const existingDocumentIndex = state.documents.findIndex(
          (doc) => doc.id === action.payload.id
        );
        if (existingDocumentIndex === -1) {
          state.documents.push(action.payload);
        }
      })
      .addCase(uploadDocument.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getDocuments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDocuments.fulfilled, (state, action) => {
        state.loading = false;
        state.documents = action.payload;
      })
      .addCase(getDocuments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
  },
});

export const { resetDocumentState, setMockDocuments } = documentSlice.actions;
export default documentSlice.reducer;
