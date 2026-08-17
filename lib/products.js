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
    // Swaps in on hover over the product image.
    hoverImage: "/images/cooling-pillowcase-lifestyle.png",
    hoverImageAlt: "Couple sleeping on deep jade green cooling pillowcases",
    order: "01",
  },
  {
    slug: "cooling-sheet-set",
    name: "Cooling Sheet Set",
    tagline: "The foundation of the whole bed",
    description:
      "A breathable Tencel and bamboo weave that regulates temperature through the night. Fits deep-pocket mattresses and stays soft wash after wash. The layer everything else in the collection sits on.",
    // TODO_CONTENT: confirm the fibre split, the mill, and the country of origin.
    // Origin is left explicit rather than guessed, since naming it honestly is the
    // whole point of the sourcing story.
    materials: "Tencel lyocell and bamboo-derived viscose blend.",
    origin: "Origin to be confirmed",
    accent: "sage",
    // TODO_CONTENT: placeholder image. The design file reuses the hero shot
    // because no sheet set photography exists yet. See IMAGE_PROMPTS.md.
    image: "/images/home-hero.png",
    imageAlt: "Sand-coloured bedding in low morning light",
    // Swaps in on hover over the product image.
    hoverImage: "/images/cooling-sheet-set-couple-v2.png",
    hoverImageAlt: "Couple sleeping beneath a deep jade cooling sheet set",
    order: "02",
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
    // Swaps in on hover over the product image.
    hoverImage: "/images/silk-pillowcase-lifestyle.png",
    hoverImageAlt: "Man sleeping on a muted aged-brass silk pillowcase",
    order: "03",
  },
  {
    slug: "seed-eye-mask",
    name: "Seed-Filled Eye Mask",
    tagline: "Weight, texture, ritual",
    description:
      "Filled with whole seeds that shift and settle with the shape of your face. The weight is gentle and even; the sound is soft. Made to be part of winding down.",
    materials: "Cotton shell with whole seed fill. Sourcing region being finalised.",
    origin: "Sewn in Pakistan",
    accent: "clay",
    image: "/images/seed-eye-mask.png",
    imageAlt: "Natural cotton seed-filled eye mask with jade green edging",
    // Swaps in on hover over the product image.
    hoverImage: "/images/seed-eye-mask-lifestyle.png",
    hoverImageAlt: "Woman resting in bed wearing the seed-filled eye mask",
    order: "04",
  },
];

// Every SKU has a long-form detail page at /products/<slug>.
export function productHref(slug) {
  return `/products/${slug}`;
}

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
