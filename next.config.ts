import type { NextConfig } from 'next'

import './src/env.js'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    dangerouslyAllowSVG: true,
  },
  experimental: {
    reactCompiler: true,
    serverActions: {
      bodySizeLimit: '100mb',
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
