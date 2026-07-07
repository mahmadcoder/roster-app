import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line py-12">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <p className="font-display text-lg italic text-ink">Roster.</p>
            <p className="mt-2 text-sm text-ink/60">
              A curated marketplace of creator-led storefronts.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
              Shop
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/70">
              <li><Link href="/discover" className="hover:text-ink">Discover</Link></li>
              <li><Link href="/creators" className="hover:text-ink">Creators</Link></li>
              <li><Link href="/wishlist" className="hover:text-ink">Wishlist</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
              Creators
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/70">
              <li><Link href="/creator-dashboard" className="hover:text-ink">Dashboard</Link></li>
              <li><Link href="/apply" className="hover:text-ink">Apply</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-ink/50">
              Roster
            </p>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-ink/70">
              <li><Link href="/privacy" className="hover:text-ink">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-ink">Terms</Link></li>
            </ul>
          </div>
        </div>
        <p className="mt-10 text-xs text-ink/50">
          &copy; 2026 Roster. Curated in London.
        </p>
      </div>
    </footer>
  );
}
