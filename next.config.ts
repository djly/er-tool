import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
        unoptimized: true, // Required for static export if using Next.js Image component
      },
  /* config options here */
};

export default nextConfig;
