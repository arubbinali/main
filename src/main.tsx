import React from 'react';
import { createRoot } from 'react-dom/client';
import Example from './example';
import './styles.css';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <Example />
  </React.StrictMode>
);
