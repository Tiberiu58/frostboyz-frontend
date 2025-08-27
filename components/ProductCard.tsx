type Product = { id:number; name:string; price:number; img:string; badge?:string };

export default function ProductCard({ p }: { p: Product }) {
  return (
    <a href="#" className="group relative block overflow-hidden rounded-2xl border border-neutral-800">
      <img src={p.img} alt={p.name} className="w-full aspect-square object-cover group-hover:scale-105 transition" />
      {p.badge && (
        <span className="absolute top-3 left-3 text-[10px] px-2 py-1 rounded-full border border-cyan-300 bg-black/50">
          {p.badge}
        </span>
      )}
      <div className="p-4 flex items-center justify-between bg-neutral-950/70 backdrop-blur">
        <div>
          <div className="text-sm">{p.name}</div>
          <div className="text-xs opacity-70">RON {(p.price*4.6).toFixed(0)}</div>
        </div>
        <button className="text-xs border border-cyan-300 px-3 py-1 rounded-lg group-hover:bg-cyan-300 group-hover:text-black transition">
          View
        </button>
      </div>
    </a>
  );
}
