/** @type {import('next').NextConfig} */
const config = {
  output: "export",
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        crypto: false
      };
    }
    return config;
  }
};


// next.config.mjs
/** @type {import('next').NextConfig} */
const isElectron = process.env.ELECTRON === "true";

const nextConfig = {
  assetPrefix: isElectron ? './' : '',
  trailingSlash: true,
  output: 'export',
};


export default config;