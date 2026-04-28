let currentLocale = 'en';
const translations = {};
const localesModulesPaths = [];
const aliasMap = {};

await setLocale(navigator.language || navigator.userLanguage || 'en');

export function _(key) {
  return translations[key] || key;
}

export async function setAliasMap(newAliasMap) {
  Object.assign(aliasMap, newAliasMap);
}

export async function setLocale(locale) {
  console.info(`Setting locale to "${locale}"...`);
  currentLocale = locale;
  await updateTranslations();
}

export async function addLocaleModule(path) {
  if (!localesModulesPaths.includes(path)) {
    localesModulesPaths.push(path);
    await updateTranslations();
  }
}

export async function updateTranslations() {
  Object.keys(translations).forEach(key => delete translations[key]);

  for (const path of localesModulesPaths) {
    try {
      await loadTranslationsFrom(`${path}${currentLocale}.js`);
    } catch (error) {
      if (currentLocale.includes('-')) {
        const baseLocale = currentLocale.split('-')[0];
        try {
          await loadTranslationsFrom(`${path}${baseLocale}.js`);
        } catch (error) {
          console.warn(`Base locale "${baseLocale}" not found for "${currentLocale}".`);
        }
      } else {
        console.warn(`Locale "${currentLocale}" not found in path "${path}".`);
      }
    }
  }
}

export async function loadTranslationsFrom(path) {
  for (const key in aliasMap) {
    if (path.startsWith(key)) {
      path = path.replace(key, aliasMap[key]);
    }
  }
  
  const localeModule = await import(path).catch(() => null);
  Object.assign(translations, localeModule.translations);
}