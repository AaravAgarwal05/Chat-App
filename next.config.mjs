/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chat-app-one-smoky.s3.ap-south-1.amazonaws.com",
        port: "", // Leave empty for default ports
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
