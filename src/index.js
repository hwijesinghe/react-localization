import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import 'flag-icon-css/css/flag-icon.min.css'

import './index.css';
import App from './App';


i18n
  
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    
    supportedLngs : ['en', 'fr', 'ar'],
    lng: document.querySelector('html').lang,
    fallbackLng: "en",
    detection: {
      order: ['path', 'cookie', 'htmlTag', 'localStorage',  'subdomain'],
      caches: ['cookie']
    },
    backend:{
      loadPath: '/locales/{{lng}}/translation.json',
    }
    
    // ,
    // react:{ useSuspense: false },
    // interpolation: {
    //   escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    // }

  });

  const loadingData = (
    <div className="py-4 text-center" >
      <h2>Loading...</h2>
    </div>
  )

ReactDOM.render(
  <Suspense fallback={loadingData}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Suspense>,
  
  document.getElementById('root')
);

