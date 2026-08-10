import Link from "next/link";
import { Container } from "./Container";

const footerLinks = [
  {
    heading: "Agency",
    links: [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/work", label: "Work" },
      { href: "/pricing", label: "Pricing" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-off-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <span className="font-display text-2xl">Urban Brand Creatives</span>
            <p className="mt-4 max-w-sm text-sm text-silver-light">
              A Pan-African brand strategy agency building identity, culture,
              and influence for ambitious brands.
            </p>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((group) => (
              <div key={group.heading}>
                <h3 className="text-xs uppercase tracking-widest text-silver">
                  {group.heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-off-white hover:text-orange-red transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h3 className="text-xs uppercase tracking-widest text-silver">
                Connect
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-off-white">
                <li>hello@urbanbrandcreatives.com</li>
                <li>Lagos · Nairobi · Johannesburg</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-silver">
          <span>
            &copy; {new Date().getFullYear()} Urban Brand Creatives. All
            rights reserved.
          </span>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-orange-red transition-colors">
              Instagram
            </Link>
            <Link href="/" className="hover:text-orange-red transition-colors">
              LinkedIn
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
