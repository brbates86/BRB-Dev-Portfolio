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

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream-100 text-center px-6 pt-20 pb-16">
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

        {/* Divider */}
        <motion.div
          {...fadeUpProps(0.3)}
          className="flex items-center gap-4 mb-8 w-full max-w-sm"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-cream-400" />
          <span className="text-xs font-bold tracking-widest text-ink-400 uppercase whitespace-nowrap">
            Full Stack Developer · Kansas City, MO
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-cream-400" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUpProps(0.45)}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-ink-900 mb-5"
        >
          E-commerce experiences that{" "}
          <span className="text-orange-500">perform.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          {...fadeUpProps(0.55)}
          className="text-base sm:text-lg text-ink-500 leading-relaxed max-w-2xl mb-10"
        >
          I help businesses build faster, more effective online experiences — combining web
          development, SEO, UX, and e-commerce expertise to create sites that actually drive results.
          Available for freelance projects.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUpProps(0.65)}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          <button
            onClick={() => scrollTo("#projects")}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 active:bg-orange-700 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-200"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-6 py-3 border-2 border-blue-400 text-blue-600 hover:bg-blue-50 font-semibold rounded-full transition-all duration-200"
          >
            Get In Touch
          </button>
        </motion.div>

        {/* Tech badges */}
        <motion.div
          {...fadeUpProps(0.75)}
          className="flex flex-wrap justify-center gap-2"
        >
          {[
            "Shopify",
            "NetSuite SuiteCommerce",
            "React",
            "Next.js",
            "Node.js",
            "SEO",
            "UX Optimization",
            "Tailwind CSS",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-cream-200 border border-cream-400 text-ink-600 rounded-full"
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-ink-400 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent" />
      </motion.div>
    </section>
  );
}
