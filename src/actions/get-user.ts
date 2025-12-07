import { cookies } from "next/headers";
import { api } from "@/lib/axios-instance";

export async function getUser() {

  const token = (await cookies()).get("token")?.value;

  if (!token) return null;

  try {
    const res = await api.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.data;
  } catch {
    return null;
  }
}
