/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@prisma/client', 'bcrypt']
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'tdmfrepbni6ko06v.public.blob.vercel-storage.com',
            port: '',
            pathname: '/*',
          },
        ],
      },
}

module.exports = nextConfig
