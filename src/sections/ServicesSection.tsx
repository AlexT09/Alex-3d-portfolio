import FadeIn from '../components/FadeIn';

const SERVICES = [
  {
    name: 'ETL: extracción y limpieza de datos',
    description:
      'Extraigo, limpio y preparo los datos con Python, R y SQL: faltantes, duplicados, atípicos y formatos, para dejarlos listos para el análisis.',
  },
  {
    name: 'EDA: análisis exploratorio',
    description:
      'Exploro los datos para encontrar estacionalidad, tendencias y patrones antes de sacar cualquier conclusión.',
  },
  {
    name: 'Dashboards de ventas y KPIs',
    description:
      'Paneles interactivos en Python (Dash y Plotly) y HTML para seguir ventas, ganancias, categorías y regiones.',
  },
  {
    name: 'Reportes ejecutivos',
    description:
      'Resumo los hallazgos en recomendaciones claras para decidir, por ejemplo cómo planear inventario según la proyección de ventas por región.',
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
            <span className="font-black leading-none shrink-0 w-[1.45em]" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
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
