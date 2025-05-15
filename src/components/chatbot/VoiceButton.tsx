
import React, { useState } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface VoiceButtonProps {
  onVoiceInput: (text: string) => void;
}

export default function VoiceButton({ onVoiceInput }: VoiceButtonProps) {
  const [isListening, setIsListening] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleVoiceInput = () => {
    // In a real app, we would use the browser's SpeechRecognition API or a 3rd party library
    // For this prototype, we'll simulate voice input
    setIsListening(true);
    
    // Simulate processing time
    setTimeout(() => {
      setIsListening(false);
      
      // Simulate voice recognition
      const simulatedTexts = [
        "What is mediation?",
        "How do I resolve a land dispute?",
        "How to find a mediator near me?",
        "What are the benefits of mediation over litigation?"
      ];
      
      const randomText = simulatedTexts[Math.floor(Math.random() * simulatedTexts.length)];
      onVoiceInput(randomText);
      
      toast({
        title: "Voice detected",
        description: `"${randomText}"`,
      });
    }, 2000);
  };

  return (
    <Button
      size="icon"
      variant={isListening ? "destructive" : "outline"}
      className="rounded-full h-12 w-12 flex items-center justify-center"
      onClick={handleVoiceInput}
      disabled={isListening}
      aria-label={t('speakNow')}
    >
      {isListening ? <MicOff size={24} /> : <Mic size={24} />}
    </Button>
  );
}
