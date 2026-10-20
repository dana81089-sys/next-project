import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images:{
    remotePatterns:[{
      protocol:"https",
      hostname:"pub-3cba56bacf9f4965bbb0989e07dada12.r2.dev",
      pathname:"/linked-posts/**",

    }]
  }
};

export default nextConfig;
