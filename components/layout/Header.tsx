"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-off-white/90 backdrop-blur border-b border-silver-light">
      <Container className="flex items-center justify-between py-5">
        <Link href="/" className="font-display text-xl">
          Urban Brand Creatives
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-orange-red"
                    : "text-black hover:text-orange-red"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Button href="/contact" variant="primary" className="hidden sm:inline-flex">
          Start a Project
        </Button>
      </Container>
    </header>
  );
}
