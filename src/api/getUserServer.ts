import { api } from "@/utils/api";
import { cookies } from "next/headers";

export async function getUserServer() {
  const cookieStore = await cookies();
  const res = await api("/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  if (!res.success) return null;

  return res;
}
