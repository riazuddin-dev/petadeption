import { NextResponse }
from "next/server";

import { auth }
from "./lib/auth";

export async function proxy(
  request
) {

  // SESSION CHECK
  const session =
    await auth.api.getSession({

      headers:
        request.headers,
    });

  // LOGIN NA THAKLE
  if (!session) {

    return NextResponse.redirect(

      new URL(
        "/login",
        request.url
      )
    );
  }

  // LOGIN THAKLE
  return NextResponse.next();
}

export const config = {

  matcher: "/dashboard/:path*",
};