import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  console.log("FORWARDED COOKIE:", cookieHeader);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
    headers: {
      Cookie: cookieHeader,
    },
  });

  const raw = await res.text();
  console.log("AUTH/ME STATUS:", res.status);
  console.log("AUTH/ME RAW RESPONSE:", raw);

  if (!res.ok) {
    return NextResponse.json(
      { success: false, message: "Unauthorized" },
      { status: 401 },
    );
  }

  return NextResponse.json(JSON.parse(raw));
}
