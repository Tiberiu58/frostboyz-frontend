import Header from "@/components/Header";
import Countdown from "@/components/Countdown";
import ProductCard from "@/components/ProductCard";

type Product = {
  id: number;
  name: string;
  price: number;
  img: string;
  badge?: string;
};

async function getProducts(): Promise<Product[]> {
  // Fetch direct din backendul Flask (via rewrite sau env)
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE ?? "https://frostboyz-site.onrender.com"}/api/products`,
    { cache: "no-store" }
  );
  return res.ok ? await res.json() : [];
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main>
      <Header />

      {/* HERO */}
      <section className="px-6 md:px-10 pt-16 pb-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-widest uppercase text-cyan-300">
          FrostBoyz
        </h1>
        <p className="mt-3 opacity-80">Icy jewelry for cold hearts</p>
        <div className="mt-8 max-w-md mx-auto">
          <Countdown targetISO="2025-09-01T20:00:00" />
        </div>
      </section>

      {/* GRID PRODUSE */}
      <section id="drops" className="px-6 md:px-10 pb-16">
        <div className="flex items-end justify-between mb-4">
          <h2 className="text-xl tracking-wider uppercase opacity-90">Upcoming Drops</h2>
          <a className="text-sm opacity-70 hover:text-cyan-300" href="#">
            See all
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} p={p} />
          ))}
        </div>

        {!products.length && (
          <p className="opacity-60 text-sm mt-6">No products yet — come back soon.</p>
        )}
      </section>

      {/* FOOTER */}
      <footer
        id="policies"
        className="border-t border-neutral-800 px-6 md:px-10 py-10 text-sm opacity-70"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-6 md:items-center md:justify-between">
          <span>© 2025 FrostBoyz. All rights reserved.</span>
          <nav className="flex gap-4">
            <a href="#" className="hover:text-cyan-300">
              Shipping & Returns
            </a>
            <a href="#" className="hover:text-cyan-300">
              Privacy
            </a>
            <a href="#" className="hover:text-cyan-300">
              Terms
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
