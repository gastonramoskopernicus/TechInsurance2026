import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isDemoProtected = request.nextUrl.pathname.startsWith('/demo/home') || 
                          request.nextUrl.pathname.startsWith('/demo/inspecciones');

  if (isDemoProtected) {
    const hasProdCookie = request.cookies.has('kps-demo-session');
    const hasDevCookie = request.cookies.has('kps-demo-session-dev');
    
    if (!hasProdCookie && !hasDevCookie) {
      return NextResponse.redirect(new URL('/demo', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/demo/home/:path*', '/demo/inspecciones/:path*'],
}
