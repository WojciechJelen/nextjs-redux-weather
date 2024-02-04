/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "http",
        hostname: "openweathermap.org",
        port: "",
      },
    ],
  },
};

export default nextConfig;
