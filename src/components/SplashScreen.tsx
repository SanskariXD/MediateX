
import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    {
      title: t('welcome'),
      description: "Your guide to peaceful dispute resolution",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: t('whatIsMediation'),
      description: "Mediation is a voluntary process where a neutral third party helps resolve disputes without going to court.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: t('whyMediation'),
      description: "Faster than courts, more affordable, preserves relationships, and gives you control over the outcome.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      title: t('howItHelps'),
      description: "This app connects you with mediators, provides resources, and guides you through the whole process.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    }
  ];

  useEffect(() => {
    // Auto-advance splash screen if user doesn't interact
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prev => prev + 1);
      } else {
        onComplete();
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentStep, onComplete, steps.length]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50"
      >
        <div className="w-full max-w-md px-4">
          <div className="mb-6 flex justify-end">
            <LanguageSelector />
          </div>
          
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-card rounded-lg overflow-hidden shadow-xl"
          >
            <div 
              className="h-48 bg-cover bg-center" 
              style={{ backgroundImage: `url(${steps[currentStep].image})` }}
            />
            
            <div className="p-6">
              <h1 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h1>
              <p className="text-muted-foreground">{steps[currentStep].description}</p>
              
              <div className="mt-8 flex items-center justify-between">
                <div className="flex gap-1">
                  {steps.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-2 w-8 rounded-full ${index === currentStep ? 'bg-primary' : 'bg-muted'}`}
                    />
                  ))}
                </div>
                
                <div className="flex gap-2">
                  <Button variant="ghost" onClick={handleSkip}>
                    {t('skip')}
                  </Button>
                  <Button onClick={handleNext}>
                    {currentStep < steps.length - 1 ? t('next') : t('getStarted')}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
