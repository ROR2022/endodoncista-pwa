/** @type {import('next').NextConfig} */

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
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

export default withPWA({
  // Your Next.js config
});


//const nextConfig = {};

//export default nextConfig;
