import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "lamumu Art Gallery",
  description: "A cool animated art gallery built with Next.js + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
