
import { Language } from '@/contexts/LanguageContext';

// Types for Bashini API requests/responses
export interface BashiniTranslationRequest {
  text: string;
  sourceLanguage: string;
  targetLanguage: string;
}

export interface BashiniTranslationResponse {
  translation: string;
  status: "success" | "error";
  message?: string;
}

// Mapping app language codes to Bashini language codes
const languageCodeMap: Record<Language, string> = {
  en: "en",
  hi: "hi",
  ta: "ta",
  bn: "bn", 
  te: "te",
  mr: "mr"
};

// Cache translations to avoid redundant API calls
const translationCache: Record<string, string> = {};

/**
 * Translates text using Bashini API
 */
export const translateText = async (
  text: string,
  sourceLanguage: Language,
  targetLanguage: Language
): Promise<string> => {
  // If languages are the same, no need to translate
  if (sourceLanguage === targetLanguage) {
    return text;
  }

  // Generate cache key
  const cacheKey = `${text}_${sourceLanguage}_${targetLanguage}`;
  
  // Return cached translation if available
  if (translationCache[cacheKey]) {
    return translationCache[cacheKey];
  }

  // Set API endpoint (this will need to be configured with your actual Bashini API endpoint)
  const apiUrl = import.meta.env.VITE_BASHINI_API_URL || "https://api.bashini.io/v1/translation";
  const apiKey = import.meta.env.VITE_BASHINI_API_KEY;

  // If no API key is set, return original text
  if (!apiKey) {
    console.warn("Bashini API key not configured. Using original text.");
    return text;
  }

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        text,
        sourceLanguage: languageCodeMap[sourceLanguage],
        targetLanguage: languageCodeMap[targetLanguage]
      })
    });

    const data: BashiniTranslationResponse = await response.json();

    if (data.status === "success" && data.translation) {
      // Cache the result
      translationCache[cacheKey] = data.translation;
      return data.translation;
    } else {
      console.error("Translation error:", data.message);
      return text;
    }
  } catch (error) {
    console.error("Translation API error:", error);
    return text;
  }
};

/**
 * Bulk translate multiple texts at once
 */
export const bulkTranslate = async (
  texts: Record<string, string>,
  sourceLanguage: Language,
  targetLanguage: Language
): Promise<Record<string, string>> => {
  // If languages are the same, return original texts
  if (sourceLanguage === targetLanguage) {
    return texts;
  }

  const translationPromises = Object.entries(texts).map(async ([key, value]) => {
    const translatedText = await translateText(value, sourceLanguage, targetLanguage);
    return [key, translatedText];
  });

  const translatedEntries = await Promise.all(translationPromises);
  return Object.fromEntries(translatedEntries);
};

