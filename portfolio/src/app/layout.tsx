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
  metadataBase: new URL("https://www.brettbatesweb.com"),
  title: {
    default:  "Brett Bates — Full Stack Developer | Kansas City",
    template: "%s | Brett Bates",
  },
  description:
    "Full-stack developer specializing in e-commerce, Shopify, NetSuite SuiteCommerce, and SEO-driven digital experiences. Based in Kansas City, MO. Available for freelance projects.",
  keywords: [
    "full stack developer",
    "Shopify developer",
    "NetSuite SuiteCommerce",
    "e-commerce developer",
    "SEO",
    "web developer Kansas City",
    "freelance web developer",
    "React developer",
    "Next.js developer",
  ],
  authors: [{ name: "Brett Bates", url: "https://www.brettbatesweb.com" }],
  creator: "Brett Bates",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://www.brettbatesweb.com",
    siteName:    "Brett Bates — Full Stack Developer",
    title:       "Brett Bates — Full Stack Developer | Kansas City",
    description: "Full-stack developer specializing in e-commerce, Shopify, NetSuite SuiteCommerce, and SEO-driven digital experiences. Based in Kansas City, MO.",
    images: [
      {
        url:    "/img/brblogo.png",
        width:  1200,
        height: 630,
        alt:    "Brett Bates — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Brett Bates — Full Stack Developer | Kansas City",
    description: "Full-stack developer specializing in e-commerce, Shopify, NetSuite SuiteCommerce, and SEO-driven digital experiences.",
    images:      ["/img/brblogo.png"],
  },
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet":     -1,
    },
  },
  alternates: {
    canonical: "https://www.brettbatesweb.com",
  },
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
