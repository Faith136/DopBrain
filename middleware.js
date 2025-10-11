import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req) {
  // List of protected routes
  const protectedPaths = ['/profile', '/products', '/dashboard', '/protected'];
  const { pathname } = req.nextUrl;

  // Only run middleware for protected paths
  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    if (!token) {
      // Redirect to login if not authenticated
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Optionally, specify which paths to run middleware on
export const config = {
  matcher: ['/protected/:path*', '/dashboard/:path*', '/profile/:path*'],
};