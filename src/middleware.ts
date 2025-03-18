import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This middleware runs on every request
export function middleware(request: NextRequest) {
  // You can add custom logic here for handling requests
  // For example, redirects, rewrites, or adding headers
  
  // For now, we'll just pass through all requests
  return NextResponse.next();
}

// Configure which paths this middleware runs on
export const config = {
  matcher: [
    // Apply to all paths except for static files, api routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
