import { useLocalStorage } from '../useStorage/useStorage'
import * as translations from './translations'

export default function useTranslation() {
  const [language, setLanguage] = useLocalStorage({ key: 'language', defaultValue: 'en' })
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage({ key: 'fallbackLanguage', defaultValue: 'en' })

  const translate = (key) => {
    const keys = key.split('.')

    return getNestedTranslation(language, keys) ?? getNestedTranslation(fallbackLanguage, keys) ?? key
  }

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  }
}

function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key]
  }, translations[language])
}
