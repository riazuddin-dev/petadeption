import { NextResponse } from "next/server";

export function proxy() {
  // const token = request.cookies.get("token");

  // // PRIVATE ROUTE
  // if (!token) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",

    "/add-pet/:path*",

    "/my-listings/:path*",

    "/my-requests/:path*",

    "/update-pet/:path*",
  ],
};
