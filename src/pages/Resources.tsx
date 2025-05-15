import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Search, BookOpen, FileCheck, Download, Volume2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { ChevronDown, ChevronUp } from '@/components/ui/icons';

// Mock data for guides
const guides = [
  {
    id: 1,
    title: "Beginner's Guide to Mediation",
    description: "A simple introduction to the mediation process for first-timers.",
    type: "PDF",
    size: "1.2 MB",
    languages: ["English", "Hindi", "Tamil", "Telugu", "Marathi", "Bengali"],
    category: "general"
  },
  {
    id: 2,
    title: "Land Dispute Resolution",
    description: "Step-by-step guide for resolving property and land boundary disputes.",
    type: "PDF",
    size: "2.4 MB",
    languages: ["English", "Hindi", "Marathi", "Bengali"],
    category: "property"
  },
  {
    id: 3,
    title: "Family Mediation Handbook",
    description: "How to approach family disputes including inheritance and relationship conflicts.",
    type: "PDF",
    size: "3.1 MB",
    languages: ["English", "Hindi", "Tamil", "Bengali"],
    category: "family"
  },
  {
    id: 4,
    title: "Small Business Conflict Resolution",
    description: "Guide for resolving disputes between business partners or small businesses.",
    type: "PDF",
    size: "1.8 MB",
    languages: ["English", "Hindi", "Gujarati"],
    category: "business"
  },
  {
    id: 5,
    title: "Community Mediation Manual",
    description: "For village leaders and panchayats to help resolve local conflicts.",
    type: "PDF",
    size: "2.5 MB",
    languages: ["English", "Hindi", "Tamil", "Telugu", "Bengali"],
    category: "community"
  }
];

// Mock data for legal documents
const legalDocs = [
  {
    id: 1,
    title: "Mediation Act 2023 (Simplified)",
    description: "Simplified version of the Mediation Act with key provisions explained in plain language.",
    type: "PDF",
    size: "1.5 MB",
    languages: ["English", "Hindi"],
    category: "legal"
  },
  {
    id: 2,
    title: "Sample Mediation Agreement",
    description: "Template agreement that parties can use to document their mediated settlement.",
    type: "DOCX",
    size: "420 KB",
    languages: ["English", "Hindi", "Tamil", "Telugu", "Marathi", "Bengali"],
    category: "template"
  },
  {
    id: 3,
    title: "Basic Rights in Mediation",
    description: "Know your fundamental rights when participating in a mediation process.",
    type: "PDF",
    size: "980 KB",
    languages: ["English", "Hindi", "Tamil", "Telugu", "Marathi", "Bengali", "Gujarati"],
    category: "rights"
  }
];

// Mock data for FAQs
const faqs = [
  {
    id: 1,
    question: "Is a mediation agreement legally binding?",
    answer: "Yes, when signed by both parties, a mediation agreement is legally binding and enforceable like any contract. If one party doesn't follow the agreement, the other can take legal action."
  },
  {
    id: 2,
    question: "How much does mediation cost?",
    answer: "Costs vary widely. Community mediation services may be free or charge nominal fees. Private mediators typically charge hourly rates ranging from ₹1,500 to ₹5,000 per hour. Many courts offer subsidized mediation services."
  },
  {
    id: 3,
    question: "Can I bring a lawyer to mediation?",
    answer: "Yes, you can bring a lawyer to mediation. However, unlike in court, the lawyer's role is primarily advisory. You will still be expected to speak for yourself and participate actively in the discussions."
  },
  {
    id: 4,
    question: "How long does mediation take?",
    answer: "The duration depends on the complexity of the dispute. Simple matters might be resolved in a single 2-3 hour session. More complex disputes may require multiple sessions over several weeks. Still, mediation is typically much faster than going to court."
  },
  {
    id: 5,
    question: "What if mediation doesn't work?",
    answer: "If mediation doesn't result in an agreement, you still have all your original options available, including going to court. The mediation process is confidential, so statements made during mediation generally cannot be used in court later."
  }
];

const Resources = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [languageFilter, setLanguageFilter] = useState('all');
  const [faqExpanded, setFaqExpanded] = useState<number | null>(null);
  
  const handleDownload = (title: string) => {
    toast({
      title: "Download started",
      description: `${title} is being downloaded`,
    });
  };
  
  const handlePlayAudio = (title: string) => {
    toast({
      title: "Audio playback",
      description: `Playing audio for: ${title}`,
    });
  };
  
  const toggleFaq = (id: number) => {
    if (faqExpanded === id) {
      setFaqExpanded(null);
    } else {
      setFaqExpanded(id);
    }
  };
  
  // Filter resources based on search and filters
  const filteredGuides = guides.filter(guide => {
    const matchesSearch = 
      guide.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || guide.category === categoryFilter;
    
    const matchesLanguage = languageFilter === 'all' || 
      guide.languages.some(lang => lang.toLowerCase() === languageFilter.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });
  
  const filteredDocs = legalDocs.filter(doc => {
    const matchesSearch = 
      doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = categoryFilter === 'all' || doc.category === categoryFilter;
    
    const matchesLanguage = languageFilter === 'all' || 
      doc.languages.some(lang => lang.toLowerCase() === languageFilter.toLowerCase());
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  return (
    <MainLayout title={t('resources')}>
      {/* Search and filter section */}
      <Card className="mb-6 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="general">General</SelectItem>
              <SelectItem value="property">Property</SelectItem>
              <SelectItem value="family">Family</SelectItem>
              <SelectItem value="business">Business</SelectItem>
              <SelectItem value="community">Community</SelectItem>
              <SelectItem value="legal">Legal</SelectItem>
              <SelectItem value="template">Templates</SelectItem>
              <SelectItem value="rights">Rights</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={languageFilter} onValueChange={setLanguageFilter}>
            <SelectTrigger className="w-full md:w-[180px]">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Languages</SelectItem>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="hindi">Hindi</SelectItem>
              <SelectItem value="tamil">Tamil</SelectItem>
              <SelectItem value="telugu">Telugu</SelectItem>
              <SelectItem value="marathi">Marathi</SelectItem>
              <SelectItem value="bengali">Bengali</SelectItem>
              <SelectItem value="gujarati">Gujarati</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </Card>
      
      {/* Main content */}
      <Tabs defaultValue="guides">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="guides">
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Guides</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="legal">
            <div className="flex items-center gap-2">
              <FileCheck size={18} />
              <span>Legal Documents</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="faqs">
            <div className="flex items-center gap-2">
              <FileText size={18} />
              <span>FAQs</span>
            </div>
          </TabsTrigger>
        </TabsList>
        
        {/* Guides Tab */}
        <TabsContent value="guides">
          <div className="space-y-4">
            {filteredGuides.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl font-medium text-muted-foreground">No guides found matching your criteria</p>
                <p className="mt-2">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredGuides.map(guide => (
                <Card key={guide.id} className="p-4">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="bg-muted rounded-lg p-4 text-primary-blue">
                      <BookOpen size={32} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-bold">{guide.title}</h3>
                      <p className="text-muted-foreground mt-1">{guide.description}</p>
                      <div className="text-sm text-muted-foreground mt-2">
                        {guide.type} • {guide.size}
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                        <Badge variant="outline">Available in {guide.languages.length} languages</Badge>
                        <Badge>{guide.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button 
                        className="flex items-center gap-2"
                        onClick={() => handleDownload(guide.title)}
                      >
                        <Download size={16} />
                        <span>{t('downloadResource')}</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                        onClick={() => handlePlayAudio(guide.title)}
                      >
                        <Volume2 size={16} />
                        <span>Listen</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        {/* Legal Documents Tab */}
        <TabsContent value="legal">
          <div className="space-y-4">
            {filteredDocs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl font-medium text-muted-foreground">No documents found matching your criteria</p>
                <p className="mt-2">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredDocs.map(doc => (
                <Card key={doc.id} className="p-4">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                    <div className="bg-muted rounded-lg p-4 text-primary-blue">
                      <FileText size={32} />
                    </div>
                    
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-lg font-bold">{doc.title}</h3>
                      <p className="text-muted-foreground mt-1">{doc.description}</p>
                      <div className="text-sm text-muted-foreground mt-2">
                        {doc.type} • {doc.size}
                      </div>
                      
                      <div className="mt-3 flex flex-wrap gap-2 justify-center md:justify-start">
                        <Badge variant="outline">Available in {doc.languages.length} languages</Badge>
                        <Badge>{doc.category}</Badge>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button 
                        className="flex items-center gap-2"
                        onClick={() => handleDownload(doc.title)}
                      >
                        <Download size={16} />
                        <span>{t('downloadResource')}</span>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex items-center gap-2"
                        onClick={() => handlePlayAudio(doc.title)}
                      >
                        <Volume2 size={16} />
                        <span>Listen</span>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        {/* FAQs Tab */}
        <TabsContent value="faqs">
          <div className="space-y-4">
            {faqs.map(faq => (
              <Card 
                key={faq.id} 
                className="p-4 cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFaq(faq.id);
                    }}
                  >
                    {faqExpanded === faq.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </Button>
                </div>
                
                {faqExpanded === faq.id && (
                  <div className="mt-3 text-muted-foreground">
                    <p>{faq.answer}</p>
                    <div className="mt-3 flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="flex items-center gap-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlayAudio(faq.question);
                        }}
                      >
                        <Volume2 size={16} />
                        <span>Listen</span>
                      </Button>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Resources;
