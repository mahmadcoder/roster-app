"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Counter from "./Counter";
import { heroContent, heroStats } from "@/lib/data";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 28 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.35"
        )
        .fromTo(
          ".hero-sub",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          "-=0.4"
        )
        .fromTo(
          ".hero-image",
          { opacity: 0, scale: 0.94 },
          { opacity: 1, scale: 1, duration: 1 },
          "-=0.6"
        )
        .fromTo(
          ".hero-stat",
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          "-=0.5"
        );
    },
    { scope: ref }
  );

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 py-20 md:grid-cols-2 md:px-10 md:py-28">
        <div>
          <p className="hero-eyebrow font-display text-sm italic text-red">
            {heroContent.eyebrow}
          </p>
          <h1 className="hero-title mt-5 font-display text-4xl leading-[1.08] text-ink sm:text-5xl md:text-6xl">
            {heroContent.heading}
          </h1>
          <p className="hero-sub mt-6 max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
            {heroContent.subtext}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={heroContent.ctaPrimary.href}
              className="hero-cta rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition hover:bg-red"
            >
              {heroContent.ctaPrimary.label}
            </a>
            <a
              href={heroContent.ctaSecondary.href}
              className="hero-cta rounded-full border border-line px-7 py-3.5 text-sm font-medium text-ink transition hover:border-red hover:text-red"
            >
              {heroContent.ctaSecondary.label}
            </a>
          </div>

          <div className="mt-12 flex gap-10">
            {heroStats.map((stat) => (
              <div key={stat.label} className="hero-stat">
                <p className="font-display text-2xl text-ink">
                  <Counter to={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-xs uppercase tracking-wide text-ink/50">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-image relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl border border-line shadow-2xl">
          <Image
            src={heroContent.image.src}
            alt={heroContent.image.alt}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6">
            <p className="text-xs uppercase tracking-wide text-paper/70">
              Live now
            </p>
            <p className="font-display text-lg italic text-paper">
              {heroContent.image.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

