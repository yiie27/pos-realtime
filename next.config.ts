import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://ergoqolgytuyrjwraoyq.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ergoqolgytuyrjwraoyq.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
