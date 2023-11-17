/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hackathon_template',
  reactStrictMode: true,
    webpack: config => {
      config.resolve.fallback = { fs: false, net: false, tls: false };
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      return config;
    },
    images:{
      unoptimized:true
    }
  };
  
  module.exports = nextConfig;