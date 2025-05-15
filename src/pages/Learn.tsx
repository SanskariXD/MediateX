
import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, FileText, Play, FileQuestion } from 'lucide-react';
import MythsVsFacts from '@/components/learn/MythsVsFacts';
import LegalLibrary from '@/components/learn/LegalLibrary';
import StorytellingQuiz from '@/components/learn/StorytellingQuiz';
import DocumentUpload from '@/components/documents/DocumentUpload';
import { useLocation } from 'react-router-dom';

const Learn = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('myths');
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam && ['myths', 'library', 'stories', 'documents'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location.search]);
  
  return (
    <MainLayout title={t('learn')}>
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
          <TabsTrigger value="myths">
            <div className="flex items-center gap-2">
              <FileQuestion size={18} />
              <span>Myths vs. Facts</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="library">
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Legal Library</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="stories">
            <div className="flex items-center gap-2">
              <Play size={18} />
              <span>Interactive Stories</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="documents">
            <div className="flex items-center gap-2">
              <FileText size={18} />
              <span>Document Upload</span>
            </div>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="myths">
          <MythsVsFacts />
        </TabsContent>
        
        <TabsContent value="library">
          <LegalLibrary />
        </TabsContent>
        
        <TabsContent value="stories">
          <StorytellingQuiz />
        </TabsContent>
        
        <TabsContent value="documents">
          <DocumentUpload />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Learn;
