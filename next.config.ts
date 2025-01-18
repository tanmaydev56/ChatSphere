/** @type {import('next').NextConfig} */
import { WithClerkMiddleware } from "@clerk/nextjs/server";
const nextConfig = {
  experimental: {
    // Enable server actions for enhanced data fetching capabilities
    serverActions: true,

    // Allow external packages in server components
    serverComponentsExternalPackages: ["mongoose", "some-other-package"], // Add more packages if needed
  },
  eslint: {
    // Warning: Allows production builds to complete even with ESLint errors.
    // Use with caution. It's recommended to fix ESLint errors during development.
    ignoreDuringBuilds: true,
  },
  images: {
    // Configure allowed external image domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
      },
      {
        protocol: "https",
        hostname: "uploadthing.com",
      },
      {
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        protocol: "https",
        hostname: "your-custom-domain.com", // Example for adding future domains
      },
    ],
  },
  // Additional configurations (if required)
  reactStrictMode: true, // Helps identify potential problems in your React code
  swcMinify: true, // Enables faster builds with SWC minification
};

// Import and configure Clerk middleware

export default WithClerkMiddleware( nextConfig);



module.exports = nextConfig;
