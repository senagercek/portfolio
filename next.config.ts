import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // @ts-ignore
  turbopack: {
    root: ".",
  },
};

export default nextConfig;
