import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { storefronts } from "@/lib/data";

export default function LiveStorefronts() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal className="mb-12 flex items-end justify-between">
          <div>
            <p className="font-display text-sm italic text-red">Live now</p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Storefronts open today
            </h2>
          </div>
          <a
            href="/creators"
            className="hidden text-sm font-medium text-ink/70 transition hover:text-ink sm:block"
          >
            All creators &rarr;
          </a>
        </Reveal>

        <Reveal
          as="div"
          stagger={0.12}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {storefronts.map((s) => (
            <Link
              key={s.handle}
              href={s.href ?? "/creators"}
              className="group overflow-hidden rounded-xl border border-line bg-paper"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={s.img}
                  alt={s.handle}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <p className="font-display italic text-ink">{s.handle}</p>
                <p className="mt-1 text-xs uppercase tracking-wide text-ink/50">
                  {s.tag}
                </p>
              </div>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

