import FadeIn from '../components/FadeIn';
import Magnet from '../components/Magnet';
import { ContactButton } from '../components/Buttons';
import { asset } from '../config';

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Servicios', href: '#services' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Contacto', href: '#contact' },
];
const PORTRAIT = asset('portrait.png');

export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[11vw] sm:text-[11.5vw] md:text-[12.2vw] lg:text-[12.8vw] mt-6 sm:mt-4 md:-mt-5">
            Hola, soy Alex
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            data analyst que convierte datos en decisiones con impacto real para el negocio
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[220px] sm:w-[280px] md:w-[330px] lg:w-[380px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <img src={PORTRAIT} alt="Alex, data analyst" className="w-full h-auto block select-none" draggable={false} />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
