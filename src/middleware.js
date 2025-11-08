import { NextResponse } from "next/server";

export function middleware(request) {
  const siteAccess = request.cookies.get("site-access");
  const { pathname } = request.nextUrl;

  // Allow access to root (login page) and API routes
  if (pathname === "/auth" || pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Redirect to / if no valid cookie
  if (!siteAccess || siteAccess.value !== "granted") {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
