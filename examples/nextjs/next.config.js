/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svelte$/,
      use: 'svelte-loader'
    });
    return config;
  }
};

module.exports = nextConfig;
