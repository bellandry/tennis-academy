import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 : Cache Components et Partial Prerendering.
  cacheComponents: true,
  // React Compiler stable de React 19.2 : mémorisation automatique.
  reactCompiler: true,
};

export default nextConfig;
