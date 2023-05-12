import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18n.js';
import './index.scss';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <I18nextProvider i18n={i18n}>
            <App />
    </I18nextProvider>
);

