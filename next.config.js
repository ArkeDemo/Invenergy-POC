/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.contentstack.io',
                // port: '',
                pathname: '/v3/assets/**',
            },
            {
                protocol: 'http',
                hostname: 'pbs.twimg.com',
                // port: '',
                pathname: '**',
                // pathname: '/media/**',
            },
        ],
    },
    env: {
        ENV_VARIABLE: process.env.ENV_VARIABLE,
    }
}

module.exports = nextConfig
