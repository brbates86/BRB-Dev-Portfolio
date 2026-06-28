"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const skills = [
  {
    category: "E-Commerce",
    items: ["Shopify", "Shopify Plus", "NetSuite SuiteCommerce", "Liquid", "Custom Storefronts"],
  },
  {
    category: "Frontend & Dev",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
  },
  {
    category: "Growth & Optimization",
    items: ["SEO Strategy", "UX Optimization", "Performance Tuning", "Workflow Automation", "Analytics"],
  },
];

function fadeUpProps(delay: number) {
  return {
    initial:    { opacity: 0, y: 28 } as const,
    animate:    { opacity: 1, y: 0  } as const,
    transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
  };
}

export default function About() {
  const ref    = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          {...(inView ? fadeUpProps(0) : { initial: { opacity: 0, y: 28 } })}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-0.5 bg-orange-400 rounded-full" />
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <motion.h2
              {...(inView ? fadeUpProps(0.1) : { initial: { opacity: 0, y: 28 } })}
              className="text-4xl font-extrabold tracking-tight text-ink-900 mb-6 leading-snug"
            >
              Technology that connects to{" "}
              <span className="text-blue-500">business goals.</span>
            </motion.h2>

            <motion.div
              {...(inView ? fadeUpProps(0.2) : { initial: { opacity: 0, y: 28 } })}
              className="space-y-4 text-ink-600 leading-relaxed text-base"
            >
              <p>
                I&apos;m a full-stack developer focused on building and optimizing e-commerce
                experiences that improve performance, usability, and growth. My work combines web
                development, SEO, UX, and digital optimization to create faster, more effective
                online experiences.
              </p>
              <p>
                I work extensively with Shopify, NetSuite SuiteCommerce, frontend customization,
                dynamic product experiences, and SEO-focused content strategies to solve problems
                that sit at the intersection of technology and business outcomes.
              </p>
              <p>
                Whether it&apos;s improving site functionality, streamlining operational workflows,
                increasing search visibility, or enhancing the customer journey. I care about
                results that move the needle, not just code that ships.
              </p>
              <p>
                Before code, I was a carpenter, framing structures from the ground up alongside my
                dad. That same instinct for precision, structure, and building things that hold up
                under pressure follows me into every project. Outside of work I lead worship at my
                church, cheer for the Chiefs, and explore KC with my wife, Claire.
              </p>
            </motion.div>

            <motion.div
              {...(inView ? fadeUpProps(0.3) : { initial: { opacity: 0, y: 28 } })}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="https://brbates86.github.io/BRB-Digital-Resume/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm rounded-full transition-colors duration-200 shadow-sm"
              >
                View Resume
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                {...(inView ? fadeUpProps(0.2 + gi * 0.1) : { initial: { opacity: 0, y: 28 } })}
                className="bg-cream-50 border border-cream-300 rounded-2xl p-6"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-3">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 text-sm font-medium text-ink-700 bg-white border border-cream-400 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
