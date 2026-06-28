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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream-100">
      {/* Subtle geometric background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[480px] h-[480px] rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[360px] h-[360px] rounded-full bg-orange-100/40 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[200px] h-[200px] rounded-full bg-blue-100/20 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Logo — focal point */}
          <motion.div
            {...fadeUpProps(0.05)}
            className="mb-8"
          >
            <Image
              src="/img/brblogo.png"
              alt="BRB Logo"
              width={320}
              height={120}
              className="object-contain w-auto h-24 sm:h-32 lg:h-40"
              priority
            />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            {...fadeUpProps(0.2)}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-ink-900 mb-6"
          >
            From{" "}
            <span className="relative inline-block">
              carpenter
              <span className="absolute bottom-1 left-0 w-full h-1.5 bg-blue-300/60 rounded-full -z-10" />
            </span>
            <br />
            to{" "}
            <span className="text-orange-500">coder.</span>
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            {...fadeUpProps(0.35)}
            className="text-lg sm:text-xl text-ink-600 leading-relaxed max-w-xl mb-10"
          >
            I build clean, functional, and user-friendly web experiences — bringing the same precision
            I honed as a carpenter to every line of code.
          </motion.p>

          {/* CTAs */}
          <motion.div
            {...fadeUpProps(0.5)}
            className="flex flex-wrap items-center gap-4"
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
            {...fadeUpProps(0.65)}
            className="flex flex-wrap gap-2 mt-12"
          >
            {["React", "Next.js", "Node.js", "TypeScript", "Tailwind CSS", "MongoDB", "Express"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-cream-200 border border-cream-400 text-ink-600 rounded-full"
                >
                  {tech}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-xs text-ink-400 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-ink-400 to-transparent" />
      </motion.div>
    </section>
  );
}
