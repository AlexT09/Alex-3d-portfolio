import { useEffect, useRef, useState } from 'react';
import { asset } from '../config';

// Capturas reales de los proyectos: dashboards de PS Gaming (Dash y Shiny) y Superstore,
// y gráficas de Heart Disease MLOps.
const m = (f: string) => asset(`marquee/${f}`);

const ROW_1_BASE = [
  m('gaming-01.webp'),
  m('superstore-01.webp'),
  m('superstore-02.webp'),
  m('heart-01.webp'),
  m('gaming-02.webp'),
  m('superstore-03.webp'),
  m('superstore-04.webp'),
  m('superstore-05.webp'),
  m('heart-02.webp'),
  m('superstore-06.webp'),
];
const ROW_2_BASE = [
  m('gaming-03.webp'),
  m('superstore-07.webp'),
  m('superstore-08.webp'),
  m('heart-03.webp'),
  m('gaming-04.webp'),
  m('superstore-09.webp'),
  m('superstore-10.webp'),
  m('superstore-11.webp'),
  m('superstore-12.webp'),
  m('superstore-13.webp'),
];

const ROW_1 = [...ROW_1_BASE, ...ROW_1_BASE, ...ROW_1_BASE];
const ROW_2 = [...ROW_2_BASE, ...ROW_2_BASE, ...ROW_2_BASE];

function Tile({ src }: { src: string }) {
  return (
    <img
      src={src}
      alt="Captura de proyecto"
      loading="lazy"
      className="rounded-2xl object-cover shrink-0"
      style={{ width: 420, height: 270 }}
    />
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden" style={{ background: '#0C0C0C' }}>
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3 w-max"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {ROW_1.map((src, i) => (
            <Tile key={`r1-${i}`} src={src} />
          ))}
        </div>
        <div
          className="flex gap-3 w-max"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {ROW_2.map((src, i) => (
            <Tile key={`r2-${i}`} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
}
