import type { NextConfig } from "next";

const allowedDevOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS!;
const nextConfig: NextConfig = {
  distDir: ".next",
  basePath: "",
  output: "standalone",
  allowedDevOrigins: allowedDevOrigins.split(","),
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: process.env.NEXT_PUBLIC_API_URL + "/:path*",
      },
    ];
  },
};

export default nextConfig;
