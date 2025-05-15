
import React, { createContext, useState, useContext, ReactNode } from 'react';

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

// Translations object
type TranslationsType = {
  [key in Language]: {
    [key in TranslationKey]: string;
  };
};

// Define translations
const translations: TranslationsType = {
  en: {
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
  },
  hi: {
    welcome: 'मीडिएटएक्स में आपका स्वागत है',
    getStarted: 'शुरू करें',
    login: 'लॉग इन',
    signup: 'साइन अप',
    home: 'होम',
    chatbot: 'चैटबॉट',
    learn: 'जानें',
    mediatorConnect: 'मध्यस्थ से जुड़ें',
    community: 'समुदाय',
    resources: 'संसाधन',
    whatIsMediation: 'मध्यस्थता क्या है?',
    whyMediation: 'मध्यस्थता क्यों बेहतर है',
    howItHelps: 'यह ऐप कैसे मदद करता है',
    next: 'अगला',
    skip: 'छोड़ें',
    sendMessage: 'संदेश भेजें',
    speakNow: 'अब बोलें',
    downloadResource: 'डाउनलोड',
    searchMediator: 'मध्यस्थ खोजें',
    postQuestion: 'सवाल पूछें',
    selectLanguage: 'भाषा चुनें',
  },
  ta: {
    welcome: 'மீடியேட்எக்ஸ்க்கு வரவேற்கிறோம்',
    getStarted: 'தொடங்கவும்',
    login: 'உள்நுழைய',
    signup: 'பதிவு செய்யுங்கள்',
    home: 'முகப்பு',
    chatbot: 'உரையாடல்',
    learn: 'கற்றுக்கொள்ளுங்கள்',
    mediatorConnect: 'இடைநிலையாளர்களை தொடர்பு கொள்ளுங்கள்',
    community: 'சமூகம்',
    resources: 'வளங்கள்',
    whatIsMediation: 'இடைத்தரகர் என்றால் என்ன?',
    whyMediation: 'இடைத்தரகர் ஏன் சிறந்தது',
    howItHelps: 'இந்த பயன்பாடு எவ்வாறு உதவுகிறது',
    next: 'அடுத்து',
    skip: 'தவிர்க்கவும்',
    sendMessage: 'அனுப்பு',
    speakNow: 'இப்போது பேசவும்',
    downloadResource: 'பதிவிறக்கம்',
    searchMediator: 'இடைத்தரகரைத் தேடுங்கள்',
    postQuestion: 'கேள்வி கேளுங்கள்',
    selectLanguage: 'மொழியை தேர்வு செய்யவும்',
  },
  bn: {
    welcome: 'মিডিয়েটএক্স এ আপনাকে স্বাগতম',
    getStarted: 'শুরু করুন',
    login: 'লগইন',
    signup: 'সাইন আপ',
    home: 'হোম',
    chatbot: 'চ্যাটবট',
    learn: 'শিখুন',
    mediatorConnect: 'মধ্যস্থতাকারীর সাথে যোগাযোগ',
    community: 'সম্প্রদায়',
    resources: 'সংস্থান',
    whatIsMediation: 'মধ্যস্থতা কী?',
    whyMediation: 'মধ্যস্থতা কেন ভালো',
    howItHelps: 'এই অ্যাপ কিভাবে সাহায্য করে',
    next: 'পরবর্তী',
    skip: 'এড়িয়ে যান',
    sendMessage: 'বার্তা পাঠান',
    speakNow: 'এখন বলুন',
    downloadResource: 'ডাউনলোড',
    searchMediator: 'মধ্যস্থতাকারী খুঁজুন',
    postQuestion: 'প্রশ্ন করুন',
    selectLanguage: 'ভাষা নির্বাচন করুন',
  },
  te: {
    welcome: 'మీడియేట్ ఎక్స్‌కు స్వాగతం',
    getStarted: 'ప్రారంభించండి',
    login: 'లాగిన్',
    signup: 'సైన్ అప్',
    home: 'హోమ్',
    chatbot: 'చాట్‌బాట్',
    learn: 'నేర్చుకోండి',
    mediatorConnect: 'మధ్యవర్తులను కలవండి',
    community: 'సమాజం',
    resources: 'వనరులు',
    whatIsMediation: 'మధ్యవర్తిత్వం అంటే ఏమిటి?',
    whyMediation: 'మధ్యవర్తిత్వం ఎందుకు మంచిది',
    howItHelps: 'ఈ యాప్ ఎలా సహాయపడుతుంది',
    next: 'తదుపరి',
    skip: 'దాటవేయండి',
    sendMessage: 'సందేశం పంపండి',
    speakNow: 'ఇప్పుడు మాట్లాడండి',
    downloadResource: 'డౌన్‌లోడ్',
    searchMediator: 'మధ్యవర్తిని వెతకండి',
    postQuestion: 'ప్రశ్న పోస్ట్ చేయండి',
    selectLanguage: 'భాషను ఎంచుకోండి',
  },
  mr: {
    welcome: 'मिडिएटएक्स वर आपले स्वागत आहे',
    getStarted: 'सुरु करा',
    login: 'लॉग इन',
    signup: 'साइन अप',
    home: 'मुख्यपृष्ठ',
    chatbot: 'चॅटबॉट',
    learn: 'शिका',
    mediatorConnect: 'मध्यस्थाशी संपर्क साधा',
    community: 'समुदाय',
    resources: 'संसाधने',
    whatIsMediation: 'मध्यस्थी म्हणजे काय?',
    whyMediation: 'मध्यस्थी का चांगली आहे',
    howItHelps: 'हे अॅप कसे मदत करते',
    next: 'पुढे',
    skip: 'वगळा',
    sendMessage: 'संदेश पाठवा',
    speakNow: 'आता बोला',
    downloadResource: 'डाउनलोड',
    searchMediator: 'मध्यस्थ शोधा',
    postQuestion: 'प्रश्न विचारा',
    selectLanguage: 'भाषा निवडा',
  },
};

// Create context type
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

// Create context
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Create provider component
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: TranslationKey): string => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
