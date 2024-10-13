/** @type {import('next').NextConfig} */
await import("./src/env.js")
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
  }
};

export default nextConfig;
