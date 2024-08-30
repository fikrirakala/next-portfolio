"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

const navigations = [
  {
    name: "Posts",
    href: "/posts",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm">
      <nav className="container flex max-w-3xl items-center justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl font-bold">
            HB
          </Link>
        </div>

        <ul className="flex items-center gap-6 sm:gap-10">
          {navigations.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm transition-colors hover:text-foreground ${pathname === link.href ? "text-foreground" : "text-muted-foreground"}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
