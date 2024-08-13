/* const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
}) */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  register: true,
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  cacheStartUrl: true,
  dynamicStartUrl: true,
  extendDefaultRuntimeCaching: true,
  workboxOptions: {
    skipWaiting: true,
  }
});



module.exports = withPWA({
  
});