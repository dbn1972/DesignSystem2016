/**
 * i18n Configuration
 * Internationalization setup for UX4G Design System
 * Supports India's 22 scheduled languages
 */

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translations
import en from './locales/en.json';
import hi from './locales/hi.json';
import ta from './locales/ta.json';
import bn from './locales/bn.json';
import gu from './locales/gu.json';
import mr from './locales/mr.json';
import te from './locales/te.json';
import kn from './locales/kn.json';
import ml from './locales/ml.json';
import pa from './locales/pa.json';
import or from './locales/or.json';
import as from './locales/as.json';
import ur from './locales/ur.json';

// India's 22 Scheduled Languages
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', dir: 'ltr' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', dir: 'ltr' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', dir: 'ltr' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', dir: 'ltr' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', dir: 'ltr' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', dir: 'ltr' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', dir: 'ltr' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', dir: 'ltr' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', dir: 'ltr' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', dir: 'ltr' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', dir: 'ltr' },
  { code: 'as', name: 'Assamese', nativeName: 'অসমীয়া', dir: 'ltr' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', dir: 'rtl' },
  // Additional scheduled languages (to be added)
  // { code: 'ks', name: 'Kashmiri', nativeName: 'कॉशुर / کٲشُر', dir: 'rtl' },
  // { code: 'sd', name: 'Sindhi', nativeName: 'سنڌي / सिन्धी', dir: 'rtl' },
  // { code: 'sa', name: 'Sanskrit', nativeName: 'संस्कृतम्', dir: 'ltr' },
  // { code: 'ne', name: 'Nepali', nativeName: 'नेपाली', dir: 'ltr' },
  // { code: 'kok', name: 'Konkani', nativeName: 'कोंकणी', dir: 'ltr' },
  // { code: 'mni', name: 'Manipuri', nativeName: 'মৈতৈলোন্', dir: 'ltr' },
  // { code: 'brx', name: 'Bodo', nativeName: 'बड़ो', dir: 'ltr' },
  // { code: 'doi', name: 'Dogri', nativeName: 'डोगरी', dir: 'ltr' },
  // { code: 'sat', name: 'Santali', nativeName: 'ᱥᱟᱱᱛᱟᱲᱤ', dir: 'ltr' },
  // { code: 'mai', name: 'Maithili', nativeName: 'मैथिली', dir: 'ltr' },
];

// Resources with translations
const resources = {
  en: { translation: en },
  hi: { translation: hi },
  ta: { translation: ta },
  bn: { translation: bn },
  gu: { translation: gu },
  mr: { translation: mr },
  te: { translation: te },
  kn: { translation: kn },
  ml: { translation: ml },
  pa: { translation: pa },
  or: { translation: or },
  as: { translation: as },
  ur: { translation: ur },
};

// Initialize i18n
i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Fallback to English
    supportedLngs: SUPPORTED_LANGUAGES.map(lang => lang.code),

    // Detection options
    detection: {
      // Order of detection
      order: ['localStorage', 'navigator', 'htmlTag'],
      // Keys to lookup language from
      lookupLocalStorage: 'ux4g-language',
      // Cache user language
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    // Separate namespaces for better organization
    ns: ['translation'],
    defaultNS: 'translation',

    // Return keys for missing translations in development
    returnNull: false,
    returnEmptyString: false,

    // React specific options
    react: {
      useSuspense: false, // Disable suspense for now
    },
  });

// Helper function to get language direction
export const getLanguageDirection = (languageCode: string): 'ltr' | 'rtl' => {
  const language = SUPPORTED_LANGUAGES.find(lang => lang.code === languageCode);
  return (language?.dir || 'ltr') as 'ltr' | 'rtl';
};

// Helper function to get language native name
export const getLanguageNativeName = (languageCode: string): string => {
  const language = SUPPORTED_LANGUAGES.find(lang => lang.code === languageCode);
  return language?.nativeName || languageCode.toUpperCase();
};

// Apply RTL/LTR to document
export const applyLanguageDirection = (languageCode: string) => {
  const direction = getLanguageDirection(languageCode);
  document.documentElement.dir = direction;
  document.documentElement.lang = languageCode;
};

export default i18n;
