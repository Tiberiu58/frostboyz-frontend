"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  function close() { setOpen(false); }
  function toggle() { setOpen(v => !v); }

  return (
    <header className="flex items-center justify-between px-4 md:px-8 py-4 sticky top-0 bg-black/70 backdrop-blur z-50">
      {/* Logo – folosește Link, nu <a> */}
      <Link href="/" className="text-cyan-300 tracking-widest font-extrabold uppercase">
        FrostBoyz
      </Link>

      <button
        aria-label="Open menu"
        onClick={toggle}
        className="md:hidden inline-flex items-center gap-2 border border-cyan-300 px-3 py-2 rounded-xl hover:bg-cyan-300 hover:text-black transition"
      >
        <span className="text-sm">Menu</span>
        <span className="i">≡</span>
      </button>

      {/* Nav desktop – pentru ancore (#...) poți lăsa <a>, nu declanșează regula */}
      <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
        <a href="#drops" className="hover:text-cyan-300">Drops</a>
        <a href="https://instagram.com" target="_blank" className="hover:text-cyan-300" rel="noreferrer">Instagram</a>
        <a href="#policies" className="hover:text-cyan-300">Policies</a>
      </nav>

      {/* Drawer mobil */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/60"
            onClick={close}
            onContextMenu={(e) => { e.preventDefault(); close(); }}
          />
          <aside className="fixed top-0 right-0 h-full w-[80%] max-w-[340px] bg-neutral-950 border-l border-cyan-300 p-6 flex flex-col gap-4">
            <button
              className="self-end border px-3 py-1 rounded-lg hover:bg-cyan-300 hover:text-black"
              onClick={close}
            >
              Close
            </button>
            <a className="py-2 border-b border-neutral-800" href="#drops" onClick={close}>Drops</a>
            <a className="py-2 border-b border-neutral-800" href="https://instagram.com" target="_blank" rel="noreferrer" onClick={close}>Instagram</a>
            <a className="py-2" href="#policies" onClick={close}>Policies</a>
          </aside>
        </>
      )}
    </header>
  );
}
