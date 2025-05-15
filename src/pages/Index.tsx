
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Language selector in top-right */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSelector />
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col md:flex-row">
        {/* Left side - Hero image and gradient */}
        <div className="w-full md:w-1/2 bg-gradient-to-br from-primary-blue to-primary-lightBlue text-white p-8 md:p-12 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center md:text-left">
            <div className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              MediateX
            </div>
            <p className="text-xl opacity-90 mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Empowering communities with accessible mediation solutions
            </p>
            <div className="hidden md:block">
              <Button 
                size="lg" 
                className="bg-white text-primary-blue hover:bg-white/90 text-lg animate-fade-in" 
                style={{ animationDelay: '0.4s' }}
                onClick={() => navigate('/auth')}
              >
                {t('getStarted')} <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Right side - Info cards */}
        <div className="w-full md:w-1/2 bg-background p-8 md:p-12 flex items-center">
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">
              {t('welcome')}
            </h2>
            
            <div className="space-y-6">
              {/* Card 1 */}
              <div className="bg-muted rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-bold text-lg mb-2">{t('whatIsMediation')}</h3>
                <p className="text-muted-foreground">
                  A peaceful way to resolve disputes with the help of a neutral third party without going to court.
                </p>
              </div>
              
              {/* Card 2 */}
              <div className="bg-muted rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-bold text-lg mb-2">{t('whyMediation')}</h3>
                <p className="text-muted-foreground">
                  Faster, less expensive, and more collaborative than traditional litigation.
                </p>
              </div>
              
              {/* Card 3 */}
              <div className="bg-muted rounded-lg p-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <h3 className="font-bold text-lg mb-2">{t('howItHelps')}</h3>
                <p className="text-muted-foreground">
                  This app connects you with mediators, resources, and a supportive community.
                </p>
              </div>
            </div>
            
            <div className="mt-8 md:hidden">
              <Button 
                size="lg" 
                className="w-full bg-primary-blue hover:bg-primary-blue/90 text-lg" 
                onClick={() => navigate('/auth')}
              >
                {t('getStarted')} <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
