import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LEVELUP OS | Turn Your Life Into A Game",
  description: "A futuristic AI-powered Student Operating System with RPG progression.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
