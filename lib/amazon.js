// Central place for every outbound Amazon link.
// TODO_CONTENT: replace placeholder URLs with real ASIN listings before launch.

export const AMAZON_STOREFRONT = "https://www.amazon.com/stores/page/PLACEHOLDER-STOREFRONT";

export const AMAZON_LISTINGS = {
  "cooling-pillowcase": "https://www.amazon.com/dp/PLACEHOLDER1",
  "silk-pillowcase": "https://www.amazon.com/dp/PLACEHOLDER2",
  "seed-eye-mask": "https://www.amazon.com/dp/PLACEHOLDER3",
};

// Attribution / Brand Referral Bonus tags get appended here, so no rebuild of
// components is needed once real tracking parameters exist.
export const AMAZON_TAG = process.env.NEXT_PUBLIC_AMAZON_TAG || "";

export function buildAmazonLink(baseUrl, tag = AMAZON_TAG) {
  if (!baseUrl) return "#";
  if (!tag) return baseUrl;
  const joiner = baseUrl.includes("?") ? "&" : "?";
  return `${baseUrl}${joiner}tag=${encodeURIComponent(tag)}`;
}

export function amazonLinkFor(slug, tag = AMAZON_TAG) {
  return buildAmazonLink(AMAZON_LISTINGS[slug], tag);
}
