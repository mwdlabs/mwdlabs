import { useLanguage } from '../contexts/LanguageContext';
import { fr, en } from '../data/translations';

const translations = { fr, en };

const getNestedValue = (obj, keys) => {
  const result = keys.reduce((current, key) => {
    if (!current) {
      return undefined;
    }
    if (typeof current !== 'object') {
      return undefined;
    }
    if (!(key in current)) {
      return undefined;
    }
    return current[key];
  }, obj);
  return result;
};

export const useTranslation = () => {
  const { language } = useLanguage();

  const t = (key, options = {}) => {
    try {
      const keys = key.split('.');
      let result = getNestedValue(translations[language] || {}, keys);
      
      // Si non trouvé et que ce n'est pas déjà l'anglais, essayer en anglais
      if ((result === undefined || (options.returnObjects && !Array.isArray(result) && typeof result !== 'object')) && language !== 'en') {
        const enResult = getNestedValue(translations.en || {}, keys);
        if (enResult !== undefined) {
          result = enResult;
        }
      }
      
      // Si on demande un objet/tableau et que le résultat n'est pas un objet/tableau, retourner un tableau vide
      if (options.returnObjects && !Array.isArray(result) && typeof result !== 'object') {
        return [];
      }
      
      // Si toujours pas trouvé, retourner la clé ou la valeur par défaut
      return result !== undefined ? result : (options.default || key);
    } catch (error) {
      console.error(`Translation error for key: ${key}`, error);
      return options.default || key;
    }
  };

  return { t, language };
};
