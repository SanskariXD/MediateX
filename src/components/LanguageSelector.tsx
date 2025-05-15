
import React from 'react';
import { Globe, Check, Loader2 } from 'lucide-react';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Language as LanguageType,
  languageNames,
  useLanguage 
} from '@/contexts/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage, t, isLoading } = useLanguage();

  return (
    <Select 
      value={language} 
      onValueChange={(value) => setLanguage(value as LanguageType)}
      disabled={isLoading}
    >
      <SelectTrigger 
        className="w-[180px] flex items-center gap-2 text-lg" 
        aria-label={t('selectLanguage')}
      >
        {isLoading ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Globe size={20} />
        )}
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {(Object.keys(languageNames) as LanguageType[]).map((lang) => (
          <SelectItem 
            key={lang} 
            value={lang}
            className="text-base cursor-pointer flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span>{languageNames[lang]}</span>
              {language === lang && <Check size={16} />}
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
