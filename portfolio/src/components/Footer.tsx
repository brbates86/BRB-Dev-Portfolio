import Image from "next/image";

const projects = [
  { label: "All About Doors & Windows", href: "https://www.allaboutdoors.com" },
  { label: "MPLocks",                   href: "https://www.mplocks.com" },
  { label: "TruthParts",                href: "https://www.truthparts.com" },
  { label: "Door & Window Parts",       href: "https://www.doorandwindowparts.com" },
  { label: "InstallerBio",              href: "https://www.installerbio.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">

        {/* Main grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 pb-12 border-b border-ink-800">

          {/* Col 1 — Logo + tagline */}
          <div className="lg:col-span-1">
            <Image
              src="/img/brblogo.png"
              alt="BRB Logo"
              width={160}
              height={60}
              className="object-contain h-10 w-auto brightness-0 invert opacity-70 mb-5"
            />
            <p className="text-sm text-ink-400 leading-relaxed">
              Full-stack developer specializing in e-commerce performance, Shopify,
              NetSuite SuiteCommerce, and SEO-driven digital experiences. Based in
              Kansas City — available for freelance projects.
            </p>
          </div>

          {/* Col 2 — Projects */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-500 mb-4">
              Projects
            </h4>
            <ul className="space-y-2.5">
              {projects.map((p) => (
                <li key={p.label}>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-400 hover:text-white transition-colors duration-200"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-ink-500 mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="mailto:brettbatesweb@gmail.com"
                  className="text-ink-400 hover:text-white transition-colors duration-200"
                >
                  brettbatesweb@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/brett-russell-bates-3b3a0524a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-400 hover:text-white transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/brbates86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-400 hover:text-white transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li className="text-ink-600 pt-1">Kansas City, MO</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-600">
            &copy; {year} Brett Russell Bates. All rights reserved.
          </p>
          <p className="text-xs text-ink-700">
            Designed &amp; built by Brett Bates — Kansas City, MO
          </p>
        </div>

      </div>
    </footer>
  );
}
