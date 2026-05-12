import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joe's Landscaping Service",
  description:
    "Residential landscaping, patios, drainage, lawn care, and seasonal cleanups.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
