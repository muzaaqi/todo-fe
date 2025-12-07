"use server";

import axios from "axios";

export async function registerAction(username: string, password: string) {
  try {
    const res = await axios.post("http://localhost:5000/api/user/register", {
      username,
      password,
    });

    return { success: true, message: "Akun berhasil dibuat." };
  } catch (err: unknown) {
    return {
      success: false,
      message: axios.isAxiosError(err) ? err.response?.data?.message || "Registrasi gagal." : "Registrasi gagal.",
    };
  }
}
