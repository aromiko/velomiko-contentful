/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    loader: "custom",
    path: "/",
    loaderFile: './src/lib/image-loader.ts',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
      {
        protocol: "https",
        hostname: "videos.ctfassets.net",
        port: "",
      },
    ],
  },
};

export default nextConfig;
