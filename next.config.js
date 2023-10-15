/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
      PUBLIC_WEATHER_API_KEY: process.env.PUBLIC_WEATHER_API_KEY,
    },
  };