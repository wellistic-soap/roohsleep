import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import { amazonLinkFor } from "@/lib/amazon";
import { BlockPrintRule } from "@/components/Motifs";
import Reveal from "@/components/Reveal";
import HeroParallax from "@/components/HeroParallax";
import ProductImage from "@/components/ProductImage";

/* Accent per SKU, driving the outlined numeral and the hover underline. */
const accents = {
  jade: { stroke: "var(--color-jade-700)", line: "bg-jade-700", hover: "group-hover:border-jade-700 group-hover:text-jade-700" },
  brass: { stroke: "var(--color-brass)", line: "bg-brass", hover: "group-hover:border-brass group-hover:text-brass" },
  clay: { stroke: "var(--color-clay)", line: "bg-clay", hover: "group-hover:border-clay group-hover:text-clay" },
};

const [lead, ...rest] = products;

function ShopLink({ product, className = "" }) {
  const accent = accents[product.accent] || accents.jade;
  return (
    <a
      href={amazonLinkFor(product.slug)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 self-start border-b border-jade-400 pb-1 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors ${accent.hover} ${className}`}
    >
      Shop on Amazon
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <HeroParallax src="/images/home-hero.png" />

        {/* Left-weighted scrim so the headline holds contrast over the photo. */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(28,51,44,.86)_0%,rgba(28,51,44,.42)_45%,rgba(28,51,44,.08)_100%)]" />
        <div className="rooh-glow pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_60%,rgba(212,180,120,.28)_0%,rgba(212,180,120,0)_55%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-jade-900 to-transparent" />
        <div className="rooh-grain opacity-[0.06] mix-blend-overlay" />

        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-32 lg:py-36">
          <div className="rooh-rise max-w-2xl">
            <p className="flex items-center gap-2.5 text-xs uppercase tracking-[0.34em] text-jade-300">
              Rooh
              <span className="opacity-60" aria-hidden="true">
                &middot;
              </span>
              <span lang="ur" dir="rtl" className="font-display text-base tracking-normal">
                روح
              </span>
              <span className="opacity-60" aria-hidden="true">
                &middot;
              </span>
              soul
            </p>

            <h1 className="mt-7 font-display text-[clamp(2.75rem,7vw,4.75rem)] leading-[1.04] font-light tracking-[-0.01em]">
              Rest that reaches
              <span className="block italic text-jade-200">deeper than comfort.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-jade-100/85">
              Sleep textiles made through direct relationships with the mills and
              workshops of Pakistan and across South and Southeast Asia. Fewer things,
              made properly, for the hours that put you back together.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                href="/products"
                className="rounded-full bg-cream px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-jade-900 transition-colors hover:bg-sand-200"
              >
                See the collection
              </Link>
              <Link
                href="/about"
                className="border-b border-jade-500 pb-1 text-xs uppercase tracking-[0.18em] text-jade-200 transition-colors hover:border-cream hover:text-cream"
              >
                Our story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand statement */}
      <section className="relative mx-auto max-w-3xl px-5 py-28 text-center sm:px-8">
        <div className="rooh-grain opacity-[0.04] mix-blend-multiply" />
        <Reveal className="relative">
          <BlockPrintRule className="mx-auto h-3 w-44 text-jade-400" />

          <p className="mt-10 font-display text-[clamp(1.5rem,3.4vw,2.0625rem)] leading-[1.5] text-jade-900">
            In Urdu, Hindi, and Persian, rooh means{" "}
            <em className="relative not-italic text-clay">
              <span className="italic">soul</span>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-1.5 h-0.5 bg-clay opacity-50"
              />
            </em>
            ; the{" "}
            <span lang="ur" dir="rtl" className="font-display text-sage">
              روح
            </span>{" "}
            breath of life. We named the brand for the part of you that rest is actually
            for.
          </p>

          <div className="my-7 flex items-center justify-center gap-3.5" aria-hidden="true">
            <span className="h-px w-12 bg-sand-300" />
            <span className="h-[7px] w-[7px] rounded-full bg-sage" />
            <span className="h-px w-12 bg-sand-300" />
          </div>

          <p className="mx-auto max-w-xl text-sm leading-[1.75] text-jade-800/80">
            Everything we make begins with a material and a maker, not a trend. We buy
            direct, we visit the floor, and we keep the line small enough to know every
            seam in it.
          </p>
        </Reveal>
      </section>

      {/* Collection */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-4 border-b border-jade-200 pb-6">
          <h2 className="font-display text-[clamp(2rem,4.2vw,2.625rem)] text-jade-900">
            The collection
          </h2>
          <Link
            href="/products"
            className="text-xs uppercase tracking-[0.18em] text-jade-700 transition-colors hover:text-clay"
          >
            All products
          </Link>
        </Reveal>

        {/* Lead SKU, given the room it earns as the entry product. */}
        <Reveal className="group mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <ProductImage
              product={lead}
              ratio="aspect-[4/5]"
              shadow="shadow-[0_34px_52px_-28px_rgba(22,33,30,.42)] group-hover:shadow-[0_46px_64px_-28px_rgba(22,33,30,.5)]"
            />
            <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-jade-200 bg-cream/90 px-3.5 py-1.5 text-[11px] uppercase tracking-[0.22em] text-jade-800 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-jade-700" />
              Start here
            </span>
          </div>

          <div>
            <span
              aria-hidden="true"
              className="rooh-numeral block font-display text-[78px] leading-[0.8] font-medium"
              style={{ "--numeral": accents[lead.accent].stroke }}
            >
              {lead.order}
            </span>

            <h3 className="relative mt-4 inline-block font-display text-[clamp(1.875rem,4vw,2.5rem)] text-jade-900">
              {lead.name}
              <span
                aria-hidden="true"
                className={`absolute -bottom-1 left-0 h-0.5 w-0 transition-[width] duration-[600ms] ease-[var(--ease-calm)] group-hover:w-full ${accents[lead.accent].line}`}
              />
            </h3>

            <p className="mt-2 text-[15px] italic text-clay">{lead.tagline}</p>
            <p className="mt-5 max-w-md text-[15px] leading-[1.75] text-jade-800/85">
              {lead.description}
            </p>
            <p className="mt-3.5 max-w-md text-[13px] leading-[1.7] text-jade-800/60">
              {lead.materials} {lead.origin}.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <ShopLink product={lead} />
              <Link
                href={`/products/${lead.slug}`}
                className="text-xs uppercase tracking-[0.18em] text-jade-600 transition-colors hover:text-clay"
              >
                Full details
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Remaining SKUs */}
        <div className="mt-24 grid gap-14 sm:grid-cols-2">
          {rest.map((product, i) => (
            <Reveal key={product.slug} delay={120 * (i + 1)} className="group flex flex-col">
              <ProductImage
                product={product}
                ratio="aspect-[3/4]"
                shadow="shadow-[0_28px_44px_-26px_rgba(22,33,30,.38)] group-hover:shadow-[0_46px_64px_-28px_rgba(22,33,30,.5)]"
              />

              <span
                aria-hidden="true"
                className="rooh-numeral mt-6 block font-display text-[58px] leading-[0.8] font-medium"
                style={{ "--numeral": accents[product.accent].stroke }}
              >
                {product.order}
              </span>

              <h3 className="relative mt-3 self-start font-display text-[28px] text-jade-900">
                {product.name}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-0.5 left-0 h-0.5 w-0 transition-[width] duration-[600ms] ease-[var(--ease-calm)] group-hover:w-full ${accents[product.accent].line}`}
                />
              </h3>

              <p className="mt-1.5 text-sm italic text-clay">{product.tagline}</p>
              <p className="mt-4 flex-1 text-sm leading-[1.75] text-jade-800/85">
                {product.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2">
                <ShopLink product={product} />
                <Link
                  href={`/products/${product.slug}`}
                  className="text-xs uppercase tracking-[0.18em] text-jade-600 transition-colors hover:text-clay"
                >
                  Full details
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Pull quote */}
      <section className="relative mt-32 overflow-hidden bg-jade-900 text-cream">
        <div className="rooh-grain opacity-[0.07] mix-blend-overlay" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_20%_0%,rgba(122,138,94,.16),transparent_60%)]" />
        <Reveal className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8">
          <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-jade-300">
            On making
          </p>
          <blockquote className="font-display text-[clamp(2.125rem,6vw,4.25rem)] leading-[1.08] font-light tracking-[-0.01em]">
            We know the floor the{" "}
            <span className="italic text-jade-200">cloth comes off.</span>
          </blockquote>
        </Reveal>
      </section>

      {/* Story */}
      <section className="relative overflow-hidden bg-sand-100">
        {/* Fine woven grid, echoing a warp and weft. */}
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(60,90,80,.05)_0_1px,transparent_1px_6px),repeating-linear-gradient(0deg,rgba(60,90,80,.05)_0_1px,transparent_1px_6px)]" />
        <div className="rooh-grain opacity-[0.05] mix-blend-multiply" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 py-28 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="rooh-arch relative aspect-[4/5] w-full max-w-md overflow-hidden bg-sand-200 shadow-[0_40px_60px_-32px_rgba(22,33,30,.45)]">
              <Image
                src="/images/home-story.png"
                alt="Folded jade, muslin, linen, and clay textiles with cotton thread cones"
                fill
                sizes="(min-width: 1024px) 452px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-[11px] uppercase tracking-[0.3em] text-jade-500">Our story</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,4.6vw,3.125rem)] leading-[1.1] text-jade-900">
              We know the floor the cloth comes off.
            </h2>
            <p className="mt-6 font-display text-[23px] italic leading-[1.5] text-jade-700">
              We buy direct, we visit the floor, and we keep the line short enough to know
              every seam.
            </p>
            <p className="mt-5 text-sm leading-[1.8] text-jade-800/85">
              Rooh grew out of manufacturing relationships built over years across
              Pakistan, Bangladesh, Indonesia, Vietnam, Thailand, and China. Not
              through a trading company, not through a sourcing agent. Through people we
              call directly.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-block border-b border-jade-400 pb-1 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors hover:border-clay hover:text-clay"
            >
              Read the full story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Trust strip. TODO_CONTENT: replace with verified proof points once available. */}
      <section className="mx-auto max-w-6xl px-5 py-26 sm:px-8">
        <Reveal className="grid gap-12 border-y border-jade-200 py-14 sm:grid-cols-3">
          {[
            {
              dot: "bg-jade-700",
              title: "Direct sourcing",
              body: "Bought from the mills and workshops themselves, with no middle layer between us and the makers.",
            },
            {
              dot: "bg-brass",
              title: "Fulfilled by Amazon",
              body: "Ordering, shipping, and returns are handled through Amazon, so delivery is fast and familiar.",
            },
            {
              dot: "bg-clay",
              title: "A short line",
              body: "Three pieces, one visual language, made to sit together on the same bed.",
            },
          ].map((item) => (
            <div key={item.title}>
              <span className={`inline-block h-2 w-2 rounded-full ${item.dot}`} />
              <h3 className="mt-4 font-display text-[22px] font-medium text-jade-900">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-jade-800/80">{item.body}</p>
            </div>
          ))}
        </Reveal>
        <p className="mt-8 text-center text-xs tracking-wide text-jade-500">
          [placeholder testimonial slot: add real customer quotes once reviews exist]
        </p>
      </section>
    </>
  );
}
