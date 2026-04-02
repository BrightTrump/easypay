/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.theforage.com",
      },
      {
        protocol: "https",
        hostname: "neu.edu.tr",
      },
      {
        protocol: "https",
        hostname: "www.shutterstock.com",
      },
    ],
  },
};

module.exports = nextConfig;
