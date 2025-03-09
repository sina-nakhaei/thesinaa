/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Enables static site generation
  images: { unoptimized: true }, // Required for GitHub Pages
  basePath: process.env.DEPLOYED_GITHUB_PATH || '',
  reactStrictMode: true,
};

export default nextConfig;