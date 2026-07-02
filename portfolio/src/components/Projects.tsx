"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Project {
  title:        string;
  description:  string;
  url:          string;
  tags:         string[];
  logo?:        string;
  logoBg?:      string;
  placeholder?: { bg: string; text: string; abbr: string };
}

const projects: Project[] = [
  {
    title:       "All About Doors & Windows",
    description: "A large-scale NetSuite SuiteCommerce platform offering 100K+ door and window replacement parts, with a custom part identifier tool, expert support workflows, and a seamless customer experience built for scale.",
    url:         "https://www.allaboutdoors.com",
    tags:        ["NetSuite", "E-Commerce", "SEO", "UX"],
    logo:        "/img/logo-allaboutdoors.png",
    logoBg:      "bg-white",
  },
  {
    title:       "InstallerBio",
    description: "A platform built to help door and window installation professionals create a trusted online presence, showcase their services, and connect with customers looking for qualified local installers.",
    url:         "https://www.installerbio.com",
    tags:        ["Next.js", "Platform", "UX", "SEO"],
    logo:        "/img/logo-installerbio.png",
    logoBg:      "bg-slate-100",
  },
  {
    title:       "MPLocks",
    description: "A specialized multipoint lock e-commerce site featuring an interactive multi-step lock identifier tool that guides customers to the exact replacement part they need, reducing support volume and increasing conversions.",
    url:         "https://www.mplocks.com",
    tags:        ["Shopify", "E-Commerce", "Custom UI", "SEO"],
    logo:        "/img/logo-mplocks.png",
    logoBg:      "bg-white",
  },
  {
    title:       "TruthParts",
    description: "Authorized retailer for AmesburyTruth replacement hardware, built with a parts identifier tool, educational content strategy, and an optimized storefront that serves hundreds of orders weekly.",
    url:         "https://www.truthparts.com",
    tags:        ["Shopify", "E-Commerce", "Content Strategy", "SEO"],
    logo:        "/img/logo-truthparts.png",
    logoBg:      "bg-white",
  },
  {
    title:       "Door & Window Parts",
    description: "A wholesale and retail e-commerce site offering premium door and window hardware, with fast quote requests, quick ordering, and a clean catalog experience built for contractors and homeowners alike.",
    url:         "https://www.doorandwindowparts.com",
    tags:        ["E-Commerce", "Shopify", "UX"],
    placeholder: { bg: "from-blue-300 to-blue-500", text: "text-white", abbr: "DWP" },
  },
];

function fadeUpProps(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 } as const,
    animate:    { opacity: 1, y: 0  } as const,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  };
}

export default function Projects() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="py-16 md:py-24 bg-cream-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          {...(inView ? fadeUpProps(0) : { initial: { opacity: 0, y: 28 } })}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-0.5 bg-blue-400 rounded-full" />
          <span className="text-xs font-bold tracking-widest text-blue-500 uppercase">Projects</span>
        </motion.div>

        <motion.h2
          {...(inView ? fadeUpProps(0.1) : { initial: { opacity: 0, y: 28 } })}
          className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 mb-3"
        >
          Things I&apos;ve built.
        </motion.h2>
        <motion.p
          {...(inView ? fadeUpProps(0.2) : { initial: { opacity: 0, y: 28 } })}
          className="text-ink-500 text-base mb-12 max-w-lg"
        >
          A selection of sites and platforms built and contributed to. Real businesses, real results.
        </motion.p>

        {/* Compact uniform grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              {...(inView ? fadeUpProps(0.25 + i * 0.08) : { initial: { opacity: 0, y: 28 } })}
              className="group relative bg-white border border-cream-300 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Logo / placeholder area */}
              <div className={`relative h-28 flex items-center justify-center overflow-hidden ${project.logo ? project.logoBg : ""}`}>
                {project.logo ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={project.logo}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-contain p-5"
                    />
                  </div>
                ) : (
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.placeholder!.bg} flex items-center justify-center`}>
                    <span className={`text-3xl font-extrabold tracking-tight ${project.placeholder!.text} opacity-25 select-none`}>
                      {project.placeholder!.abbr}
                    </span>
                  </div>
                )}
                {/* Hover overlay + link icon */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute top-2 right-2 w-6 h-6 bg-white/90 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                  <svg className="w-3 h-3 text-ink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Title + tags */}
              <div className="p-3 flex flex-col gap-2">
                <h3 className="text-xs font-bold text-ink-900 group-hover:text-blue-600 transition-colors leading-snug">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-1.5 py-0.5 text-[10px] font-medium bg-blue-50 text-blue-600 border border-blue-100 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
