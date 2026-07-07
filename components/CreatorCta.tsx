import Reveal from "./Reveal";

export default function CreatorCta() {
  return (
    <section className="py-24 md:py-32">
      <Reveal className="mx-auto max-w-4xl rounded-2xl border border-line bg-ink px-8 py-16 text-center md:px-16">
        <p className="font-display text-sm italic text-red">For creators</p>
        <h2 className="mt-4 font-display text-3xl text-paper sm:text-4xl">
          Turn your taste into a storefront.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-paper/70">
          Apply once. We vet every creator by hand. Your picks, your voice,
          direct-to-brand checkout &mdash; no dropshipping, no middlemen.
        </p>
        <a
          href="/apply"
          className="mt-8 inline-block rounded-full bg-red px-8 py-3.5 text-sm font-medium text-paper transition hover:bg-paper hover:text-ink"
        >
          Apply as a creator
        </a>
      </Reveal>
    </section>
  );
}
