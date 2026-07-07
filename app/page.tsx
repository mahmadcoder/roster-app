import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CategoryStrip from "@/components/CategoryStrip";
import LiveStorefronts from "@/components/LiveStorefronts";
import Trending from "@/components/Trending";
import CreatorCta from "@/components/CreatorCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-cream">
      <Nav />
      <Hero />
      <CategoryStrip />
      <LiveStorefronts />
      <Trending />
      <CreatorCta />
      <Footer />
    </main>
  );
}
