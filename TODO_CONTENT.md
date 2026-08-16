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
- Our Story: workshop floor imagery, and optionally a founder portrait.
- Lifestyle shots (`*-lifestyle.png`) crossfade in on hover over any product image, wired through `hoverImage` in [lib/products.js](lib/products.js). They are AI-generated people, so confirm they are acceptable to show as brand imagery before launch, and note the swap only fires on pointer devices.

## Copy
- [lib/products.js](lib/products.js) — all three product descriptions, materials lines, and taglines are written to the brand guardrails but are not founder-approved.
- Seed eye mask: seed type and sourcing region still marked TBD. Keep copy on texture, weight, and ritual only. No internal-health or therapeutic language.
- Trust strip on the homepage carries a `[placeholder testimonial]` marker. Do not replace with invented quotes; wait for real reviews.

## Product sales pages (`/products/<slug>`)
All three SKUs now have a long-form direct response page, sharing one template
([components/SalesPage.js](components/SalesPage.js)) driven by per-product copy in
[lib/salesCopy.js](lib/salesCopy.js). Placeholders to resolve before launch:
- **Proof strips** on all three are deliberately empty, carrying a bracketed note instead of a star rating and review count. Fill only from real Amazon reviews.
- **Cooling pillowcase**: exact dimensions and the launch colourway list are marked TBD in the FAQ.
- **Cooling sheet set**: this SKU is the least resolved. It has no photography (the homepage and its detail page both reuse `home-hero.png`, exactly as the design file does), no confirmed origin (`Origin to be confirmed` renders on the products page), no fibre split, no sizes, and no confirmed box contents. Prompt 3 in [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md) covers the missing photograph.
- **Cooling sheet set, wording to review**: the homepage description is carried verbatim from the design file and says the weave "regulates temperature through the night", which is a stronger performance claim than anything else on the site makes. Its detail page deliberately does not repeat it. Decide which register you want and make the two consistent.
- **Bamboo labelling**: "bamboo" fabric is nearly always viscose or lyocell made from bamboo pulp, and regulators expect it described that way. The detail page FAQ answers this honestly and openly; make sure the Amazon listing and any packaging match that description.
- **Silk pillowcase**: copy describes silk's low-friction surface only. Do not add hair or skin outcome claims without substantiation.
- **Seed eye mask**: seed type, sourcing region, and weight in grams are marked TBD in the FAQ.
- Claims held back on purpose across all three: nothing about what any product does to your body, no blackout claim on the mask, and an explicit "do not microwave" answer.
- Comparison tables name construction categories (sateen, microfibre, polyester satin, flat fabric, moulded cup) rather than competing brands. Keep it that way.

## Brand wordmark
[components/Wordmark.js](components/Wordmark.js) is the traced hand-drawn logotype from
the Claude Design project (`uploads/rooh_sleeping_eyes.svg`), where the two "o"
characters are closed sleeping eyes. It replaced the improvised lotus lockup in the nav
and footer.
- The design project also contains `uploads/rooh_exact_match_vector.svg`, an alternative trace that has not been used. Confirm which is the approved mark.
- The traced path is a single filled shape, so it cannot be recoloured part by part.

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
