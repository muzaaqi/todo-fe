"use server";

import { cookies } from "next/headers";
import axios from "axios";
import { api } from "@/lib/axios-instance";

export async function loginAction(username: string, password: string) {
  try {
    const res = await api.post("/user/login", {
      username,
      password,
    });

    const token = res.data.data.token;

    const cookieStore = await cookies();
    cookieStore.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
    });

    return { success: true };
  } catch (err: unknown) {
    return {
      success: false,
      message: axios.isAxiosError(err) ? err.response?.data?.message || "Login error" : "Login error",
    };
  }
}
