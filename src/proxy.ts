import { is } from "date-fns/locale";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

const AUTH_COOKIE = "access_token";

const PUBLIC_ROUTES = ["/auth"];
const UNPROTECTED_ROUTES = ["/search", "/about", "/contact"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isPublicRoute = PUBLIC_ROUTES.some((r) => pathname.startsWith(r));
  const isUnprotected = UNPROTECTED_ROUTES.some((r) => pathname.startsWith(r));

  const cookieHeader = req.headers.get("cookie") ?? "";

  if (isPublicRoute || isUnprotected || pathname === "/") {
    if (!cookieHeader) return NextResponse.next();

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
        headers: { cookie: cookieHeader },
      });

      if (res.ok && isPublicRoute) {
        return NextResponse.redirect(new URL("/", req.url));
      }

      return NextResponse.next();
    } catch {
      return NextResponse.next();
    }
  }

  if (!cookieHeader) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/me`, {
      headers: { cookie: cookieHeader },
    });

    if (res.ok) {
      return NextResponse.next();
    }

    return NextResponse.redirect(new URL("/auth", req.url));
  } catch {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
