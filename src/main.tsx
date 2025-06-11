import React from 'react';
import { createRoot } from 'react-dom/client';

import { resources } from './_i18n/resources';
import { Language } from './_i18n/constants';
import { App, AppProps } from './App';

const props: AppProps = {
  localization: {
    fallbackLng: Language.en,
    resources,
    supportedLngs: [Language.en],
  },
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
