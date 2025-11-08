import { NextResponse } from "next/server";

export async function POST(request) {
  const { passcode } = await request.json();

  if (passcode === process.env.SITE_PASSCODE) {
    const response = NextResponse.json({ success: true });

    // Set a secure cookie
    response.cookies.set("site-access", "granted", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24, // 24 hours
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid passcode" },
    { status: 401 }
  );
}
