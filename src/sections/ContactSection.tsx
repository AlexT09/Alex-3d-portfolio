import { Github, Linkedin, Mail } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import { ContactButton } from '../components/Buttons';
import { CONTACT } from '../config';

export default function ContactSection() {
  const links = [
    { label: CONTACT.email, href: `mailto:${CONTACT.email}`, Icon: Mail },
    ...(CONTACT.linkedin ? [{ label: 'LinkedIn', href: CONTACT.linkedin, Icon: Linkedin }] : []),
    { label: 'GitHub', href: CONTACT.github, Icon: Github },
  ];

  return (
    <section
      id="contact"
      className="relative px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-36 flex flex-col items-center gap-10 sm:gap-12 text-center"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contacto
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p
          className="text-[#D7E2EA] font-light max-w-[560px] leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
        >
          ¿Tienes datos y preguntas de negocio? Escríbeme y vemos cómo convertirlos en decisiones.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <ContactButton />
      </FadeIn>
      <FadeIn delay={0.35} className="flex flex-wrap justify-center gap-x-8 gap-y-4">
        {links.map(({ label, href, Icon }) => (
          <a
            key={href}
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#D7E2EA] font-medium tracking-wide transition-opacity duration-200 hover:opacity-70"
          >
            <Icon size={20} strokeWidth={1.75} />
            {label}
          </a>
        ))}
      </FadeIn>
      <p className="text-[#D7E2EA]/40 text-sm font-light mt-6">© {new Date().getFullYear()} Alex · Data Analyst</p>
    </section>
  );
}
