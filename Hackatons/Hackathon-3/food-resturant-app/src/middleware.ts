import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
// import { currentUser } from "@clerk/nextjs/server";
// import { getAuth } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher(['/Cheekout(.*)', '/Order(.*)'])
const isAdminRoute = createRouteMatcher(['/studio(.*)']);

export default clerkMiddleware(async (auth:any, req:any) => {
    if (isProtectedRoute(req)) {await auth.protect()}

    if (isAdminRoute(req)) {
      const { userId, has } = await auth();
      console.log(has);
      // console.log(details);
      //console.log(publicMetadata);
      // console.log(sessionClaims?.publicMetadata);

      if (!userId) {
          return NextResponse.redirect(new URL("/sign-in", req.url)); // Redirect if not logged in
      }

      const isAdmin = has({
        role: 'org:admin',
      })

      // // const isAdmin = (sessionClaims?.publicMetadata as { role?: string })?.role === "admin";
      // // const user = await currentUser();
      // // const isAdmin = publicMetadata.role === "admin";

      if (!isAdmin) {
          return NextResponse.redirect(new URL("/403", req.url)); // Redirect non-admin users
      }
  }})

export const config = {
  matcher: [
    // // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // // Always run for API routes
     '/(api|trpc)(.*)',
    '/studio(.*)',
    "/Cheekout(.*)", 
    "/Order(.*)",
    '/Ship(.*)'
  ],
};