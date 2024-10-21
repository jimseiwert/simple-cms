import { clerkClient, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

// const isSiteAdminRoute = createRouteMatcher(['/siteadmin(.*)'])
// const isAdminRoute = createRouteMatcher(['/admin(.*)'])

export default clerkMiddleware(); //(async (auth, req) => {
//   const user = auth();
//   const redirectUrl = new URL('/', req.url)
//   if (isSiteAdminRoute(req)) {
//     if (!user.userId) return NextResponse.redirect(redirectUrl)

//     const fullUserData = await clerkClient.users.getUser(user.userId);

//     if (fullUserData?.privateMetadata?.["site-admin"] !== true)
//       return NextResponse.redirect(redirectUrl)

//     return NextResponse.next()
//   }
// })

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};