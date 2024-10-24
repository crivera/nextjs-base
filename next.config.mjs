/** @type {import('next').NextConfig} */
await import('./src/env.js')
const nextConfig = {
  output: 'standalone',
  images: {
    dangerouslyAllowSVG: true,
  },
}

export default nextConfig
