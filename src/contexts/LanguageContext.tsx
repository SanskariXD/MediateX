
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { bulkTranslate } from '@/utils/translationService';

// Supported languages
export type Language = 'en' | 'hi' | 'ta' | 'bn' | 'te' | 'mr';

// Language names
export const languageNames: Record<Language, string> = {
  en: 'English',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  bn: 'বাংলা',
  te: 'తెలుగు',
  mr: 'मराठी',
};

// Translation keys
export type TranslationKey =
  | 'welcome'
  | 'getStarted'
  | 'login'
  | 'signup'
  | 'home'
  | 'chatbot'
  | 'learn'
  | 'mediatorConnect'
  | 'community'
  | 'resources'
  | 'whatIsMediation'
  | 'whyMediation'
  | 'howItHelps'
  | 'next'
  | 'skip'
  | 'sendMessage'
  | 'speakNow'
  | 'downloadResource'
  | 'searchMediator'
  | 'postQuestion'
  | 'selectLanguage';

// Base translations in English (source language)
const baseTranslations: Record<TranslationKey, string> = {
  welcome: 'Welcome to MediateX',
  getStarted: 'Get Started',
  login: 'Login',
  signup: 'Sign Up',
  home: 'Home',
  chatbot: 'Chatbot',
  learn: 'Learn',
  mediatorConnect: 'Mediator Connect',
  community: 'Community',
  resources: 'Resources',
  whatIsMediation: 'What is Mediation?',
  whyMediation: 'Why Mediation is Better',
  howItHelps: 'How This App Helps',
  next: 'Next',
  skip: 'Skip',
  sendMessage: 'Send Message',
  speakNow: 'Speak Now',
  downloadResource: 'Download',
  searchMediator: 'Search Mediator',
  postQuestion: 'Post Question',
  selectLanguage: 'Select Language',
};

// Translations object (will be populated dynamically)
type TranslationsType = {
  [key in Language]: {
    [key in TranslationKey]: string;
  };
};

// Initial translations (will be replaced with API translations)
const initialTranslations: TranslationsType = {
  en: baseTranslations,
  hi: baseTranslations,
  ta: baseTranslations,
  bn: baseTranslations,
  te: baseTranslations,
  mr: baseTranslations
};

// Create context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
  isLoading: boolean;
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from local storage
    const storedLanguage = localStorage.getItem('language') as Language | null;
    return storedLanguage || 'en';
  });
  
  const [translations, setTranslations] = useState<TranslationsType>(initialTranslations);
  const [isLoading, setIsLoading] = useState(false);

  // Load translations for selected language
  useEffect(() => {
    const loadTranslations = async () => {
      // Skip translation for English (base language)
      if (language === 'en') return;
      
      // Check if we already have translations for this language
      if (JSON.stringify(translations[language]) !== JSON.stringify(baseTranslations)) {
        return;
      }

      setIsLoading(true);
      
      try {
        // Translate all keys for the selected language
        const translatedTexts = await bulkTranslate(baseTranslations, 'en', language);
        
        setTranslations(prev => ({
          ...prev,
          [language]: translatedTexts as Record<TranslationKey, string>
        }));
      } catch (error) {
        console.error('Failed to load translations:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTranslations();
    
    // Save language selection to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Create custom hook
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
