import { createI18n } from "vue-i18n";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: { en: { test: 'this is a test message' } },
})

