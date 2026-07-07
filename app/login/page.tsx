"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState, FormEvent } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function LoginPage() {
  const ref = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useGSAP(
    () => {
      gsap.fromTo(
        ".auth-el",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
      );
    },
    { scope: ref }
  );

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Demo only — wire up to real auth (NextAuth / Supabase) before launch.
    alert(`Demo sign-in for ${email || "(no email entered)"}`);
  }

  return (
    <main ref={ref} className="grid min-h-screen grid-cols-1 bg-cream md:grid-cols-2">
      <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-24">
        <Link href="/" className="auth-el font-display text-xl italic text-ink">
          Roster.
        </Link>

        <h1 className="auth-el mt-10 font-display text-3xl text-ink sm:text-4xl">
          Welcome back.
        </h1>
        <p className="auth-el mt-3 text-sm text-ink/60">
          Sign in to your wishlist, saved creators, and orders.
        </p>

        <form onSubmit={handleSubmit} className="mt-9 flex flex-col gap-4">
          <div className="auth-el">
            <label htmlFor="email" className="mb-1.5 block text-sm text-ink/70">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20"
            />
          </div>

          <div className="auth-el">
            <div className="mb-1.5 flex items-center justify-between">
              <label htmlFor="password" className="block text-sm text-ink/70">
                Password
              </label>
              <a href="/forgot-password" className="text-xs text-red hover:underline">
                Forgot?
              </a>
            </div>
            <input
              id="password"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;"
              className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/30 focus:border-red focus:outline-none focus:ring-2 focus:ring-red/20"
            />
          </div>

          <button
            type="submit"
            className="auth-el mt-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition hover:bg-red"
          >
            Sign in
          </button>

          <div className="auth-el flex items-center gap-3 py-1">
            <div className="h-px flex-1 bg-line" />
            <span className="text-xs text-ink/40">or</span>
            <div className="h-px flex-1 bg-line" />
          </div>

          <button
            type="button"
            className="auth-el flex items-center justify-center gap-2 rounded-full border border-line bg-paper px-6 py-3.5 text-sm font-medium text-ink transition hover:border-ink"
          >
            Continue with Google
          </button>
        </form>

        <p className="auth-el mt-8 text-sm text-ink/60">
          New to Roster?{" "}
          <Link href="/signup" className="font-medium text-red hover:underline">
            Create an account
          </Link>
        </p>
      </div>

      <div className="relative hidden md:block">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1000&q=80"
          alt=""
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-10 right-10">
          <p className="font-display text-2xl italic text-paper">
            &ldquo;Two taps from inspiration to checkout.&rdquo;
          </p>
        </div>
      </div>
    </main>
  );
}
