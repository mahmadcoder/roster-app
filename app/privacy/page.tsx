import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Roster",
  description: "How we handle your data",
};

export default function Page() {
  return (
    <>
      <Nav />
      <main className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center md:px-10">
        <p className="font-display text-sm italic text-red">Coming soon</p>
        <h1 className="mt-4 font-display text-4xl text-ink sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-md text-base text-ink/60">
          How we handle your data. This page is under construction.
        </p>
        <a
          href="/"
          className="mt-8 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition hover:bg-red"
        >
          Back to home
        </a>
      </main>
      <Footer />
    </>
  );
}
