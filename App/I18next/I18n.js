import I18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const enDictionary = require('./en-EN.json');
const idDictionary = require('./id-ID.json');

const Translation = {
  en: {
    translation: enDictionary
  },
  id: {
    translation: idDictionary
  }
};

I18n.use(initReactI18next);

I18n.init({
  resources: Translation,
  fallbackLng: ['en', 'id'],
  lng: 'id'
});

export default lang = (str) => I18n.t(str);
