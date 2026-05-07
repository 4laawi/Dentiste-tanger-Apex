
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

// Mock browser APIs for JSDOM/Prerendering environments
if (typeof window !== 'undefined' && (navigator.userAgent.includes('jsdom') || navigator.userAgent.includes('Node.js'))) {
  window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      media: '',
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    };
  };

  // @ts-ignore
  window.requestAnimationFrame = window.requestAnimationFrame || ((callback) => setTimeout(callback, 0));
  // @ts-ignore
  window.cancelAnimationFrame = window.cancelAnimationFrame || ((id) => clearTimeout(id));
  // @ts-ignore
  window.scrollTo = window.scrollTo || (() => {});

  // @ts-ignore
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
  };

  // @ts-ignore
  global.ResizeObserver = class ResizeObserver {
    constructor() {}
    observe() { return null; }
    unobserve() { return null; }
    disconnect() { return null; }
  };
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error("Could not find root element to mount to");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
