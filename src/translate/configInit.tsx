import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN_US from './en_us';
import PT_BR from './pt_br';

function i18nInit() {
  i18next.use(initReactI18next).init({
    resources: {
      en: EN_US,
      pt: PT_BR
    },
    lng: 'en',
    fallbackLng: ['en', 'pt'],
    interpolation: {
      escapeValue: false
    }
  });
}

export default i18nInit;
