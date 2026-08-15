# Rooh — Project Brief for Claude Code

## What we're building
A quick marketing-site mockup for **Rooh** (roohsleep.com), a new sleep-textiles brand.
Deploy target: **Vercel**. Framework: **Next.js (App Router) + Tailwind CSS**. Keep it lean, this is a fast mockup to validate look and feel, not a production e-commerce build.

This is **not** a Shopify-style checkout site. Every "Buy" or "Shop Now" button links out to the corresponding Amazon product listing (Amazon handles cart, checkout, payment, and fulfillment via FBA/MCF). The site's job is brand storytelling, product education, and sending qualified traffic to Amazon — tagged links matter (see Amazon Attribution section below).

---

## Brand

**Name:** Rooh
**Meaning:** "Rooh" (روح) means soul / spirit / breath of life in Urdu, Hindi, and Persian. Positioning angle: sleep for the soul, rest that restores you at a deeper level than just physical comfort.

**Origin story (real, not invented for marketing):** Founder has deep, direct manufacturing relationships in Sialkot, Pakistan and across South/Southeast Asia (Pakistan, Bangladesh, Indonesia, Vietnam, Thailand, China). Rooh's products are sourced through those direct relationships rather than anonymous trading companies — this is a genuine sourcing advantage, not a marketing claim, and the story should be told honestly (craftsmanship, direct relationships, textile heritage of the sourcing regions) without overstating it into something unverifiable.

**Tone:** Calm, grounded, a little poetic but not precious. Confident, not clinical. Think "quiet luxury" rather than hype or urgency. No em dashes in copy — use periods, commas, or semicolons instead.

**What Rooh is NOT:**
- Not a supplement or wellness-claims brand. No language implying medical, therapeutic, or health benefits (no "reduces inflammation," "clinically proven," "cures," etc.) — especially relevant for any eye mask / seed-filled product copy.
- Not a discount/hype brand. No countdown timers, no "LIMITED TIME" urgency banners, no aggressive sale-first homepage (contrast with Rest.com's promo-heavy approach — Rooh should feel calmer than that).
- Not positioning against named competitors anywhere in copy.

---

## Product line (for mockup purposes — placeholder content is fine, structure matters more than final copy)

Launch sequence, reflected in site structure/nav order:

1. **Cooling Pillowcase** — lead SKU, universal fit, low return risk, strongest early signal (low review count relative to revenue in market research)
2. **Cervical / Contour Pillow** — secondary, higher-consideration item (fit varies by sleep position, flag as such in any future sizing copy)
3. **Silk Pillowcase** — upsell tier, higher price point
4. **Seed-Filled Eye Mask** — differentiated/story-rich item, sourced seeds (basil/sabja or coriander, sourcing region TBD), positioned on texture/weight/ritual, never on internal-health claims

Treat these as a real product line with a shared visual language (same photography style, same packaging language, same model of "the Rooh sleep ritual"), not as four unrelated SKUs bolted together.

---

## Site structure (pages/sections)

- **Home** — hero (video or lifestyle photography, calm/dark-toned, similar mood to rest.com's hero video but less promo-heavy), short brand statement, product grid (4 SKUs), "Our Story" teaser section, trust/social proof strip
- **Shop / Product Grid** — all 4 products, each card links out to its Amazon listing (external link, opens new tab)
- **Product Detail (template, reused per SKU)** — hero product image, 2-3 sentence description, materials/sourcing callout, "Shop on Amazon" CTA (external), no price shown on-site if price will vary/be managed on Amazon (confirm with founder before deciding)
- **Our Story** — the real sourcing narrative: direct manufacturer relationships, Sialkot and South/Southeast Asian textile heritage, why "Rooh" (soul/spirit), founder's why. Written honestly, not embellished.
- **Journal / Learn (optional, stretch goal)** — short-form content on sleep, materials, sourcing — this is where any deeper "science of sleep" content lives, kept factual and non-medical
- **Footer** — Amazon storefront link, Instagram, contact email, minimal legal (privacy policy placeholder, terms placeholder)

No account creation, no cart, no newsletter popup with aggressive discount hooks. A simple email capture ("join the list") is fine if kept low-key.

---

## Design direction

Reference sites for inspiration (do not copy layouts wholesale, use for mood/quality bar):
- **myalaskabear.com** — soft, personal, story-driven brand feel
- **sojao.shop** — clean bedding/textile e-commerce layout, good product photography treatment (note: Sojao is a real competing bedding brand; use for layout/UX inspiration only, not for copy or visual identity)
- **rest.com** — polished DTC bedding site structure (nav, product grid, trust badges) — good structural reference, but Rooh should feel calmer/less promo-driven than Rest's discount-heavy homepage
- **breescape.com** — reference for tone/pacing

**Visual direction for this mockup:**
- Warm neutral palette (sand, clay, deep charcoal/ink, off-white) rather than cool clinical blues (avoid rest.com's navy/clinical feel)
- Generous whitespace, slow pacing, large lifestyle photography (placeholder images fine for mockup)
- Typography: one confident serif or high-quality sans for headlines, clean sans for body
- Subtle motion only (fades, gentle parallax) — nothing flashy or "startup SaaS" feeling

---

## Amazon linking (important, functional detail)

Every outbound "Shop" / "Buy on Amazon" link should be built as a simple configurable constant (e.g. `AMAZON_LISTINGS` object mapping SKU → URL) so links can be swapped easily once real ASINs exist. Structure the code so tagging parameters (for Amazon Attribution / Brand Referral Bonus tracking) can be appended to each URL later without a rebuild — e.g. a helper function `buildAmazonLink(baseUrl, tag)` rather than hardcoded raw URLs scattered through components.

Placeholder Amazon URLs are fine for the mockup; just keep them centralized and easy to find/replace.

---

## Tech notes

- Next.js App Router, Tailwind CSS, deploy to Vercel
- Keep dependencies minimal — this is a mockup, not a production storefront
- Static/placeholder content and stock-style imagery are fine everywhere; flag clearly in code comments or a `TODO_CONTENT.md` file where real copy/photography will need to replace placeholders before launch
- Mobile-first responsive layout (most traffic will likely be Instagram/social → mobile)
- No backend/CMS needed for this mockup phase — hardcoded content in components/config is fine

---

## Phase 2 — NOT in scope for this build (future roadmap, do not scaffold yet)

Rooh may later add a small line of sleep supplements (melatonin-free and melatonin-based sleep support, magnesium, calming botanicals), produced via a white-label print-on-demand partner (e.g. Supliful) rather than in-house manufacturing. This avoids Rooh taking on FDA facility registration and manufacturing directly.

**This does not remove Rooh's compliance responsibility.** Rooh is the brand on the label and remains responsible for any claims made in its own marketing, regardless of who manufactures the product. If/when this phase is built:
- No unsubstantiated health or medical claims in any product copy, marketing page, or ad ("reduces stress," "cures insomnia," "clinically proven," etc.) — same guardrail as the textile line, applies equally here, arguably more strictly given the ingested-product category
- Any claims must be reviewed against what the manufacturing partner can actually substantiate before publishing
- This is a distinct, lower-differentiation experiment (white-label formulas available to any seller on the same platform) rather than an extension of Rooh's core sourcing advantage (direct manufacturer relationships in Sialkot / South & Southeast Asia). Keep it visually and structurally separate from the core textile line until/unless it proves out — do not blend supplement SKUs into the main product grid or "Our Story" sourcing narrative, since that story is specifically about textile manufacturing relationships and would be inaccurate if applied to a white-labeled supplement.

**Action for now:** do not build product pages, nav items, or components for supplements yet. This section exists so future work (by Claude Code or otherwise) knows the constraint before scaffolding anything in this category.

---

## Copy guardrails (apply to any text Claude Code generates as placeholder copy)

- No health, medical, or therapeutic claims (no "reduces inflammation," "clinically proven," "cures insomnia," etc.)
- No em dashes — use commas, periods, semicolons, or parentheses
- No fabricated statistics, review counts, or customer quotes — use clearly-marked placeholder text (e.g. "[placeholder testimonial]") rather than inventing fake social proof
- Keep sourcing-story language honest and specific (real regions, real craft traditions) rather than vague "ethically sourced" marketing-speak
