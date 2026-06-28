"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface Project {
  title:       string;
  description: string;
  url:         string;
  tags:        string[];
  placeholder: { bg: string; text: string; abbr: string };
}

const projects: Project[] = [
  {
    title:       "All About Doors & Windows",
    description: "A large-scale e-commerce platform offering 100K+ door and window replacement parts, with a custom part identifier tool, expert support workflows, and a seamless customer experience built for scale.",
    url:         "https://www.allaboutdoors.com",
    tags:        ["Shopify", "E-Commerce", "SEO", "UX"],
    placeholder: { bg: "from-blue-400 to-blue-600", text: "text-white", abbr: "AADW" },
  },
  {
    title:       "MPLocks",
    description: "A specialized multipoint lock e-commerce site featuring an interactive multi-step lock identifier tool that guides customers to the exact replacement part they need, reducing support volume and increasing conversions.",
    url:         "https://www.mplocks.com",
    tags:        ["Shopify", "E-Commerce", "Custom UI", "SEO"],
    placeholder: { bg: "from-ink-700 to-ink-900", text: "text-white", abbr: "MPL" },
  },
  {
    title:       "TruthParts",
    description: "Authorized retailer for AmesburyTruth replacement hardware, built with a parts identifier tool, educational content strategy, and an optimized storefront that serves hundreds of orders weekly.",
    url:         "https://www.truthparts.com",
    tags:        ["Shopify", "E-Commerce", "Content Strategy", "SEO"],
    placeholder: { bg: "from-orange-400 to-orange-600", text: "text-white", abbr: "TP" },
  },
  {
    title:       "Door & Window Parts",
    description: "A wholesale and retail e-commerce site offering premium door and window hardware, with fast quote requests, quick ordering, and a clean catalog experience built for contractors and homeowners alike.",
    url:         "https://www.doorandwindowparts.com",
    tags:        ["E-Commerce", "Shopify", "UX"],
    placeholder: { bg: "from-blue-300 to-blue-500", text: "text-white", abbr: "DWP" },
  },
  {
    title:       "InstallerBio",
    description: "A platform built to help door and window installation professionals create a trusted online presence, showcase their services, and connect with customers looking for qualified local installers.",
    url:         "https://www.installerbio.com",
    tags:        ["Next.js", "Platform", "UX", "SEO"],
    placeholder: { bg: "from-cream-400 to-cream-500", text: "text-ink-800", abbr: "IB" },
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
          className="text-ink-500 text-base mb-14 max-w-lg"
        >
          A selection of sites and platforms built and contributed to. Real businesses, real results.
        </motion.p>

        {/* Grid — first card full width, rest in 2 cols */}
        <div className="space-y-6">
          {/* First project — featured full width */}
          {projects.slice(0, 1).map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              {...(inView ? fadeUpProps(0.25 + i * 0.1) : { initial: { opacity: 0, y: 28 } })}
              className="group relative flex flex-col sm:flex-row bg-white border border-cream-300 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Placeholder */}
              <div className={`relative sm:w-64 h-44 sm:h-auto flex-shrink-0 bg-gradient-to-br ${project.placeholder.bg} flex items-center justify-center`}>
                <span className={`text-4xl font-extrabold tracking-tight ${project.placeholder.text} opacity-30 select-none`}>
                  {project.placeholder.abbr}
                </span>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                  <svg className="w-3.5 h-3.5 text-ink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-500" />
            </motion.a>
          ))}

          {/* Remaining — 2 column grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.slice(1).map((project, i) => (
              <motion.a
                key={project.title}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                {...(inView ? fadeUpProps(0.35 + i * 0.1) : { initial: { opacity: 0, y: 28 } })}
                className="group relative bg-white border border-cream-300 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Placeholder */}
                <div className={`relative h-40 flex items-center justify-center bg-gradient-to-br ${project.placeholder.bg}`}>
                  <span className={`text-5xl font-extrabold tracking-tight ${project.placeholder.text} opacity-25 select-none`}>
                    {project.placeholder.abbr}
                  </span>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  <div className="absolute top-3 right-3 w-7 h-7 bg-white/90 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                    <svg className="w-3.5 h-3.5 text-ink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
