import Link from "next/link";
import { AMAZON_STOREFRONT, buildAmazonLink } from "@/lib/amazon";
import { BlockPrintRule, LotusMark } from "./Motifs";

export default function Footer() {
  return (
    <footer className="mt-6 bg-footer text-sand-200">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <BlockPrintRule className="mb-12 h-4 w-full text-jade-600" />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <LotusMark className="h-7 w-7 text-jade-300" />
              <span className="font-display text-[26px] tracking-[0.14em] text-cream">rooh</span>
              <span lang="ur" dir="rtl" className="font-display text-[18px] text-jade-400">
                روح
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-jade-200/80">
              Rooh means soul. Sleep textiles made through direct relationships with the
              people who weave them.
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-jade-300">Explore</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-cream">Home</Link></li>
              <li><Link href="/products" className="hover:text-cream">Products</Link></li>
              <li><Link href="/about" className="hover:text-cream">Our Story</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-jade-300">Shop</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={buildAmazonLink(AMAZON_STOREFRONT)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream"
                >
                  Amazon storefront
                </a>
              </li>
              {/* TODO_CONTENT: real social handle */}
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                  Instagram
                </a>
              </li>
              <li>
                <a href="mailto:hello@roohsleep.com" className="hover:text-cream">
                  hello@roohsleep.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.22em] text-jade-300">Join the list</h4>
            <p className="mt-4 text-sm text-jade-200/80">
              Occasional notes on sleep, materials, and where things are made.
            </p>
            {/* TODO_CONTENT: wire to a real email provider. Non-functional in mockup. */}
            <form className="mt-4 flex gap-2" action="#">
              <input
                type="email"
                required
                placeholder="Email address"
                aria-label="Email address"
                className="min-w-0 flex-1 border-b border-jade-600 bg-transparent px-1 py-2 text-sm text-cream placeholder:text-jade-300/60 focus:border-jade-300 focus:outline-none"
              />
              <button type="submit" className="text-xs uppercase tracking-[0.16em] text-jade-200 hover:text-cream">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-jade-800 pt-6 text-xs text-jade-300/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Rooh. All rights reserved.</p>
          <div className="flex gap-6">
            {/* TODO_CONTENT: real policy pages */}
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
