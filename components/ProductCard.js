import { amazonLinkFor } from "@/lib/amazon";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <article className="group flex flex-col">
      <div className="group/image rooh-arch relative aspect-[3/4] w-full overflow-hidden bg-sand-100 transition-transform duration-700 ease-[var(--ease-calm)] group-hover:-translate-y-1">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 100vw"
          className="object-cover transition-opacity duration-500 ease-[var(--ease-calm)] group-hover/image:opacity-0"
        />
        <Image
          src={product.hoverImage}
          alt={product.hoverImageAlt}
          fill
          sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 100vw"
          className="object-cover opacity-0 transition-opacity duration-500 ease-[var(--ease-calm)] group-hover/image:opacity-100"
        />
      </div>

      <div className="mt-6 flex flex-1 flex-col">
        <span className="text-[11px] tracking-[0.28em] text-jade-500">{product.order}</span>
        <h3 className="mt-2 font-display text-2xl text-jade-900">{product.name}</h3>
        <p className="mt-1 text-sm italic text-clay">{product.tagline}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-jade-800/85">
          {product.description}
        </p>

        <a
          href={amazonLinkFor(product.slug)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex w-fit items-center gap-2 border-b border-jade-400 pb-1 text-xs uppercase tracking-[0.18em] text-jade-800 transition-colors hover:border-clay hover:text-clay"
        >
          Shop on Amazon
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </article>
  );
}
