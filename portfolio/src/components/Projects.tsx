"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

interface Project {
  title:       string;
  description: string;
  image:       string;
  url:         string;
  tags:        string[];
}

const projects: Project[] = [
  {
    title:       "The Fount KC",
    description: "A full production website for a Kansas City venue with clean design, event listings, and seamless content management.",
    image:       "/img/Fount tile.jpg",
    url:         "https://www.thefountkc.com",
    tags:        ["Web Design", "CMS", "Responsive"],
  },
  {
    title:       "WeatherWise",
    description: "A real-time weather dashboard built with OpenWeather API. Search any city and get current conditions plus a 5-day forecast.",
    image:       "/img/weatherwise logo.jpg",
    url:         "https://brbates86.github.io/WeatherWise/",
    tags:        ["JavaScript", "REST API", "Bootstrap"],
  },
  {
    title:       "TechHub",
    description: "A collaborative developer platform where engineers can share resources, discuss topics, and build community.",
    image:       "/img/techhubtile.jpg",
    url:         "https://arcane-ravine-15281.herokuapp.com/",
    tags:        ["Node.js", "Express", "MongoDB", "Handlebars"],
  },
  {
    title:       "SecureKey",
    description: "A password generator app that creates strong, customizable passwords with a clean, intuitive UI.",
    image:       "/img/securekeyfinal.png",
    url:         "https://brbates86.github.io/SecureKey/",
    tags:        ["JavaScript", "HTML", "CSS"],
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
    <section id="projects" ref={ref} className="py-24 bg-cream-100">
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
          className="text-4xl font-extrabold tracking-tight text-ink-900 mb-3"
        >
          Things I&apos;ve built.
        </motion.h2>
        <motion.p
          {...(inView ? fadeUpProps(0.2) : { initial: { opacity: 0, y: 28 } })}
          className="text-ink-500 text-base mb-14 max-w-lg"
        >
          A selection of projects from the bootcamp and beyond. Real-world problems, real deployed solutions.
        </motion.p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              {...(inView ? fadeUpProps(0.25 + i * 0.1) : { initial: { opacity: 0, y: 28 } })}
              className="group relative bg-white border border-cream-300 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden bg-cream-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />
                {/* External link icon */}
                <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-sm">
                  <svg className="w-4 h-4 text-ink-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-ink-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 rounded"
                    >
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
