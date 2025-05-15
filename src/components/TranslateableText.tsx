
import React, { useEffect, useState } from 'react';
import { useTranslation } from '@/hooks/useTranslation';
import { Loader2 } from 'lucide-react';
import { Language } from '@/contexts/LanguageContext';

interface TranslateableTextProps {
  text: string;
  sourceLanguage?: Language;
  className?: string;
}

export default function TranslateableText({ 
  text, 
  sourceLanguage = 'en',
  className = '' 
}: TranslateableTextProps) {
  const { translateToLanguage, currentLanguage, isTranslating } = useTranslation();
  const [translatedText, setTranslatedText] = useState(text);
  
  useEffect(() => {
    let isMounted = true;
    
    const translateText = async () => {
      if (currentLanguage === sourceLanguage || !text) {
        setTranslatedText(text);
        return;
      }
      
      const result = await translateToLanguage(text, sourceLanguage);
      if (isMounted) {
        setTranslatedText(result);
      }
    };
    
    translateText();
    
    return () => {
      isMounted = false;
    };
  }, [text, currentLanguage, sourceLanguage, translateToLanguage]);
  
  if (isTranslating) {
    return (
      <span className={className}>
        <Loader2 size={16} className="inline animate-spin mr-2" />
        Translating...
      </span>
    );
  }
  
  return <span className={className}>{translatedText}</span>;
}
