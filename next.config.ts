import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: "/",
      destination: "/sign_in",
      permanent: true,
    },
  ],
};

export default nextConfig;
