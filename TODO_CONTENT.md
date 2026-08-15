# TODO_CONTENT — what still needs real content before launch

Everything below is placeholder in the current mockup.

## Amazon links (functional)
- [lib/amazon.js](lib/amazon.js) — `AMAZON_LISTINGS` holds one placeholder URL per SKU, plus `AMAZON_STOREFRONT`. Swap in real ASIN URLs here and nothing else needs touching.
- Attribution / Brand Referral Bonus tag: set `NEXT_PUBLIC_AMAZON_TAG` in Vercel env vars. `buildAmazonLink()` appends it to every outbound link, so no code change is needed later.

## Imagery
Generation prompts for every slot below are in [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md).

There is no photography in the mockup. Every image slot is an arch-shaped placeholder (`ArchPlaceholder` in [components/Motifs.js](components/Motifs.js)) filled with a jaali lattice pattern.
- Home hero: intended for a calm, dark-toned lifestyle video or still.
- Product cards and product rows: one hero image per SKU, shared photography style across all three.
- Our Story: workshop / Sialkot floor imagery, and optionally a founder portrait.

## Copy
- [lib/products.js](lib/products.js) — all three product descriptions, materials lines, and taglines are written to the brand guardrails but are not founder-approved.
- Seed eye mask: seed type and sourcing region still marked TBD. Keep copy on texture, weight, and ritual only. No internal-health or therapeutic language.
- Trust strip on the homepage carries a `[placeholder testimonial]` marker. Do not replace with invented quotes; wait for real reviews.

## Seed eye mask sales page (`/products/seed-eye-mask`)
Long-form direct response layout. Placeholders that must be resolved before launch:
- **Proof strip under the hero** is deliberately empty, carrying a bracketed note instead of a star rating and review count. Fill only from real Amazon reviews.
- **Seed type and sourcing region** are marked TBD in the FAQ. Name both there and on the label.
- **Weight in grams** is marked TBD in the FAQ; add once production samples are final.
- Claims held back on purpose: nothing about what the mask does to your body, no "blackout" claim, and an explicit "do not microwave" answer, since a seed-filled mask invites that assumption.
- Comparison table names construction categories (flat fabric, moulded cup) rather than competing brands. Keep it that way.

## Pricing
No prices are shown anywhere on the site, since pricing is managed on Amazon. Confirm with the founder whether that stays true at launch.

## Footer / legal
- Instagram link points at instagram.com, needs the real handle.
- `hello@roohsleep.com` is assumed, confirm it exists.
- Privacy and Terms links are `#` placeholders.
- The "join the list" form posts nowhere. Wire to an email provider or remove.

## Not built (out of scope for the 3-page mockup)
- Per-SKU product detail pages. The products page currently carries the full detail for all four in one scroll.
- Journal / Learn section.
