import Link from "next/link";
import Image from "next/image";
import { BlockPrintRule, LotusMark } from "@/components/Motifs";

export const metadata = {
  title: "Our Story",
  description:
    "Rooh means soul. The brand grew out of direct manufacturing relationships in Pakistan and across South and Southeast Asia.",
};

const regions = [
  { place: "Pakistan", note: "Cut and sew, and the workshops we know best." },
  { place: "Bangladesh", note: "Cotton knits and jersey weight goods." },
  { place: "Vietnam", note: "Foam and structured pillow construction." },
  { place: "Indonesia and Thailand", note: "Natural fills and finishing." },
  { place: "China", note: "Mulberry silk weaving." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <Image
          src="/images/about-hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-jade-900/35" />
        <div className="rooh-glow pointer-events-none absolute inset-0 bg-[radial-gradient(120%_90%_at_78%_60%,rgba(212,180,120,.28)_0%,rgba(212,180,120,0)_55%)]" />
        <div className="rooh-grain opacity-[0.06] mix-blend-overlay" />
        <div className="relative mx-auto max-w-6xl px-5 py-28 sm:px-8 sm:py-32">
          <LotusMark className="h-10 w-10 text-jade-300" />
          <h1 className="mt-8 max-w-3xl font-display text-5xl leading-[1.08] font-light sm:text-6xl">
            The word came first.
            <span className="block italic text-jade-200">The line came after.</span>
          </h1>
        </div>
      </section>

      {/* Meaning of the name */}
      <section className="mx-auto max-w-3xl px-5 py-24 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-jade-500">Why Rooh</p>
        <p className="mt-8 font-display text-2xl leading-relaxed text-jade-900 sm:text-3xl">
          روح
        </p>
        <p className="mt-6 text-sm leading-relaxed text-jade-800/85">
          Rooh means soul, or spirit, or the breath of life, depending on which of the
          three languages you hear it in: Urdu, Hindi, Persian. It is a word people use
          without ceremony, in ordinary conversation, about the part of a person that
          matters most.
        </p>
        <p className="mt-5 text-sm leading-relaxed text-jade-800/85">
          That is the register we wanted for a sleep brand. Not performance, not
          optimisation. Rest as something that restores you, in the way the word suggests.
        </p>
      </section>

      {/* The sourcing story */}
      <section className="relative overflow-hidden bg-sand-100">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(60,90,80,.05)_0_1px,transparent_1px_6px),repeating-linear-gradient(0deg,rgba(60,90,80,.05)_0_1px,transparent_1px_6px)]" />
        <div className="rooh-grain opacity-[0.05] mix-blend-multiply" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div className="rooh-arch relative aspect-[4/5] w-full max-w-md overflow-hidden bg-sand-200 shadow-[0_40px_60px_-32px_rgba(22,33,30,.45)]">
            <Image
              src="/images/about-story.png"
              alt="Late afternoon jaali lattice shadows across a plaster wall and wooden floor"
              fill
              sizes="(min-width: 1024px) 448px, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-jade-500">The founder&rsquo;s why</p>
            <h2 className="mt-6 font-display text-4xl leading-tight text-jade-900 sm:text-5xl">
              Bought direct, not brokered.
            </h2>
            <p className="mt-7 text-sm leading-relaxed text-jade-800/85">
              Most brands at this price point buy through a trading company. An order goes
              out, a container comes back, and nobody on the brand side has met the people
              who made the goods or seen the floor they came off.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-jade-800/85">
              Rooh started from the other end. The manufacturing relationships came first,
              built over years of working directly with mills and workshops in Pakistan and
              across the region. The brand is what got built on top of them.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-jade-800/85">
              It is a practical advantage more than a romantic one. It means shorter
              revision cycles on a sample, honest answers about what a material can and
              cannot do, and a straight answer when someone asks where a piece was made.
            </p>
          </div>
        </div>
      </section>

      {/* Where things are made */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <div className="text-center">
          <BlockPrintRule className="mx-auto h-4 w-48 text-jade-400" />
          <h2 className="mt-8 font-display text-4xl text-jade-900">Where things are made</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-jade-800/80">
            Different regions are good at different things. We go where the craft actually
            lives rather than putting everything through one factory.
          </p>
        </div>

        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm bg-jade-200 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r) => (
            <li key={r.place} className="bg-cream p-8">
              <h3 className="font-display text-2xl text-jade-900">{r.place}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-jade-800/80">{r.note}</p>
            </li>
          ))}
          <li className="flex items-center bg-jade-800 p-8 text-sand-100">
            <p className="text-sm leading-relaxed">
              Every piece carries its origin on the page and on the label. No vague claims,
              no unnamed regions.
            </p>
          </li>
        </ul>
      </section>

      {/* Textile heritage */}
      <section className="relative overflow-hidden bg-jade-900 text-cream">
        <div className="rooh-grain opacity-[0.07] mix-blend-overlay" />
        <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 sm:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-jade-300">Heritage</p>
          <p className="mt-8 font-display text-3xl leading-relaxed sm:text-4xl">
            These regions have been making cloth for a very long time. We are a small,
            recent addition to that, and we would rather say so plainly.
          </p>
          <p className="mt-8 text-sm leading-relaxed text-jade-100/80">
            Block printing, jaali screens, hand finishing; the visual language of Rooh
            borrows from the places the goods come from, because that is where they come
            from. It is not a theme applied afterwards.
          </p>
          <Link
            href="/products"
            className="mt-12 inline-block rounded-full bg-cream px-7 py-3.5 text-xs uppercase tracking-[0.18em] text-jade-900 transition-colors hover:bg-sand-200"
          >
            See the collection
          </Link>
        </div>
      </section>
    </>
  );
}
