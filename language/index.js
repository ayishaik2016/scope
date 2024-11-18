import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import * as resourcess from './resources';
const resources={
    en: {
        translation:resourcess.en
      },
      ar: {
        translation:resourcess.ar
      }
}
i18n.use(initReactI18next).init({
   // compatibilityJSON: 'v3',
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false // react already safes from xss
      }
  })
  
  export default i18n