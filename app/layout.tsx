import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Leadership - Become the Leader You Are",
  description: "Comprehensive leadership development program covering global-Indian leadership, personality, ethics, team building, strategic vision, and communication.",
  keywords: ["leadership", "management", "professional development", "Indian workplace", "global leadership"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
