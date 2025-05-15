
import { useState, useCallback } from 'react';
import { useLanguage, Language, TranslationKey } from '@/contexts/LanguageContext';
import { translateText } from '@/utils/translationService';

// Hook for dynamic translation of any text
export function useTranslation() {
  const { language, setLanguage } = useLanguage();
  const [isTranslating, setIsTranslating] = useState(false);

  // Translate any text to the current language
  const translateToLanguage = useCallback(async (text: string, sourceLanguage: Language = 'en'): Promise<string> => {
    if (!text) return '';
    
    setIsTranslating(true);
    try {
      const result = await translateText(text, sourceLanguage, language);
      return result;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    } finally {
      setIsTranslating(false);
    }
  }, [language]);

  return {
    translateToLanguage,
    isTranslating,
    currentLanguage: language,
    setLanguage
  };
}
