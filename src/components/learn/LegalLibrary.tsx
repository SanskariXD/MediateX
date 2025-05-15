
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, BookOpen, FileText } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Mock data for legal rights
const legalRights = [
  {
    id: 1,
    title: "Right to Equal Justice",
    description: "Every citizen has the right to access justice, regardless of social or economic status.",
    category: "fundamental",
    tags: ["constitutional", "equality", "justice"],
    references: ["Article 14", "Article 21"]
  },
  {
    id: 2,
    title: "Right to Legal Representation",
    description: "Every person has the right to be represented by a legal professional in court proceedings.",
    category: "legal",
    tags: ["advocacy", "legal aid", "fair trial"],
    references: ["Section 304, CrPC"]
  },
  {
    id: 3,
    title: "Right to Fair Hearing",
    description: "All parties in a dispute have the right to present their case and be heard impartially.",
    category: "procedural",
    tags: ["fair trial", "hearing", "impartiality"],
    references: ["Article 21"]
  },
  {
    id: 4,
    title: "Right to Information",
    description: "Citizens have the right to access information held by public authorities.",
    category: "transparency",
    tags: ["RTI", "transparency", "accountability"],
    references: ["RTI Act, 2005"]
  },
  {
    id: 5,
    title: "Right to Alternative Dispute Resolution",
    description: "Parties have the right to resolve disputes through mediation, arbitration, or other ADR mechanisms.",
    category: "remedial",
    tags: ["ADR", "mediation", "arbitration"],
    references: ["Section 89, CPC"]
  }
];

// Mock data for legal acts
const legalActs = [
  {
    id: 1,
    title: "Mediation Act, 2023",
    description: "Establishes a legal framework for mediation in India, including court-annexed and private mediation.",
    year: 2023,
    tags: ["mediation", "ADR", "recent"]
  },
  {
    id: 2,
    title: "Arbitration and Conciliation Act",
    description: "Provides for domestic arbitration, international commercial arbitration, and enforcement of foreign awards.",
    year: 1996,
    tags: ["arbitration", "conciliation", "commercial"]
  },
  {
    id: 3,
    title: "Legal Services Authorities Act",
    description: "Establishes legal aid programs to provide free legal services to the disadvantaged sections of society.",
    year: 1987,
    tags: ["legal aid", "access to justice", "disadvantaged"]
  },
  {
    id: 4,
    title: "Consumer Protection Act",
    description: "Provides for consumer rights and establishes consumer dispute redressal forums at different levels.",
    year: 2019,
    tags: ["consumer rights", "redressal", "protection"]
  }
];

export default function LegalLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  
  // Filter rights based on search and category
  const filteredRights = legalRights.filter(right => {
    const matchesSearch = 
      right.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || right.category === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });
  
  // Filter acts based on search
  const filteredActs = legalActs.filter(act => 
    act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    act.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    act.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Legal Library</h2>
        <p className="text-muted-foreground">Explore your rights and relevant legal acts</p>
      </div>
      
      {/* Search and filter */}
      <Card className="mb-6">
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search by title, description or tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="fundamental">Fundamental</SelectItem>
                <SelectItem value="legal">Legal</SelectItem>
                <SelectItem value="procedural">Procedural</SelectItem>
                <SelectItem value="transparency">Transparency</SelectItem>
                <SelectItem value="remedial">Remedial</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
      
      {/* Tabs for Rights and Acts */}
      <Tabs defaultValue="rights">
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="rights">
            <div className="flex items-center gap-2">
              <BookOpen size={18} />
              <span>Legal Rights</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="acts">
            <div className="flex items-center gap-2">
              <FileText size={18} />
              <span>Legal Acts</span>
            </div>
          </TabsTrigger>
        </TabsList>
        
        {/* Rights Content */}
        <TabsContent value="rights">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredRights.length === 0 ? (
              <div className="col-span-full text-center py-12">
                <p className="text-lg font-medium text-muted-foreground">No rights found matching your criteria</p>
                <p className="mt-2">Try adjusting your search or filters</p>
              </div>
            ) : (
              filteredRights.map(right => (
                <Card key={right.id} className="h-full">
                  <CardContent className="p-5">
                    <h3 className="text-xl font-bold mb-2">{right.title}</h3>
                    <p className="text-muted-foreground mb-4">{right.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {right.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-sm text-muted-foreground">References: </span>
                        <span className="text-sm font-medium">{right.references.join(', ')}</span>
                      </div>
                      <Badge>{right.category}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
        
        {/* Acts Content */}
        <TabsContent value="acts">
          <div className="grid grid-cols-1 gap-4">
            {filteredActs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg font-medium text-muted-foreground">No acts found matching your criteria</p>
                <p className="mt-2">Try adjusting your search</p>
              </div>
            ) : (
              filteredActs.map(act => (
                <Card key={act.id}>
                  <CardContent className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{act.title}</h3>
                      <Badge variant="secondary">{act.year}</Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{act.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {act.tags.map((tag, i) => (
                        <Badge key={i} variant="outline">{tag}</Badge>
                      ))}
                    </div>
                    
                    <Button variant="outline" className="mt-4 w-full sm:w-auto">
                      Read Full Act
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
