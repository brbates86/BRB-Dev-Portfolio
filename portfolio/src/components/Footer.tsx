import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900 text-ink-300 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Image
            src="/img/brblogo.png"
            alt="BRB Logo"
            width={64}
            height={26}
            className="object-contain h-6 w-auto brightness-0 invert opacity-60"
          />

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            {[
              { label: "About",    href: "#about" },
              { label: "Projects", href: "#projects" },
              { label: "Contact",  href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-xs text-ink-500">
            &copy; {year} Brett Russell Bates
          </p>
        </div>

        {/* Bottom divider */}
        <div className="mt-8 pt-6 border-t border-ink-800 flex justify-center">
          <p className="text-xs text-ink-600 text-center">
            Designed &amp; built by Brett Bates &mdash; Kansas City, MO
          </p>
        </div>
      </div>
    </footer>
  );
}
