import type { Metadata, Viewport } from "next";

export const title = "honon - Awesome App";
export const description = "honon is an awesome app!";

export const metadata: Metadata = {
  title,
  description,
  keywords: [],
  authors: { name: "yoshikouki", url: "https://yoshikouki.com/" },
  icons: [
    {
      url: "/logo.svg",
      sizes: "1200x1200",
      type: "image/svg+xml",
      color: "#FFFFFF",
      fetchPriority: "high",
    },
    {
      url: "/icon-192x192.webp",
      sizes: "192x192",
      type: "image/webp",
      color: "#FFFFFF",
      fetchPriority: "auto",
    },
    {
      url: "/icon-512x512.webp",
      sizes: "512x512",
      type: "image/webp",
      color: "#FFFFFF",
      fetchPriority: "auto",
    },
  ],
  robots: "index, follow",
  openGraph: {
    url: "https://honon.app/",
    title,
    description,
    images: [
      {
        url: "https://honon.app/logo.svg",
        alt: title,
        width: 1200,
        height: 1200,
      },
    ],
  },
  twitter: {
    card: "summary",
    site: "@yoshikouki_",
    creator: "@yoshikouki_",
    title,
    description,
    images: "https://honon.app/logo.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};
