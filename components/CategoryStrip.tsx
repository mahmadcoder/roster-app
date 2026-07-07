import Reveal from "./Reveal";

const categories = [
  "Vetted creators",
  "Editorial storefronts",
  "Direct-to-brand checkout",
  "Live drops",
  "Pure affiliate",
  "Hand-picked",
];

export default function CategoryStrip() {
  return (
    <section className="border-y border-line bg-paper py-6">
      <Reveal
        as="div"
        stagger={0.06}
        className="mx-auto flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-3 px-6 md:px-10"
      >
        {categories.map((c) => (
          <span
            key={c}
            className="text-xs font-medium uppercase tracking-[0.15em] text-ink/50"
          >
            {c}
          </span>
        ))}
      </Reveal>
    </section>
  );
}
