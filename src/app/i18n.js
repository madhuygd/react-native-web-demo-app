import React from 'react';
import i18next from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';

const resources = {
    en: {
        translation: () => require('../assets/i18n/en.json'),
    },
    fr: {
        translation: {
            "Welcome to React": "Bienvenue à React et react-i18next"
        }
    }
};

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: (cb: any) => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,
  });



// i18n
//     .use(initReactI18next) // passes i18n down to react-i18next
//     .init({
//         resources,
//         lng: getLocales()[0].languageCode,
//         fallbackLng: 'en',

//         keySeparator: false, // we do not use keys in form messages.welcome

//         interpolation: {
//             escapeValue: false // react already safes from xss
//         }
//     });

export default i18next;