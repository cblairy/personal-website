import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './translations/en.json';
import translationFR from './translations/fr.json';

// Languages Configuration
const resources = {
    en: {
        translation: translationEN
    },
    fr: {
        translation: translationFR
    }
};

i18n
    .use(initReactI18next) // initialize i18next
    .init({
        resources,
        lng: 'fr', // default language
        fallbackLng: 'fr', // emergency language
});

export default i18n;