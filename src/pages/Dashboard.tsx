
import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, BookOpen, Users, FileText, 
  HelpCircle, FileQuestion, UserSearch, BookType,
  Play, MapPin, Upload
} from 'lucide-react';

const Dashboard = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  
  const features = [
    {
      title: t('chatbot'),
      description: "Ask questions about mediation and get instant answers",
      icon: <MessageSquare size={32} />,
      path: '/chatbot',
      color: 'bg-primary-blue text-white'
    },
    {
      title: t('learn'),
      description: "Learn about the mediation process and its benefits",
      icon: <BookOpen size={32} />,
      path: '/learn',
      color: 'bg-accent-orange text-white'
    },
    {
      title: t('mediatorConnect'),
      description: "Find and connect with mediators in your area",
      icon: <Users size={32} />,
      path: '/mediator-connect',
      color: 'bg-green-500 text-white'
    },
    {
      title: t('community'),
      description: "Join discussions and share experiences",
      icon: <Users size={32} />,
      path: '/community',
      color: 'bg-purple-500 text-white'
    },
    {
      title: t('resources'),
      description: "Access guides, templates, and legal documents",
      icon: <FileText size={32} />,
      path: '/resources',
      color: 'bg-pink-500 text-white'
    }
  ];
  
  const quickLinks = [
    { 
      title: "Myths vs. Facts", 
      icon: <FileQuestion size={20} />,
      path: '/learn?tab=myths' 
    },
    { 
      title: "Legal Library", 
      icon: <BookType size={20} />,
      path: '/learn?tab=library' 
    },
    { 
      title: "Interactive Stories", 
      icon: <Play size={20} />,
      path: '/learn?tab=stories'
    },
    { 
      title: "Find a Mediator", 
      icon: <UserSearch size={20} />,
      path: '/mediator-connect'
    },
    { 
      title: "Document Upload", 
      icon: <Upload size={20} />,
      path: '/learn?tab=documents'
    },
    { 
      title: "Nearby Mediators", 
      icon: <MapPin size={20} />,
      path: '/mediator-connect'
    },
  ];

  return (
    <MainLayout title={t('home')}>
      <div className="space-y-8">
        {/* Welcome section */}
        <section className="bg-primary-blue text-white p-6 rounded-lg animate-fade-in">
          <h2 className="text-2xl font-bold mb-2">Welcome to MediateX</h2>
          <p>Your guide to peaceful dispute resolution through mediation</p>
        </section>
        
        {/* Main features grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-hover cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(feature.path)}
            >
              <CardContent className="p-6">
                <div className={`rounded-full ${feature.color} p-3 inline-flex mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
        
        {/* Quick links section */}
        <section>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {quickLinks.map((link, index) => (
              <Card 
                key={index}
                className="card-hover cursor-pointer animate-fade-in"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                onClick={() => navigate(link.path)}
              >
                <CardContent className="py-4 px-5 flex items-center gap-3">
                  <div className="text-primary-blue">
                    {link.icon}
                  </div>
                  <span>{link.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
