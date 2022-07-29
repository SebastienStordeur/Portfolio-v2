/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    service_id: process.env.EMAIL_SERVICE_ID,
  },
};

module.exports = nextConfig;
