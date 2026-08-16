"use client";

import Link from "next/link";
import { useState } from "react";
import { AMAZON_STOREFRONT, buildAmazonLink } from "@/lib/amazon";
import Wordmark from "./Wordmark";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "Our Story" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-jade-200/60 bg-cream/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Wordmark className="h-9 w-auto text-jade-900" />
          <span
            lang="ur"
            dir="rtl"
            className="font-display text-[19px] text-jade-500"
          >
            روح
          </span>
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm tracking-[0.14em] text-jade-800 uppercase transition-colors hover:text-clay"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={buildAmazonLink(AMAZON_STOREFRONT)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-jade-800 px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-sand-100 transition-colors hover:bg-jade-700"
          >
            Shop on Amazon
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="md:hidden"
        >
          <span className="block h-px w-6 bg-jade-900" />
          <span className="mt-1.5 block h-px w-6 bg-jade-900" />
          <span className="mt-1.5 block h-px w-4 bg-jade-900" />
        </button>
      </nav>

      {open && (
        <div className="border-t border-jade-200/60 px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm uppercase tracking-[0.14em] text-jade-800"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={buildAmazonLink(AMAZON_STOREFRONT)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full bg-jade-800 px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-sand-100"
          >
            Shop on Amazon
          </a>
        </div>
      )}
    </header>
  );
}
