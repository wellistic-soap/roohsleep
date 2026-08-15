import Image from "next/image";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { amazonLinkFor } from "@/lib/amazon";
import { BlockPrintRule, JaaliPattern, LotusMark } from "@/components/Motifs";

const product = getProduct("seed-eye-mask");

export const metadata = {
  title: "Seed-Filled Eye Mask",
  description:
    "A sleep mask filled with whole seeds, so it settles into the shape of your face instead of sitting flat on it. Cotton shell, sewn in Sialkot.",
};

/* ---------------------------------------------------------------------------
   Long-form direct response layout: hook, problem, mechanism, feature stack,
   comparison, self-selection, objection handling, risk reversal, close.
   The CTA repeats at every section break; that repetition is the format.

   Deliberately omitted from the usual playbook, per the brand guardrails:
   countdown timers, stock counters, invented review counts, invented quotes,
   and any claim about what the mask does to your body. Every proof element
   below is a clearly marked placeholder until real reviews exist.
   TODO_CONTENT: see TODO_CONTENT.md before launch.
--------------------------------------------------------------------------- */

function Cta({ children = "Shop on Amazon", tone = "dark", className = "" }) {
  const tones = {
    dark: "bg-jade-800 text-sand-100 hover:bg-jade-700",
    light: "bg-cream text-jade-900 hover:bg-sand-200",
    clay: "bg-clay text-cream hover:bg-[#a25a3f]",
  };
  return (
    <a
      href={amazonLinkFor("seed-eye-mask")}
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

function Check({ yes }) {
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

const problems = [
  {
    title: "The light gets in at the nose",
    body: "A flat mask bridges straight over the nose and leaves two open gaps underneath. That is where morning light arrives first.",
  },
  {
    title: "The pressure lands on your eyelids",
    body: "Anything flat and stretched presses hardest exactly where you least want it, right on the lids, so you feel it every time you move your eyes.",
  },
  {
    title: "It has moved by the time you wake",
    body: "A light mask with a tight strap slides once you turn over, and you end up wearing it around your forehead.",
  },
];

const steps = [
  {
    n: "01",
    title: "Settle it",
    body: "Lay it across your face and give it a moment. The seeds redistribute and find the space around your eyes on their own.",
  },
  {
    n: "02",
    title: "It takes your shape",
    body: "The fill drops into the hollows at the bridge of the nose and under the brow, closing the gaps a flat panel leaves open.",
  },
  {
    n: "03",
    title: "It stays where it settled",
    body: "Weight distributed across the whole mask does the holding, so the strap does not have to be tight to keep it in place.",
  },
];

const features = [
  {
    title: "Whole seed fill",
    body: "Whole seeds, not pellets or crushed filler. They shift with a soft, low sound and settle rather than bunch.",
  },
  {
    title: "Cotton shell",
    body: "A plain woven cotton face with nothing coated or laminated, so it breathes against the skin.",
  },
  {
    title: "Contoured nose drape",
    body: "Cut longer through the centre so the fill can fall into the bridge of the nose instead of tenting over it.",
  },
  {
    title: "Flat back closure",
    body: "An adjustable strap with no buckle or plastic slider at the back, so there is nothing to press into the side of your head.",
  },
  {
    title: "Made to be washed",
    body: "Spot clean the shell and air dry. Care instructions are printed on the label, not buried in a leaflet.",
  },
  {
    title: "Sewn in Sialkot",
    body: "Cut and sewn in a workshop we buy from directly, in a city with a long textile trade.",
  },
];

const comparison = [
  { row: "Closes the gap at the nose bridge", rooh: true, flat: false, molded: true },
  { row: "Conforms to your face shape", rooh: true, flat: false, molded: false },
  { row: "Weight spread across the whole mask", rooh: true, flat: false, molded: false },
  { row: "Stays put without a tight strap", rooh: true, flat: false, molded: false },
  { row: "No rigid structure to press on", rooh: true, flat: true, molded: false },
  { row: "No hardware behind the head", rooh: true, flat: false, molded: false },
  { row: "Packs flat in a bag", rooh: true, flat: true, molded: false },
];

const forYou = [
  "You wake with the sun and want the room darker than your curtains make it",
  "You like the feeling of a little weight on your face",
  "You sleep on your side and want something that will not shift when you turn",
  "You travel and want something that packs flat",
];

const notForYou = [
  "You want a mask you can barely feel; this one is meant to be felt",
  "You are looking for a cooling gel insert or a cold pack, which this is not",
  "You want something you can heat up, which this is not designed or sold for",
  "You need a rigid cup that keeps all contact off the lashes",
];

const faqs = [
  {
    q: "What seeds are inside?",
    a: "Whole seeds in a sewn cotton chamber. We are finalising the specific seed and the sourcing region, and we will name both here and on the label rather than leaving it vague. [TODO_CONTENT: confirm seed type and region before launch.]",
  },
  {
    q: "Does it smell of anything?",
    a: "It is unscented. Nothing is added to the fill and no fragrance is applied to the cotton. New textiles carry a faint smell of the cloth itself, which fades with airing.",
  },
  {
    q: "Can I heat it in the microwave?",
    a: "No. It is not designed, tested, or sold as a heat pack, and we would rather say that plainly than let people assume otherwise. Use it as it comes.",
  },
  {
    q: "Does it block all the light?",
    a: "It blocks considerably more than a flat mask because the fill closes the gaps at the nose. No fabric mask is perfectly lightproof, and any brand claiming total blackout is overstating it.",
  },
  {
    q: "How heavy is it?",
    a: "Light enough to sleep in and heavy enough to notice, spread evenly rather than concentrated in one place. [TODO_CONTENT: add the confirmed weight in grams once production samples are final.]",
  },
  {
    q: "Will it work if I sleep on my side?",
    a: "Yes. The fill moves out of the way where your face meets the pillow rather than resisting it, which is the main thing a moulded mask cannot do.",
  },
  {
    q: "How do I clean it?",
    a: "Spot clean the shell with a damp cloth and let it air dry fully. Do not submerge it or put it through a wash cycle, because the fill is seed and needs to stay dry.",
  },
  {
    q: "How do returns work?",
    a: "Through Amazon, under their standard returns window. We do not run a separate returns process, which means you get theirs, and theirs is better than anything we would build ourselves at this stage.",
  },
];

export default function SeedEyeMaskPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <div className="absolute inset-0 text-jade-400">
          <JaaliPattern id="jaali-mask-hero" opacity={0.12} />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:gap-20">
          <div className="rooh-rise">
            <Link
              href="/products"
              className="text-[11px] uppercase tracking-[0.24em] text-jade-300 hover:text-cream"
            >
              &larr; All products
            </Link>

            <h1 className="mt-7 font-display text-4xl leading-[1.08] font-light sm:text-5xl lg:text-6xl">
              Most eye masks sit on your face.
              <span className="block italic text-jade-200">
                This one settles into it.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-relaxed text-jade-100/85">
              A flat panel of fabric bridges over your nose and leaves the light a way
              in. Ours is filled with whole seeds, so it drops into the shape of your
              face and closes those gaps by weight alone.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Cta tone="light" />
            </div>
            <CtaNote className="mt-4 text-jade-300/80" />
          </div>

          <div className="rooh-arch relative aspect-[4/5] w-full max-w-md overflow-hidden bg-jade-800 lg:justify-self-end">
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

        {/* Proof strip. TODO_CONTENT: replace once real reviews exist. Do not
            invent a rating or a count here. */}
        <div className="relative border-t border-jade-800">
          <div className="mx-auto max-w-6xl px-5 py-5 sm:px-8">
            <p className="text-center text-xs tracking-wide text-jade-300/70">
              [placeholder proof strip: star rating and review count go here once the
              listing has genuine reviews. Intentionally left empty rather than filled
              with invented numbers.]
            </p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-jade-500">
            Why most masks disappoint
          </p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
            The problem is the flat panel.
          </h2>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {problems.map((p, i) => (
            <div key={p.title} className="border-t border-jade-200 pt-6">
              <span className="text-[11px] tracking-[0.28em] text-clay">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-2xl text-jade-900">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-jade-800/80">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mechanism */}
      <section className="bg-sand-100">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="text-center">
            <BlockPrintRule className="mx-auto h-4 w-48 text-jade-400" />
            <h2 className="mt-8 font-display text-4xl text-jade-900 sm:text-5xl">
              What the seeds actually do
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-jade-800/80">
              Nothing clever, and nothing you plug in. Loose fill behaves differently
              from a stretched panel, and that difference is the whole product.
            </p>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="bg-cream p-9">
                <span className="font-display text-4xl text-jade-300">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl text-jade-900">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-jade-800/80">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Cta />
            <CtaNote className="mt-4" />
          </div>
        </div>
      </section>

      {/* Feature stack */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-jade-500">The details</p>
          <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
            Six things worth knowing.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title}>
              <LotusMark className="h-6 w-6 text-clay" />
              <h3 className="mt-4 font-display text-xl text-jade-900">{f.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-jade-800/80">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison */}
      <section className="bg-jade-900 text-cream">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8">
          <div className="text-center">
            <h2 className="font-display text-4xl sm:text-5xl">How it compares</h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-jade-100/80">
              Against the two other kinds of mask you are likely choosing between. These
              are categories of construction, not particular brands.
            </p>
          </div>

          <div className="mt-14 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-jade-700">
                  <th className="py-4 text-left font-normal text-jade-300"></th>
                  <th className="px-4 py-4 font-display text-lg font-normal text-cream">
                    Rooh seed mask
                  </th>
                  <th className="px-4 py-4 text-xs font-normal uppercase tracking-[0.14em] text-jade-300">
                    Flat fabric mask
                  </th>
                  <th className="px-4 py-4 text-xs font-normal uppercase tracking-[0.14em] text-jade-300">
                    Moulded cup mask
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((c) => (
                  <tr key={c.row} className="border-b border-jade-800/70">
                    <td className="py-4 pr-4 text-jade-100/85">{c.row}</td>
                    <td className="bg-jade-800/40 px-4 py-4 text-center text-lg">
                      <Check yes={c.rooh} />
                    </td>
                    <td className="px-4 py-4 text-center text-lg">
                      <Check yes={c.flat} />
                    </td>
                    <td className="px-4 py-4 text-center text-lg">
                      <Check yes={c.molded} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-14 text-center">
            <Cta tone="light" />
          </div>
        </div>
      </section>

      {/* Self-selection */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <BlockPrintRule className="mx-auto h-4 w-48 text-jade-400" />
          <h2 className="mt-8 font-display text-4xl text-jade-900 sm:text-5xl">
            Who this is for
          </h2>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="bg-sand-100 p-10">
            <h3 className="font-display text-2xl text-jade-900">It is a good fit if</h3>
            <ul className="mt-6 space-y-4">
              {forYou.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-jade-800/85">
                  <span className="mt-0.5 text-jade-600" aria-hidden="true">
                    &#10003;
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-jade-200 p-10">
            <h3 className="font-display text-2xl text-jade-900">Look elsewhere if</h3>
            <ul className="mt-6 space-y-4">
              {notForYou.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-jade-800/70">
                  <span className="mt-0.5 text-clay" aria-hidden="true">
                    &times;
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="bg-sand-100">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="rooh-arch relative aspect-[4/5] w-full max-w-md overflow-hidden bg-sand-200">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-jade-500">
              Materials and origin
            </p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
              We can tell you where it was made.
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-jade-800/85">
              It is sewn in Sialkot, in a workshop we buy from directly rather than
              through a trading company. That is not a story we assembled afterwards; it
              is the reason the brand exists at all.
            </p>

            <dl className="mt-9 space-y-5 text-sm">
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-jade-500">
                  Materials
                </dt>
                <dd className="mt-1.5 text-jade-800/85">{product.materials}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-jade-500">
                  Made
                </dt>
                <dd className="mt-1.5 text-jade-800/85">{product.origin}</dd>
              </div>
              <div>
                <dt className="text-[11px] uppercase tracking-[0.22em] text-jade-500">
                  Care
                </dt>
                <dd className="mt-1.5 text-jade-800/85">
                  Spot clean and air dry. Keep the fill dry.
                </dd>
              </div>
            </dl>

            <Link
              href="/about"
              className="mt-9 inline-block border-b border-jade-400 pb-1 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors hover:border-clay hover:text-clay"
            >
              Read the sourcing story
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl text-jade-900 sm:text-5xl">
            Questions people ask
          </h2>
        </div>

        <div className="mt-14 divide-y divide-jade-200 border-y border-jade-200">
          {faqs.map((f) => (
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
        <div className="bg-jade-800 p-10 text-center text-cream sm:p-16">
          <h2 className="font-display text-3xl sm:text-4xl">
            If it is not for you, send it back.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-jade-100/85">
            Every order runs through Amazon, which means returns run through Amazon too,
            inside their standard window. No form to fill in with us, no conversation to
            have, no restocking fee invented at our end.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-xs text-jade-300/80">
            Amazon&rsquo;s current returns policy applies and is shown on the listing.
          </p>
        </div>
      </section>

      {/* Close */}
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <div className="absolute inset-0 text-jade-400">
          <JaaliPattern id="jaali-mask-close" opacity={0.12} />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-28">
          <LotusMark className="mx-auto h-10 w-10 text-jade-300" />
          <h2 className="mt-8 font-display text-4xl leading-tight font-light sm:text-5xl">
            Weight, texture, ritual.
            <span className="block italic text-jade-200">Nothing to plug in.</span>
          </h2>
          <div className="mt-10">
            <Cta tone="light" />
          </div>
          <CtaNote className="mt-4 text-jade-300/80" />
        </div>
      </section>

      {/* Sticky mobile CTA. Desktop has enough repeated CTAs already. */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-jade-700 bg-jade-900/95 px-4 py-3 backdrop-blur lg:hidden">
        <a
          href={amazonLinkFor("seed-eye-mask")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-xs uppercase tracking-[0.18em] text-jade-900"
        >
          Shop on Amazon
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      {/* Spacer so the sticky bar never covers footer content on mobile. */}
      <div className="h-20 lg:hidden" />
    </>
  );
}
