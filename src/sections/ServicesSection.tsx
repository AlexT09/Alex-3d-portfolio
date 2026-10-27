import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    name: 'Análisis con Python',
    description:
      'Limpieza, transformación y análisis exploratorio con pandas y NumPy, y modelos predictivos con scikit-learn, desde el dato crudo hasta resultados reproducibles.',
  },
  {
    name: 'Estadística con R',
    description:
      'Análisis estadístico, pruebas de hipótesis y reportes reproducibles en R para entender qué factores explican realmente los resultados.',
  },
  {
    name: 'SQL y modelado de datos',
    description:
      'Consultas, limpieza y estructuración de datos en SQL para construir tablas confiables que alimenten reportes y modelos.',
  },
  {
    name: 'Dashboards y visualización',
    description:
      'Dashboards interactivos y visualizaciones claras en Power BI, Excel, Dash y Python que muestran de un vistazo lo que importa.',
  },
  {
    name: 'Business Analytics',
    description:
      'Traduzco el análisis en recomendaciones accionables: proyecciones, KPIs y hallazgos con impacto medible en ventas, costos y decisiones.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn y={40}>
        <h2
          className="font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Servicios
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {SERVICES.map((s, i) => (
          <FadeIn
            key={s.name}
            delay={i * 0.1}
            className="flex items-center gap-6 sm:gap-10 md:gap-14 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
              color: '#0C0C0C',
            }}
          >
            <span className="font-black leading-none shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2 sm:gap-3">
              <h3 className="font-medium uppercase" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                {s.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)', opacity: 0.6 }}
              >
                {s.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
