import Image from "next/image";

/**
 * Arch-framed product shot that crossfades to a lifestyle image on hover.
 *
 * The swap itself lives in globals.css under .rooh-swap, scoped to this
 * wrapper so hovering the surrounding card text does not trigger it, and
 * gated behind (hover: hover) so touch devices never latch a stuck state.
 *
 * The hover layer is alt="" on purpose. It is a second view of the same
 * product, so its own alt text would make screen readers announce the item
 * twice. The meaningful description stays on the base image.
 */
export default function ProductImage({
  product,
  ratio = "aspect-[3/4]",
  shadow = "",
  sizes = "(min-width: 1024px) 480px, 100vw",
  priority = false,
  className = "",
}) {
  return (
    <div
      className={`rooh-swap rooh-arch relative overflow-hidden bg-sand-100 ${ratio} ${shadow} transition-shadow duration-700 ease-[var(--ease-calm)] ${className}`}
    >
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        priority={priority}
        sizes={sizes}
        className="rooh-swap-base object-cover"
      />

      {product.hoverImage && (
        <Image
          src={product.hoverImage}
          alt=""
          aria-hidden="true"
          fill
          sizes={sizes}
          className="rooh-swap-top object-cover"
        />
      )}
    </div>
  );
}
