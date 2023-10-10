/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: "/admin",
      destination: "/admin/index.html",
    },
  ],
  images: {
    domains: ["assets.tina.io"],
  },
};

module.exports = nextConfig;
