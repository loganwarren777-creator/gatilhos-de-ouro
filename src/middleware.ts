import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Adicionar headers de segurança
  const response = NextResponse.next();
  
  // Proteção contra clickjacking
  response.headers.set('X-Frame-Options', 'DENY');
  
  // Proteção XSS
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  // Política de referrer
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Política de permissões
  response.headers.set(
    'Permissions-Policy',
    'camera=(), microphone=(), geolocation=()'
  );
  
  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
