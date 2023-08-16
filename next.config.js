/** @type {import('next').NextConfig} */
const nextConfig = {
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  images: {
    unoptimized: true,
  },
  output: "export",
};

module.exports = nextConfig;
