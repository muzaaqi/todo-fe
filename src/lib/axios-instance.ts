import axios from "axios";
import { cookies } from "next/headers";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  validateStatus: () => true,
});

// OPTIONAL — Authorized API untuk client-side
export const getAuthApi = async () => {
  const token = (await cookies()).get("token")?.value;

  return axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });
};
