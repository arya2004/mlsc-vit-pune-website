export { default } from 'next-auth/middleware'

export const config = {
  matcher: ['/protected/:path*', '/protected',
    // '/api/:path*',
  ]
}
// Add your route in above config.matcher array to protect it