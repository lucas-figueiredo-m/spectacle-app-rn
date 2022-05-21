import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from 'locales/localeList/en'
import pt from 'locales/localeList/pt'

const i18nResources = {
  en: { translation: en },
  pt: { translation: pt }
}

i18n.use(initReactI18next).init({
  resources: i18nResources,
  // lng: 'pt'
  fallbackLng: 'pt'
})

export default i18n
