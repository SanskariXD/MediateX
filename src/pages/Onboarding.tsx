
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import OnboardingCard from '@/components/onboarding/OnboardingCard';
import LanguageSelector from '@/components/LanguageSelector';
import { Scale, Users, LightbulbIcon } from 'lucide-react';

const Onboarding = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  
  const steps = [
    {
      title: t('whatIsMediation'),
      description: "Mediation is a voluntary process where a neutral third person helps resolve disputes without going to court.",
      icon: <Scale size={48} />
    },
    {
      title: t('whyMediation'),
      description: "Mediation is faster, less expensive, more private, and allows you to maintain relationships with the other party.",
      icon: <Users size={48} />
    },
    {
      title: t('howItHelps'),
      description: "This app connects you with mediators, provides resources, and offers a community of support for your dispute resolution journey.",
      icon: <LightbulbIcon size={48} />
    }
  ];
  
  const handleNext = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      navigate('/dashboard');
    }
  };
  
  const handleSkip = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-b from-primary-blue/10 to-background">
      {/* Language selector */}
      <div className="absolute top-4 right-4">
        <LanguageSelector />
      </div>
      
      <div className="w-full max-w-lg text-center">
        <h1 className="text-3xl font-bold mb-2">MediateX</h1>
        <p className="text-muted-foreground mb-12">Getting started</p>
        
        {/* Progress indicator */}
        <div className="flex justify-center mb-10">
          {steps.map((_, index) => (
            <div 
              key={index}
              className={`h-2 w-12 mx-1 rounded-full transition-colors ${
                index === step ? 'bg-primary' : (
                  index < step ? 'bg-primary/40' : 'bg-muted'
                )
              }`}
            />
          ))}
        </div>
        
        {/* Current step card */}
        <OnboardingCard 
          title={steps[step].title}
          description={steps[step].description}
          icon={steps[step].icon}
          className="mb-10"
        />
        
        {/* Navigation buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            variant="outline" 
            onClick={handleSkip}
            className="order-2 sm:order-1"
          >
            {t('skip')}
          </Button>
          <Button 
            onClick={handleNext}
            className="order-1 sm:order-2"
          >
            {step === steps.length - 1 ? 'Get Started' : t('next')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
