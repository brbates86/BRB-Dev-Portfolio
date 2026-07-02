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

const num = ["01", "02", "03"];

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
    <section id="about" ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <motion.div
          {...(inView ? fadeUpProps(0) : { initial: { opacity: 0, y: 28 } })}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-8 h-0.5 bg-orange-400 rounded-full" />
          <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">About Me</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Bio */}
          <div>
            <motion.h2
              {...(inView ? fadeUpProps(0.1) : { initial: { opacity: 0, y: 28 } })}
              className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-900 mb-6 leading-snug"
            >
              Kansas City web developer.{" "}
              <span className="text-blue-500">Real results.</span>
            </motion.h2>

            <motion.div
              {...(inView ? fadeUpProps(0.2) : { initial: { opacity: 0, y: 28 } })}
              className="space-y-4 text-ink-600 leading-relaxed text-base"
            >
              <p>
                Full-stack developer focused on building and optimizing e-commerce experiences that
                improve performance, usability, and growth. The work combines web development, SEO,
                UX, and digital optimization to create faster, more effective online experiences.
              </p>
              <p>
                Deep experience with Shopify, NetSuite SuiteCommerce, frontend customization,
                dynamic product experiences, and SEO-focused content strategies to solve problems
                at the intersection of technology and business outcomes.
              </p>
              <p>
                Whether it&apos;s improving site functionality, streamlining operational workflows,
                increasing search visibility, or enhancing the customer journey. The focus is on
                results that move the needle, not just code that ships.
              </p>
              <p>
                Before code: a carpenter, framing structures from the ground up. That same instinct
                for precision and building things that hold up under pressure carries into every
                project. Based in Kansas City, MO. Leads worship at church, cheers for the Chiefs,
                and explores the city with wife Claire.
              </p>
            </motion.div>

          </div>

          {/* Skills — editorial list */}
          <div className="divide-y divide-cream-300">
            {skills.map((group, gi) => (
              <motion.div
                key={group.category}
                {...(inView ? fadeUpProps(0.2 + gi * 0.1) : { initial: { opacity: 0, y: 28 } })}
                className="py-7 first:pt-0"
              >
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="text-xs font-bold text-orange-400 tabular-nums">
                    {num[gi]}
                  </span>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400">
                    {group.category}
                  </h3>
                </div>
                <p className="text-base font-medium text-ink-800 leading-relaxed">
                  {group.items.join("  ·  ")}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
