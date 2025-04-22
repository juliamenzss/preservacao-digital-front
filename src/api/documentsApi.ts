import axios from "axios";

export const API_BASE_URL = "http://localhost:3000";

export const uploadDocument = async (data: FormData, token: string) => {
  return await axios.post(`${API_BASE_URL}/document`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getDocuments = async (token: string) => {
  return await axios.get(`${API_BASE_URL}/document`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getDocumentById = async (id: string, token: string) => {
  return await axios.get(`${API_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteDocument = async (id: string, token: string) => {
  return await axios.delete(`${API_BASE_URL}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const downloadDocument = async (id: string, token: string) => {
  return await axios.get(`${API_BASE_URL}/${id}/download`, {
    headers: {
      Authorization: `Bearer ${token}`,},
    responseType: "blob",  
  });
};

export const getDocumentStatus = async (id: string, token: string) => {
  return await axios.get(`${API_BASE_URL}/${id}/status`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const filterDocuments = async (filters: any, token: string) => {
  return await axios.post(`${API_BASE_URL}/document/filter`, filters, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};