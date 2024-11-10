import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/sign_in",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
