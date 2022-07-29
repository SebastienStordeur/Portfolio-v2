/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    service_id: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    template_id: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    public_key: process.env.NEXT_PUBLIC_PUBLIC_KEY,
  },
};

module.exports = nextConfig;
