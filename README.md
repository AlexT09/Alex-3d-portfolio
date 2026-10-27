# Alex — Data Analyst · Portafolio

Portafolio personal: análisis de datos con Python, R y SQL, dashboards y business analytics con impacto real para el negocio.

**Sitio:** https://alext09.github.io/alex-3d-portfolio/

## Proyectos destacados
- [Heart Disease MLOps](https://github.com/AlexT09/heart-disease-mlops): clasificación, FastAPI, Docker, Kubernetes, CI/CD y monitoreo de deriva.
- [Proyección de ventas Superstore](https://github.com/AlexT09/proyecto_superstorep2): forecasting por categoría y región con app en Dash.

Las gráficas de las tarjetas (`public/projects/`) se generaron con los datos de cada repositorio, y la franja animada (`public/marquee/`) usa capturas del dashboard de Superstore y gráficas de Heart Disease MLOps.

## Personalizar
- Contacto (email, LinkedIn, GitHub): `src/config.ts`
- Retrato del hero: constante `PORTRAIT` en `src/sections/HeroSection.tsx`
- Proyectos: arreglo `PROJECTS` en `src/sections/ProjectsSection.tsx`

## Desarrollo
```bash
npm install
npm run dev
npm run build
```
Cada push a `main` se publica en GitHub Pages con `.github/workflows/deploy.yml`.

Stack: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion, Lucide React.
