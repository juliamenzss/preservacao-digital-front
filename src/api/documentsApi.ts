import axios from "axios";
import { api } from "./authApi";


export const uploadDocument = async (formData: FormData, token: string) => {
  return await axios.post(`${api}/documents`, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });
};

export const getDocuments = async (token: string) => {
  return await axios.get(`${api}/documents`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
