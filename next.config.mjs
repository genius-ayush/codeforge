/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'assets.example.com',
              port: '',
              pathname: '/account123/**',
            },
            {
              protocol: 'https',
              hostname: 'assets.aceternity.com',
              port: '',
              pathname: '/**',
            },
            {
              protocol: 'https',
              hostname: 'images.unsplash.com',
              port: '',
              pathname: '/**', // Adjust the pathname if needed
            },
          ],
      },
};

export default nextConfig;
