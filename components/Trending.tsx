import Image from "next/image";
import Reveal from "./Reveal";

const products = [
  { name: "Linen weekend set", price: "£128", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500&q=80" },
  { name: "Ceramic pour-over", price: "£64", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80" },
  { name: "Gold hoop pair", price: "£89", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80" },
  { name: "Overdyed tote", price: "£56", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80" },
  { name: "Barrier repair serum", price: "£38", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80" },
  { name: "Wool throw", price: "£95", img: "https://images.unsplash.com/photo-1580301762395-83c8b9e6d8c8?auto=format&fit=crop&w=500&q=80" },
];

export default function Trending() {
  return (
    <section className="border-t border-line bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-display text-sm italic text-red">
              Trending this week
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              What&rsquo;s getting clicked
            </h2>
          </div>
          <a
            href="/discover"
            className="hidden text-sm font-medium text-ink/70 transition hover:text-ink sm:block"
          >
            Browse all &rarr;
          </a>
        </Reveal>

        <Reveal
          as="div"
          stagger={0.08}
          className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6"
        >
          {products.map((p) => (
            <div key={p.name} className="group">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-line">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm text-ink">{p.name}</p>
              <p className="text-xs text-ink/50">{p.price}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
