import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import { LiveProjectButton } from '../components/Buttons';
import { asset } from '../config';

interface Project {
  name: string;
  category: string;
  summary: string;
  href: string;
  col1: [string, string];
  col2: string;
}

const PROJECTS: Project[] = [
  {
    name: 'Heart Disease MLOps',
    category: 'Machine Learning · MLOps',
    summary:
      'Predicción de enfermedad cardíaca con 5 modelos comparados (AUC 0,937), API en FastAPI, Docker, Kubernetes, CI/CD y monitoreo de deriva.',
    href: 'https://github.com/AlexT09/heart-disease-mlops',
    col1: [asset('projects/heart-1.png'), asset('projects/heart-2.png')],
    col2: asset('projects/heart-3.png'),
  },
  {
    name: 'Proyección de ventas Superstore',
    category: 'Forecasting · Business Analytics',
    summary:
      'App en Dash que proyecta ventas 2018 por categoría y región. El modelo acertó el total anual con +3,4 % de desvío, frente a −16,9 % del método base.',
    href: 'https://github.com/AlexT09/proyecto_superstorep2',
    col1: [asset('projects/superstore-1.png'), asset('projects/superstore-2.png')],
    col2: asset('projects/superstore-3.png'),
  },
];

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function ProjectCard({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const rangeStart = index / total;
  const scale = useTransform(progress, [rangeStart, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.div
        className={`relative w-full max-w-6xl border-2 border-[#D7E2EA] p-4 sm:p-6 md:p-8 origin-top ${RADIUS}`}
        style={{ background: '#0C0C0C', scale, top: `${index * 28}px` }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-1">
              <span
                className="text-[#D7E2EA] font-light uppercase tracking-widest opacity-60"
                style={{ fontSize: 'clamp(0.75rem, 1.2vw, 1rem)' }}
              >
                {project.category}
              </span>
              <h3
                className="text-[#D7E2EA] font-medium uppercase"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
              <p
                className="text-[#D7E2EA] font-light leading-snug max-w-xl opacity-70 mt-1"
                style={{ fontSize: 'clamp(0.8rem, 1.2vw, 1.05rem)' }}
              >
                {project.summary}
              </p>
            </div>
          </div>
          <LiveProjectButton href={project.href} />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4 w-full sm:w-[40%]">
            <img
              src={project.col1[0]}
              alt={`${project.name}: gráfica 1`}
              loading="lazy"
              className={`w-full object-contain bg-[#141416] ${RADIUS}`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1[1]}
              alt={`${project.name}: gráfica 2`}
              loading="lazy"
              className={`w-full object-contain bg-[#141416] ${RADIUS}`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="hidden sm:block w-full sm:w-[60%]">
            <img
              src={project.col2}
              alt={`${project.name}: gráfica principal`}
              loading="lazy"
              className={`w-full h-full object-contain bg-[#141416] ${RADIUS}`}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 sm:-mt-12 md:-mt-14 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Proyectos
        </h2>
      </FadeIn>

      <div ref={containerRef} className="mt-16 sm:mt-20 md:mt-28">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.name} project={p} index={i} total={PROJECTS.length} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
