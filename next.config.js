require('dotenv').config()
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        NEXT_PUBLIC_API_ENDPOINT: process.env.NEXT_PUBLIC_API_ENDPOINT,
        // NEXT_PUBLICを追加 2025.12.22
      },
}

module.exports = nextConfig