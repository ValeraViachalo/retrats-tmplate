import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Demo media used by the starter — replace/remove for your project.
      { protocol: "https", hostname: "cdn.cosmos.so" },
    ],
  },
  sassOptions: {
    // Resolve bare @use paths (e.g. "styles/abstracts") from /src.
    loadPaths: [path.join(process.cwd(), "src")],
    // Auto-inject tokens/functions/mixins into every .scss entry.
    // Abstracts contain NO concrete rules, so nothing is duplicated.
    additionalData: `@use "styles/abstracts" as *;`,
  },
};

export default nextConfig;
