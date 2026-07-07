// lib/data.ts  -  Central content file for Roster
// Edit here to update any text, price, image, or handle on the site.

export type Product = {
  name: string;
  price: string;
  img: string;
  href?: string;
};

export type Storefront = {
  handle: string;
  tag: string;
  img: string;
  href?: string;
};

export type HeroStat = {
  value: number;
  suffix?: string;
  label: string;
};

export const heroContent = {
  eyebrow: "Issue No 01 - Summer 2026",
  heading: "The things our favourite people actually use.",
  subtext: "A curated marketplace of creator-led storefronts. Two taps from inspiration to checkout on the brand own site.",
  ctaPrimary: { label: "Enter the discovery feed", href: "/discover" },
  ctaSecondary: { label: "Apply as a creator", href: "/apply" },
  image: {
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=900&q=80",
    alt: "Editorial storefront preview",
    caption: "@studio.editorial",
  },
};

export const heroStats: HeroStat[] = [
  { value: 340, suffix: "+", label: "Vetted creators" },
  { value: 12, suffix: "k+", label: "Products indexed" },
  { value: 4, label: "Categories live" },
];

export const products: Product[] = [
  { name: "Linen weekend set", price: "128", img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=500&q=80", href: "/discover" },
  { name: "Ceramic pour-over", price: "64", img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=500&q=80", href: "/discover" },
  { name: "Gold hoop pair", price: "89", img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=500&q=80", href: "/discover" },
  { name: "Overdyed tote", price: "56", img: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=500&q=80", href: "/discover" },
  { name: "Barrier repair serum", price: "38", img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=500&q=80", href: "/discover" },
  { name: "Wool throw", price: "95", img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80", href: "/discover" },
];

export const storefronts: Storefront[] = [
  { handle: "@studio.editorial", tag: "Home & Living", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=700&q=80", href: "/creators" },
  { handle: "@lunaskin", tag: "Beauty", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=700&q=80", href: "/creators" },
  { handle: "@formandfold", tag: "Fashion", img: "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=700&q=80", href: "/creators" },
  { handle: "@rareandcut", tag: "Jewellery", img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=700&q=80", href: "/creators" },
];
