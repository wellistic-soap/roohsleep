import { products } from "@/lib/products";
import Image from "next/image";
import Link from "next/link";
import { amazonLinkFor, AMAZON_STOREFRONT, buildAmazonLink } from "@/lib/amazon";
import { BlockPrintRule, JaaliPattern } from "@/components/Motifs";

export const metadata = {
  title: "Products",
  description:
    "The Rooh collection: cooling pillowcase, silk pillowcase, and seed-filled eye mask.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jade-800 text-cream">
        <div className="absolute inset-0 text-jade-300">
          <JaaliPattern id="jaali-products" opacity={0.12} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_120%_at_20%_0%,rgba(122,138,94,.16),transparent_60%)]" />
        <div className="rooh-grain opacity-[0.07] mix-blend-overlay" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-jade-300">The collection</p>
          <h1 className="mt-6 max-w-2xl font-display text-5xl leading-tight font-light sm:text-6xl">
            Three pieces, one ritual.
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-jade-100/85">
            Everything is bought and checked out on Amazon, so shipping and returns work
            the way you already expect them to.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        {products.map((product, i) => (
          <article
            key={product.slug}
            className={`group grid items-center gap-12 border-b border-jade-200 py-20 lg:grid-cols-2 lg:gap-20 ${
              i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <div className="group/image rooh-arch relative aspect-[4/5] w-full max-w-sm overflow-hidden bg-sand-100 shadow-[0_34px_52px_-28px_rgba(22,33,30,.42)] transition-shadow duration-700 ease-[var(--ease-calm)] group-hover:shadow-[0_46px_64px_-28px_rgba(22,33,30,.5)]">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="object-cover transition-[opacity,transform] duration-[900ms] ease-[var(--ease-calm)] group-hover/image:scale-[1.045] group-hover/image:opacity-0"
                />
                <Image
                  src={product.hoverImage}
                  alt={product.hoverImageAlt}
                  fill
                  sizes="(min-width: 1024px) 384px, 100vw"
                  className="object-cover opacity-0 transition-[opacity,transform] duration-[900ms] ease-[var(--ease-calm)] group-hover/image:scale-[1.045] group-hover/image:opacity-100"
                />
              </div>
            </div>

            <div>
              <span className="text-[11px] tracking-[0.3em] text-jade-500">{product.order}</span>
              <h2 className="mt-3 font-display text-4xl text-jade-900 sm:text-5xl">
                {product.name}
              </h2>
              <p className="mt-2 text-base italic text-clay">{product.tagline}</p>

              <BlockPrintRule className="my-8 h-4 w-40 text-jade-300" />

              <p className="text-sm leading-relaxed text-jade-800/85">{product.description}</p>

              <dl className="mt-8 space-y-4 text-sm">
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-jade-500">Materials</dt>
                  <dd className="mt-1.5 text-jade-800/85">{product.materials}</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-[0.22em] text-jade-500">Made</dt>
                  <dd className="mt-1.5 text-jade-800/85">{product.origin}</dd>
                </div>
              </dl>

              {/* Price is managed on Amazon, so it is deliberately not shown here. */}
              <a
                href={amazonLinkFor(product.slug)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-jade-800 px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-sand-100 transition-colors hover:bg-jade-700"
              >
                Shop on Amazon
                <span aria-hidden="true">&rarr;</span>
              </a>
              <Link
                href={`/products/${product.slug}`}
                className="mt-10 ml-6 inline-block border-b border-jade-400 pb-1 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors hover:border-clay hover:text-clay"
              >
                Full details
              </Link>
              <p className="mt-3 text-xs text-jade-500">
                Opens Amazon in a new tab. Pricing and delivery shown there.
              </p>
            </div>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-3xl px-5 py-24 text-center sm:px-8">
        <h2 className="font-display text-3xl text-jade-900">Everything in one place</h2>
        <p className="mt-4 text-sm leading-relaxed text-jade-800/80">
          The full Rooh line lives on our Amazon storefront.
        </p>
        <a
          href={buildAmazonLink(AMAZON_STOREFRONT)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-block rounded-full border border-jade-700 px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors hover:bg-jade-800 hover:text-sand-100"
        >
          Visit the storefront
        </a>
      </section>
    </>
  );
}
