/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // replaces `next export`
  images: {
    unoptimized: true, // required when exporting static HTML
  },
};

export default nextConfig;
