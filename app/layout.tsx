import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FrostBoyz – Icy Jewelry",
  description: "Chains for cold hearts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
