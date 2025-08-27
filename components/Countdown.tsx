'use client';
import { useEffect, useState } from 'react';

type Props = { targetISO: string };

export default function Countdown({ targetISO }: Props) {
  const [t, setT] = useState({ d: '00', h: '00', m: '00', s: '00' });

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const pad = (n:number)=> String(n).padStart(2,'0');

    function tick() {
      const now = Date.now();
      let delta = Math.max(0, target - now);
      const d = Math.floor(delta / (1000*60*60*24)); delta -= d*(1000*60*60*24);
      const h = Math.floor(delta / (1000*60*60));    delta -= h*(1000*60*60);
      const m = Math.floor(delta / (1000*60));       delta -= m*(1000*60);
      const s = Math.floor(delta / 1000);
      setT({ d: pad(d), h: pad(h), m: pad(m), s: pad(s) });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3">
      {[
        {v:t.d,l:'Days',s:'D'},
        {v:t.h,l:'Hours',s:'H'},
        {v:t.m,l:'Minutes',s:'M'},
        {v:t.s,l:'Seconds',s:'S'},
      ].map((box)=>(
        <div key={box.l} className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-center">
          <div className="text-2xl sm:text-3xl font-extrabold text-cyan-300">{box.v}</div>
          <div className="text-[11px] sm:text-xs opacity-70">{box.l}</div>
        </div>
      ))}
    </div>
  );
}
