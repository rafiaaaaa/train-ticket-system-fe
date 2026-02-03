import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  console.log("BODY", body);
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const raw = await res.text();

  console.log("BACKEND LOGIN STATUS:", res.status);
  console.log("BACKEND LOGIN RAW:", raw);
  const setCookie = res.headers.get("set-cookie");

  if (!res.ok) {
    return NextResponse.json(JSON.parse(raw), { status: res.status });
  }

  const response = NextResponse.json(JSON.parse(raw));

  if (setCookie) {
    response.headers.set("Set-Cookie", setCookie);
  }
  console.log("SET COOKIE FROM BACKEND:", res.headers.get("set-cookie"));

  return response;
}
