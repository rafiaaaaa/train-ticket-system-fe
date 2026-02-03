"use server";

import { redirect } from "next/navigation";
import { LoginRequest } from "@/validators/auth.schema";
import { cookies } from "next/headers";

const BASE_URL = process.env.NEXT_PUBLIC_FE_URL!;

export async function loginAction(payload: LoginRequest) {
  console.log("payload", payload);
  const res = await fetch(BASE_URL + "/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });
  console.log("res", res);
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.message ?? "Login failed");
  }

  const json = await res.json();
  const { accessToken, refreshToken } = json.data.token;
  console.log("access token", accessToken);
  console.log("refresh token", refreshToken);
  const cookieStore = await cookies();

  cookieStore.set("access_token", accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  cookieStore.set("refresh_token", refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });

  redirect("/");
}
