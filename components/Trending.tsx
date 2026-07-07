import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { products } from "@/lib/data";

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
            <Link
              key={p.name}
              href={p.href ?? "/discover"}
              className="group"
            >
              <div className="relative aspect-square w-full overflow-hidden rounded-lg border border-line">
                <Image
                  src={p.img}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-2 text-sm text-ink">{p.name}</p>
              <p className="text-xs text-ink/50">&pound;{p.price}</p>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

