import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brett Bates — Full Stack Developer",
  description:
    "Former carpenter turned full-stack developer based in Kansas City, MO. Building clean, functional, and user-friendly web experiences.",
  keywords: ["full stack developer", "web developer", "Kansas City", "React", "Next.js"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased font-sans bg-cream-100 text-ink-900">
        {children}
      </body>
    </html>
  );
}
