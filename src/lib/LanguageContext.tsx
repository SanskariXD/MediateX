import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translateTextWithPipeline, TranslationRequest } from './bashiniService';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  translate: (text: string) => Promise<string>;
  translatedCache: Record<string, string>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState('en'); // Use language code (e.g., 'en', 'hi', etc.)
  const [translatedCache, setTranslatedCache] = useState<Record<string, string>>({});

  const translate = async (text: string) => {
    const cacheKey = `${text}__${language}`;
    if (translatedCache[cacheKey]) {
      return translatedCache[cacheKey];
    }

    const result = await translateTextWithPipeline({
      text,
      sourceLang: 'en',
      targetLang: language,
    });

    setTranslatedCache((prev) => ({ ...prev, [cacheKey]: result }));
    return result;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translate, translatedCache }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
