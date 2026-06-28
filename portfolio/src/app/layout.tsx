import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brett Bates — Full Stack Developer",
  description:
    "Full-stack developer specializing in e-commerce, Shopify, and SEO-driven digital experiences. Based in Kansas City, MO.",
  keywords: ["full stack developer", "Shopify", "e-commerce", "Kansas City", "React", "Next.js", "SEO"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="antialiased font-sans bg-cream-100 text-ink-900">
        {children}
      </body>
    </html>
  );
}
