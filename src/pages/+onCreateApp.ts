// https://vike.dev/onCreateApp
import type { OnCreateAppSync } from 'vike-vue';
import { i18n } from '../i18n';

export const onCreateApp: OnCreateAppSync = (pageContext) => {
  const { app, urlOriginal } = pageContext;

  app.use(i18n);

  console.log('!!!!oCA globals', urlOriginal, app?.config?.globalProperties);
  return app;
}
