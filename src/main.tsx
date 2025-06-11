import React from 'react';
import { createRoot } from 'react-dom/client';

import { App, AppProps } from './App';

const props: AppProps = {
  network: {
    api: {
      endpoint: import.meta.env.VITE_API_HOST,
    },
  },
};

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App {...props} />
  </React.StrictMode>
);
