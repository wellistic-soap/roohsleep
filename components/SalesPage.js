import Image from "next/image";
import Link from "next/link";
import { amazonLinkFor } from "@/lib/amazon";
import { BlockPrintRule, JaaliPattern, LotusMark } from "@/components/Motifs";
import Reveal from "@/components/Reveal";

/* Shared long-form direct response template. One instance per SKU, driven by
   lib/salesCopy.js. The CTA repeats at every section break; that repetition is
   the format, not an oversight. */

function Cta({ slug, children = "Shop on Amazon", tone = "dark", className = "" }) {
  const tones = {
    dark: "bg-jade-800 text-sand-100 hover:bg-jade-700",
    light: "bg-cream text-jade-900 hover:bg-sand-200",
  };
  return (
    <a
      href={amazonLinkFor(slug)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs uppercase tracking-[0.18em] transition-colors ${tones[tone]} ${className}`}
    >
      {children}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}

function CtaNote({ className = "" }) {
  return (
    <p className={`text-xs text-jade-500 ${className}`}>
      Opens Amazon in a new tab. Price, delivery, and returns are handled there.
    </p>
  );
}

function Mark({ yes }) {
  return yes ? (
    <span className="text-jade-600" aria-label="yes">
      &#10003;
    </span>
  ) : (
    <span className="text-jade-300" aria-label="no">
      &ndash;
    </span>
  );
}

export default function SalesPage({ product, copy }) {
  const { slug } = product;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <div className="absolute inset-0 text-jade-400">
          <JaaliPattern id={`jaali-hero-${slug}`} opacity={0.12} />
        </div>
        <div className="rooh-glow pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_60%,rgba(212,180,120,.28)_0%,rgba(212,180,120,0)_55%)]" />
        <div className="rooh-grain opacity-[0.06] mix-blend-overlay" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div className="rooh-rise">
            <Link
              href="/products"
              className="text-[11px] uppercase tracking-[0.24em] text-jade-300 transition-colors hover:text-cream"
            >
              &larr; All products
            </Link>

            <h1 className="mt-7 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.08] font-light">
              {copy.hookLead}
              <span className="block italic text-jade-200">{copy.hookEmph}</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-jade-100/85">
              {copy.sub}
            </p>

            <div className="mt-9">
              <Cta slug={slug} tone="light" />
            </div>
            <CtaNote className="mt-4 text-jade-300/80" />
          </div>

          <div className="rooh-arch relative aspect-[4/5] w-full max-w-md overflow-hidden bg-jade-800 shadow-[0_40px_60px_-32px_rgba(22,33,30,.55)] lg:justify-self-end">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Proof strip. TODO_CONTENT: fill only from genuine Amazon reviews.
            Deliberately empty rather than populated with invented numbers. */}
        <div className="relative border-t border-jade-800">
          <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
            <p className="text-center text-xs tracking-wide text-jade-300/70">
              [placeholder proof strip: star rating and review count go here once the
              listing has genuine reviews]
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-jade-500">
            {copy.problemEyebrow}
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
            {copy.problemHeading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {copy.problems.map((p, i) => (
            <Reveal key={p.title} delay={120 * i} className="border-t border-jade-200 pt-6">
              <span className="text-[11px] tracking-[0.28em] text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl text-jade-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-jade-800/80">{p.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Mechanism */}
      <section className="relative overflow-hidden bg-sand-100">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(60,90,80,.05)_0_1px,transparent_1px_6px),repeating-linear-gradient(0deg,rgba(60,90,80,.05)_0_1px,transparent_1px_6px)]" />
        <div className="rooh-grain opacity-[0.05] mix-blend-multiply" />

        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <Reveal className="text-center">
            <BlockPrintRule className="mx-auto h-4 w-48 text-jade-400" />
            <h2 className="mt-8 font-display text-4xl text-jade-900 sm:text-5xl">
              {copy.mechHeading}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-jade-800/80">
              {copy.mechSub}
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {copy.steps.map((s, i) => (
              <Reveal key={s.n} delay={120 * i} className="bg-cream p-9">
                <span className="font-display text-4xl text-jade-300">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl text-jade-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-jade-800/80">{s.body}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Cta slug={slug} />
            <CtaNote className="mt-4" />
          </div>
        </div>
      </section>

      {/* Feature stack */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-jade-500">The details</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
            {copy.featuresHeading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {copy.features.map((f, i) => (
            <Reveal key={f.title} delay={80 * i}>
              <LotusMark className="h-6 w-6 text-clay" />
              <h3 className="mt-4 font-display text-xl text-jade-900">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-jade-800/80">{f.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <div className="rooh-grain opacity-[0.07] mix-blend-overlay" />
        <div className="relative mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <Reveal className="text-center">
            <h2 className="font-display text-4xl sm:text-5xl">How it compares</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-jade-100/80">
              {copy.comparisonSub}
            </p>
          </Reveal>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-jade-700">
                  <th className="py-4 text-left font-normal" />
                  <th className="px-4 py-4 font-display text-lg font-normal text-cream">
                    {copy.comparison.cols[0]}
                  </th>
                  <th className="px-4 py-4 text-xs font-normal uppercase tracking-[0.14em] text-jade-300">
                    {copy.comparison.cols[1]}
                  </th>
                  <th className="px-4 py-4 text-xs font-normal uppercase tracking-[0.14em] text-jade-300">
                    {copy.comparison.cols[2]}
                  </th>
                </tr>
              </thead>
              <tbody>
                {copy.comparison.rows.map((r) => (
                  <tr key={r.row} className="border-b border-jade-800/70">
                    <td className="py-4 pr-4 text-jade-100/85">{r.row}</td>
                    <td className="bg-jade-800/40 px-4 py-4 text-center text-lg">
                      <Mark yes={r.marks[0]} />
                    </td>
                    <td className="px-4 py-4 text-center text-lg">
                      <Mark yes={r.marks[1]} />
                    </td>
                    <td className="px-4 py-4 text-center text-lg">
                      <Mark yes={r.marks[2]} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14 text-center">
            <Cta slug={slug} tone="light" />
          </div>
        </div>
      </section>

      {/* Self-selection */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Reveal className="text-center">
          <BlockPrintRule className="mx-auto h-4 w-48 text-jade-400" />
          <h2 className="mt-8 font-display text-4xl text-jade-900 sm:text-5xl">
            Who this is for
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <Reveal className="bg-sand-100 p-10">
            <h3 className="font-display text-2xl text-jade-900">It is a good fit if</h3>
            <ul className="mt-6 space-y-4">
              {copy.forYou.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-jade-800/85">
                  <span className="mt-0.5 text-jade-600" aria-hidden="true">
                    &#10003;
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="border border-jade-200 p-10">
            <h3 className="font-display text-2xl text-jade-900">Look elsewhere if</h3>
            <ul className="mt-6 space-y-4">
              {copy.notForYou.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-jade-800/70">
                  <span className="mt-0.5 text-clay" aria-hidden="true">
                    &times;
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Materials and origin */}
      <section className="relative overflow-hidden bg-sand-100">
        <div className="rooh-grain opacity-[0.05] mix-blend-multiply" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="rooh-arch relative aspect-[4/5] w-full max-w-md overflow-hidden bg-sand-200 shadow-[0_40px_60px_-32px_rgba(22,33,30,.45)]">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                sizes="(min-width: 1024px) 448px, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-xs uppercase tracking-[0.3em] text-jade-500">
              Materials and origin
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
              We can tell you where it was made.
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-jade-800/85">
              It comes from a workshop we buy from directly rather than through a trading
              company. That is not a story we assembled afterwards; it is the reason the
              brand exists at all.
            </p>

            <dl className="mt-9 space-y-5 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-jade-500">
                  Materials
                </dt>
                <dd className="mt-1.5 text-jade-800/85">{product.materials}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-jade-500">Made</dt>
                <dd className="mt-1.5 text-jade-800/85">{product.origin}</dd>
              </div>
            </dl>

            <Link
              href="/about"
              className="mt-9 inline-block border-b border-jade-400 pb-1 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors hover:border-clay hover:text-clay"
            >
              Read the sourcing story
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-4xl text-jade-900 sm:text-5xl">
            Questions people ask
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-jade-200 border-y border-jade-200">
          {copy.faqs.map((f) => (
            <details key={f.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-left">
                <span className="font-display text-xl text-jade-900">{f.q}</span>
                <span
                  className="mt-1 shrink-0 text-lg text-jade-500 transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 pr-10 text-sm leading-relaxed text-jade-800/85">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Risk reversal */}
      <section className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal className="bg-jade-800 p-10 text-center text-cream sm:p-16">
          <h2 className="font-display text-3xl sm:text-4xl">{copy.guaranteeHeading}</h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-jade-100/85">
            Every order runs through Amazon, which means returns run through Amazon too,
            inside their standard window. No form to fill in with us, no conversation to
            have, no restocking fee invented at our end.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-xs text-jade-300/80">
            Amazon&rsquo;s current returns policy applies and is shown on the listing.
          </p>
        </Reveal>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <div className="absolute inset-0 text-jade-400">
          <JaaliPattern id={`jaali-close-${slug}`} opacity={0.12} />
        </div>
        <div className="rooh-grain opacity-[0.07] mix-blend-overlay" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <LotusMark className="mx-auto h-10 w-10 text-jade-300" />
          <h2 className="mt-8 font-display text-4xl leading-tight font-light sm:text-5xl">
            {copy.closeLead}
            <span className="block italic text-jade-200">{copy.closeEmph}</span>
          </h2>
          <div className="mt-10">
            <Cta slug={slug} tone="light" />
          </div>
          <CtaNote className="mt-4 text-jade-300/80" />
        </div>
      </section>

      {/* Sticky mobile CTA. Desktop already has the CTA at every section break. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-jade-700 bg-jade-900/95 px-4 py-3 backdrop-blur lg:hidden">
        <a
          href={amazonLinkFor(slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-jade-900"
        >
          Shop on Amazon
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="h-20 lg:hidden" />
    </>
  );
}
