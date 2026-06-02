export const defaultMetadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: "RETRATS TEMPLATE",
  description:
    "A clean creative-development template for Next.js — fluid scaling, smooth scroll, and motion out of the box.",
  keywords: [
    "nextjs",
    "next.js",
    "creative",
    "creative development",
    "locomotive scroll",
    "motion",
  ],
  openGraph: {
    title: "RETRATS TEMPLATE",
    description: "A clean creative-development template for Next.js.",
    url: "",
    siteName: "RETRATS TEMPLATE",
    images: [
      {
        url: "/assets/screenshot.png",
        width: 1200,
        height: 630,
        alt: "RETRATS TEMPLATE",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
