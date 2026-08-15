import Link from "next/link";
import Image from "next/image";
import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import { BlockPrintRule } from "@/components/Motifs";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <Image
          src="/images/home-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-jade-900/80 via-jade-900/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-jade-900 to-transparent" />

        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-36 lg:py-44">
          <div className="rooh-rise max-w-2xl">
            <p className="text-xs uppercase tracking-[0.34em] text-jade-300">
              Rooh &middot; روح &middot; soul
            </p>
            <h1 className="mt-7 font-display text-5xl leading-[1.05] font-light sm:text-6xl lg:text-7xl">
              Rest that reaches
              <span className="block italic text-jade-200">deeper than comfort.</span>
            </h1>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-jade-100/85">
              Sleep textiles made through direct relationships with the mills and
              workshops of Sialkot and across South and Southeast Asia. Fewer things,
              made properly, for the hours that put you back together.
            </p>
            <div className="mt-11 flex flex-wrap items-center gap-4">
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
      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
        <BlockPrintRule className="mx-auto h-4 w-48 text-jade-400" />
        <p className="mt-10 font-display text-2xl leading-relaxed text-jade-900 sm:text-3xl">
          In Urdu, Hindi, and Persian, rooh means soul; the breath of life. We named the
          brand for the part of you that rest is actually for.
        </p>
        <p className="mt-8 text-sm leading-relaxed text-jade-800/80">
          Everything we make begins with a material and a maker, not a trend. We buy
          direct, we visit the floor, and we keep the line small enough to know every
          seam in it.
        </p>
      </section>

      {/* Product grid */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-jade-200 pb-6">
          <h2 className="font-display text-4xl text-jade-900">The collection</h2>
          <Link
            href="/products"
            className="text-xs uppercase tracking-[0.18em] text-jade-700 hover:text-clay"
          >
            All products
          </Link>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Story teaser */}
      <section className="mt-32 bg-sand-100">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:py-32">
          <div className="rooh-arch relative aspect-[4/5] w-full max-w-md overflow-hidden bg-sand-200">
            <Image
              src="/images/home-story.png"
              alt="Folded jade, muslin, linen, and clay textiles with cotton thread cones"
              fill
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-jade-500">Our story</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
              We know the floor the cloth comes off.
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-jade-800/85">
              Rooh grew out of manufacturing relationships built over years in Sialkot and
              across Pakistan, Bangladesh, Indonesia, Vietnam, Thailand, and China. Not
              through a trading company, not through a sourcing agent. Through people we
              call directly.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-jade-800/85">
              That is why the line is short and why we can say where each piece is made
              without checking with anyone.
            </p>
            <Link
              href="/about"
              className="mt-9 inline-block border-b border-jade-400 pb-1 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors hover:border-clay hover:text-clay"
            >
              Read the full story
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip. TODO_CONTENT: replace with verified proof points once available. */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="grid gap-12 border-y border-jade-200 py-14 sm:grid-cols-3">
          {[
            {
              title: "Direct sourcing",
              body: "Bought from the mills and workshops themselves, with no middle layer between us and the makers.",
            },
            {
              title: "Fulfilled by Amazon",
              body: "Ordering, shipping, and returns are handled through Amazon, so delivery is fast and familiar.",
            },
            {
              title: "A short line",
              body: "Four pieces, one visual language, built to sit together on the same bed.",
            },
          ].map((item) => (
            <div key={item.title}>
              <h3 className="font-display text-xl text-jade-900">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-jade-800/80">{item.body}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-xs tracking-wide text-jade-500">
          [placeholder testimonial slot: add real customer quotes once reviews exist]
        </p>
      </section>
    </>
  );
}
