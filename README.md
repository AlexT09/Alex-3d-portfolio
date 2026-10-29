# Alex — Analista de datos · Portafolio

Portafolio personal: dashboards y paneles de business analytics en Python (Dash), R (Shiny) y HTML, con limpieza y EDA en Python, R y SQL.

**Sitio:** https://alext09.github.io/Alex-3d-portfolio/

## Proyectos destacados
- [PS Gaming Analytics en Dash](https://github.com/AlexT09/DashAppGamming): ETL de 19,5 M de registros de PlayStation Store y dashboard de 11 páginas (catálogo, precios en 5 monedas, jugadores, popularidad y trofeos).
- [PS Gaming Analytics en R: Shiny y bookdown](https://github.com/AlexT09/ShinyAppGamming): el mismo dashboard en Shiny y un informe en bookdown con ETL, EDA y conclusiones.
- [Proyección de ventas Superstore](https://github.com/AlexT09/proyecto_superstorep2): forecasting por categoría y región con panel de control en Dash y [libro en Jupyter Book](https://alext09.github.io/superstore-jupyterbook/).
- [Superstore en R: Shiny y bookdown](https://github.com/AlexT09/rbook): el mismo forecasting en R, con app Shiny (shinydashboard) y [libro en bookdown](https://alext09.github.io/rbook/).
- [Heart Disease MLOps](https://github.com/AlexT09/heart-disease-mlops): clasificación, FastAPI, Docker, Kubernetes, CI/CD y monitoreo de deriva.

Las gráficas de las tarjetas (`public/projects/`) se generaron con los datos de cada repositorio, y la franja animada (`public/marquee/`) usa capturas de los dashboards de PS Gaming y Superstore y gráficas de Heart Disease MLOps.

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
