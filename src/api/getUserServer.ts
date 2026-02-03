// lib/getUserServer.ts
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL!;

export async function getUserServer() {
  const cookieStore = await cookies();

  const res = await fetch(BASE_URL + "/api/auth/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}
