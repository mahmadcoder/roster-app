"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Nav() {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: -16 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );
  }, []);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-50 w-full border-b border-line bg-cream/90 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <div className="flex items-center gap-8">
          <Link href="/" className="font-display text-xl italic text-ink">
            Roster.
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/discover"
              className="text-sm text-ink/70 transition hover:text-ink"
            >
              Discover
            </Link>
            <Link
              href="/creators"
              className="text-sm text-ink/70 transition hover:text-ink"
            >
              Creators
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="/wishlist"
            className="hidden text-sm text-ink/70 transition hover:text-ink sm:block"
          >
            Wishlist
          </Link>
          <Link
            href="/login"
            className="text-sm text-ink/70 transition hover:text-ink"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-red px-5 py-2.5 text-sm font-medium text-paper transition hover:bg-redDeep"
          >
            Join Roster
          </Link>
        </div>
      </div>
    </header>
  );
}
