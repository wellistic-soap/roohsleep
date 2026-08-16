// TODO_CONTENT: placeholder copy. Replace with founder-approved product copy
// and real photography before launch. Order reflects the launch sequence.

export const products = [
  {
    slug: "cooling-pillowcase",
    name: "Cooling Pillowcase",
    tagline: "The one that starts the ritual",
    description:
      "A smooth, breathable weave that stays cool against the skin through the night. Universal fit, so it works on the pillow you already sleep on.",
    materials: "Long-staple cotton blend, woven and finished by a mill we work with directly.",
    origin: "Woven in Pakistan",
    accent: "jade",
    image: "/images/cooling-pillowcase.png",
    imageAlt: "Deep jade green cooling pillowcase on sand-coloured linen",
    hoverImage: "/images/cooling-pillowcase-lifestyle.png",
    hoverImageAlt: "Couple sleeping on deep jade green cooling pillowcases",
    order: "01",
  },
  {
    slug: "silk-pillowcase",
    name: "Silk Pillowcase",
    tagline: "Quiet luxury, literally",
    description:
      "Mulberry silk with a soft lustre and a cool hand. It slips rather than pulls, and it feels like an occasion every night.",
    materials: "22 momme mulberry silk, hidden closure.",
    origin: "Woven in China, finished in Pakistan",
    accent: "brass",
    image: "/images/silk-pillowcase.png",
    imageAlt: "Muted aged-brass silk pillowcase on natural linen",
    hoverImage: "/images/silk-pillowcase-lifestyle.png",
    hoverImageAlt: "Man sleeping on a muted aged-brass silk pillowcase",
    order: "02",
  },
  {
    slug: "seed-eye-mask",
    name: "Seed-Filled Eye Mask",
    tagline: "Weight, texture, ritual",
    description:
      "Filled with whole seeds that shift and settle with the shape of your face. The weight is gentle and even; the sound is soft. Made to be part of winding down.",
    materials: "Cotton shell with whole seed fill. Sourcing region being finalised.",
    origin: "Sewn in Sialkot, Pakistan",
    accent: "clay",
    image: "/images/seed-eye-mask.png",
    imageAlt: "Natural cotton seed-filled eye mask with jade green edging",
    hoverImage: "/images/seed-eye-mask-lifestyle.png",
    hoverImageAlt: "Woman resting in bed wearing the seed-filled eye mask",
    order: "03",
  },
];

// Every SKU has a long-form detail page at /products/<slug>.
export function productHref(slug) {
  return `/products/${slug}`;
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
