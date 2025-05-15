
import React, { useState, useRef, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { Avatar } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import VoiceButton from '@/components/chatbot/VoiceButton';
import { Separator } from '@/components/ui/separator';

// Types for messages
interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

// Sample conversation starters
const conversationStarters = [
  "What is mediation?",
  "How do I resolve a land dispute?",
  "What are my rights as a tenant?",
  "How to find a mediator near me?",
  "What happens during a mediation session?"
];

// Pre-defined answers for the chatbot
const botResponses: Record<string, string> = {
  "what is mediation": "Mediation is a voluntary process where a neutral third person (mediator) helps people in conflict negotiate a mutually acceptable agreement. Unlike a judge, the mediator has no power to impose a decision.",
  "how do i resolve a land dispute": "Land disputes can be effectively resolved through mediation. Start by gathering all your documents, then approach a community mediator or legal aid organization. They can help facilitate a conversation with the other party to find a solution that works for everyone.",
  "what are my rights as a tenant": "As a tenant, you have rights to safe housing, privacy, and proper notice before eviction. Specific rights vary by state, but generally include the right to habitable premises, return of security deposit, and protection against unlawful discrimination.",
  "how to find a mediator near me": "You can find mediators through our 'Mediator Connect' section, local courts, community mediation centers, bar associations, or online mediator directories. Look for someone experienced in your type of dispute.",
  "what happens during a mediation session": "In a mediation session, the mediator introduces everyone and explains the process. Each party shares their perspective uninterrupted. Then, the mediator helps identify issues, explore options, and negotiate toward a mutually acceptable solution that can be written into an agreement."
};

const Chatbot = () => {
  const { t } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to answer your questions about mediation. How can I help you today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    // Generate bot response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  const handleVoiceInput = (text: string) => {
    setInput(text);
    
    // Optional: Auto-send after voice input
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Generate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(text),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }, 500);
  };
  
  const handleSelectStarterQuestion = (question: string) => {
    setInput(question);
    
    // Optional: Auto-send after selection
    setTimeout(() => {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: question,
        sender: 'user',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      
      // Generate bot response
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: getBotResponse(question),
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }, 500);
  };
  
  // Simple function to match user questions to responses
  const getBotResponse = (question: string): string => {
    const lowercaseQ = question.toLowerCase();
    
    // Check for matches in our responses
    for (const key in botResponses) {
      if (lowercaseQ.includes(key)) {
        return botResponses[key];
      }
    }
    
    // Default response if no match
    return "I don't have specific information about that yet, but you can connect with a human mediator for more detailed guidance. Would you like me to help you find a mediator?";
  };

  return (
    <MainLayout title={t('chatbot')}>
      <div className="flex flex-col h-[calc(100vh-180px)]">
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`flex gap-3 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <Avatar className={message.sender === 'user' ? 'bg-primary-blue' : 'bg-accent-orange'}>
                  <span className="font-medium text-white">
                    {message.sender === 'user' ? 'You' : 'AI'}
                  </span>
                </Avatar>
                <div>
                  <Card 
                    className={`p-3 ${
                      message.sender === 'user' 
                        ? 'bg-primary-blue text-white' 
                        : 'bg-muted'
                    }`}
                  >
                    <p>{message.text}</p>
                  </Card>
                  <p className="text-xs text-muted-foreground mt-1 px-1">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Suggested questions */}
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {conversationStarters.map((question, index) => (
              <Button 
                key={index} 
                variant="outline" 
                size="sm" 
                className="text-sm"
                onClick={() => handleSelectStarterQuestion(question)}
              >
                {question}
              </Button>
            ))}
          </div>
        </div>
        
        <Separator className="mb-4" />
        
        {/* Input area */}
        <div className="flex items-center gap-2">
          <VoiceButton onVoiceInput={handleVoiceInput} />
          
          <div className="flex-1 relative">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="pr-12"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <Button
              size="icon"
              variant="ghost"
              className="absolute right-1 top-1/2 transform -translate-y-1/2"
              onClick={handleSendMessage}
              disabled={input.trim() === ''}
              aria-label={t('sendMessage')}
            >
              <Send size={20} />
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Chatbot;
