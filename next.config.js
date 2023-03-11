/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    DOMAIN: process.env.DOMAIN,
    SERVER_HOST: process.env.SERVER_HOST,
    BASE_API: process.env.BASE_API,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    GOOGLE_CLIENT_ID: '721639709461-pjuq114vpiae24gs165e1aedpp2shau3.apps.googleusercontent.com',
    FACEBOOK_APP_ID: '561683539070348'
  },
}

module.exports = nextConfig
