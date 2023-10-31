import { NextRequest, NextResponse } from 'next/server';

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('RRE')?.value;
  const home = '/';

  const SignInURL = new URL(home, request.url);
  const DashboardURL = new URL('/dashboard', request.url);

  if (!token) {
    if (request.nextUrl.pathname === home) {
      return NextResponse.next();
    }
    return NextResponse.redirect(SignInURL);
  }

  if (request.nextUrl.pathname === home) {
    return NextResponse.redirect(DashboardURL);
  }
}

export const config = {
  matcher: ['/', '/dashboard/:path*']
};
