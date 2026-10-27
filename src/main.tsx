import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '@fontsource/kanit/300.css';
import '@fontsource/kanit/400.css';
import '@fontsource/kanit/500.css';
import '@fontsource/kanit/600.css';
import '@fontsource/kanit/700.css';
import '@fontsource/kanit/800.css';
import '@fontsource/kanit/900.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
