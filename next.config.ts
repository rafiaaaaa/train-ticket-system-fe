import type { NextConfig } from "next";

const allowedDevOrigins = process.env.NEXT_PUBLIC_ALLOWED_ORIGINS!;
const nextConfig: NextConfig = {
  distDir: ".next",
  basePath: "",
  output: "standalone",
  allowedDevOrigins: allowedDevOrigins.split(","),
};

export default nextConfig;
