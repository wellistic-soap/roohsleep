import { notFound } from "next/navigation";
import { products, getProduct } from "@/lib/products";
import { getSalesCopy } from "@/lib/salesCopy";
import SalesPage from "@/components/SalesPage";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  const copy = getSalesCopy(slug);
  if (!product || !copy) return {};

  return {
    title: product.name,
    description: copy.sub,
    openGraph: {
      title: `${product.name} | Rooh`,
      description: copy.sub,
      images: [{ url: product.image }],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  const product = getProduct(slug);
  const copy = getSalesCopy(slug);
  if (!product || !copy) notFound();

  return <SalesPage product={product} copy={copy} />;
}
