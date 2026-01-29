import { NextRequest, NextResponse } from "next/server";

const AUTH_COOKIE = "access_token";

const PUBLIC_ROUTES = ["/auth"];
const UNPROTECTED_ROUTES = ["/search", "/about", "/contact"];

export async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get(AUTH_COOKIE)?.value;

  const isPublicRoute = PUBLIC_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  const isUnprotected = UNPROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  if (token && isPublicRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (pathname === "/") {
    return NextResponse.next();
  }

  try {
    const backendUrl = `${process.env.NEXT_PUBLIC_API_URL}/auth/me`;
    const cookieHeader = req.headers.get("cookie") ?? "";

    const res = await fetch(backendUrl, {
      method: "GET",
      headers: {
        cookie: cookieHeader,
      },
    });

    if (res.ok) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/auth", req.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL("/auth", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
