"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function fadeUpProps(delay: number) {
  return {
    initial:    { opacity: 0, y: 32 } as const,
    animate:    { opacity: 1, y: 0  } as const,
    transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  };
}

const techItems = [
  "Shopify",
  "NetSuite SuiteCommerce",
  "React",
  "Next.js",
  "Node.js",
  "SEO Strategy",
  "UX Optimization",
  "Tailwind CSS",
  "TypeScript",
  "Performance Tuning",
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const doubled = [...techItems, ...techItems];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream-100 text-center px-6 pt-20 pb-24">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-200/25 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] rounded-full bg-orange-100/35 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-blue-100/15 blur-2xl" />
      </div>

      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">

        {/* Logo — hero centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 w-full flex justify-center"
        >
          <Image
            src="/img/brblogo.png"
            alt="BRB Logo"
            width={600}
            height={220}
            className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto drop-shadow-sm"
            priority
          />
        </motion.div>

        {/* Separator */}
        <motion.div
          {...fadeUpProps(0.35)}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md mb-10"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUpProps(0.45)}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-ink-900 mb-5"
        >
          E-commerce experiences that{" "}
          <span className="text-orange-500">perform.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUpProps(0.55)}
          className="text-base sm:text-lg text-ink-500 leading-relaxed max-w-2xl mb-10"
        >
          Kansas City-based web developer helping businesses build faster, more effective online
          experiences. Combining web development, SEO, UX, and e-commerce expertise to create
          sites that drive real results. Affordable freelance projects welcome.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUpProps(0.65)}
          className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-14 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="w-full sm:w-auto px-6 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="w-full sm:w-auto px-6 py-3 border-2 border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold rounded-lg transition-all duration-200"
          >
            Get In Touch
          </button>
        </motion.div>
      </div>

      {/* Marquee ticker */}
      <motion.div
        {...fadeUpProps(0.8)}
        className="absolute bottom-0 left-0 right-0 border-t border-cream-300 py-4 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {doubled.map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 px-6">
              <span className="text-xs font-semibold tracking-widest text-ink-400 uppercase">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-orange-300 flex-shrink-0" />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
