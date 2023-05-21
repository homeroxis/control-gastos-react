import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';
import './style.css';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Control Presupuesto
          </a>
        </div>
      </nav>
      <div className="container">
        <App />
      </div>
    </div>
  </StrictMode>
);
