
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, MapPin, Phone, Mail, Star } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

// Mock data for mediators
const mediators = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    location: "Mumbai, Maharashtra",
    languages: ["English", "Hindi", "Marathi"],
    expertise: ["Family", "Civil", "Commercial"],
    rating: 4.9,
    experience: 12,
    image: "https://randomuser.me/api/portraits/women/75.jpg"
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, NCR",
    languages: ["English", "Hindi", "Punjabi"],
    expertise: ["Property", "Business", "Employment"],
    rating: 4.7,
    experience: 8,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Sunita Patel",
    location: "Ahmedabad, Gujarat",
    languages: ["English", "Gujarati", "Hindi"],
    expertise: ["Community", "Land", "Family"],
    rating: 4.8,
    experience: 15,
    image: "https://randomuser.me/api/portraits/women/62.jpg"
  },
  {
    id: 4,
    name: "Ravi Subramaniam",
    location: "Chennai, Tamil Nadu",
    languages: ["English", "Tamil", "Telugu"],
    expertise: ["Commercial", "Workplace", "Insurance"],
    rating: 4.6,
    experience: 10,
    image: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    id: 5,
    name: "Fatima Sheikh",
    location: "Hyderabad, Telangana",
    languages: ["English", "Urdu", "Telugu", "Hindi"],
    expertise: ["Family", "Civil", "Neighborhood"],
    rating: 4.9,
    experience: 7,
    image: "https://randomuser.me/api/portraits/women/90.jpg"
  },
  {
    id: 6,
    name: "Arjun Singh",
    location: "Jaipur, Rajasthan",
    languages: ["English", "Hindi", "Rajasthani"],
    expertise: ["Land", "Property", "Civil"],
    rating: 4.5,
    experience: 9,
    image: "https://randomuser.me/api/portraits/men/22.jpg"
  }
];

const MediatorConnect = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  
  // Filter mediators based on search and filters
  const filteredMediators = mediators.filter(mediator => {
    const matchesSearch = 
      mediator.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mediator.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mediator.expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
      mediator.languages.some(lang => lang.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesExpertise = selectedExpertise === 'all' || 
      mediator.expertise.some(exp => exp.toLowerCase() === selectedExpertise.toLowerCase());
    
    const matchesLocation = selectedLocation === 'all' ||
      mediator.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    return matchesSearch && matchesExpertise && matchesLocation;
  });

  return (
    <MainLayout title={t('mediatorConnect')}>
      {/* Search and filter section */}
      <Card className="mb-8">
        <CardContent className="p-6 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                placeholder="Search by name, location, expertise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedExpertise} onValueChange={setSelectedExpertise}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Expertise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Expertise</SelectItem>
                <SelectItem value="family">Family</SelectItem>
                <SelectItem value="civil">Civil</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="property">Property</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <Select value={selectedLocation} onValueChange={setSelectedLocation}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="mumbai">Mumbai</SelectItem>
                <SelectItem value="delhi">Delhi</SelectItem>
                <SelectItem value="bangalore">Bangalore</SelectItem>
                <SelectItem value="chennai">Chennai</SelectItem>
                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                <SelectItem value="ahmedabad">Ahmedabad</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Results section */}
      <div className="space-y-4">
        {filteredMediators.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl font-medium text-muted-foreground">No mediators found matching your criteria</p>
            <p className="mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          filteredMediators.map(mediator => (
            <Card key={mediator.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Profile image */}
                  <div className="flex-shrink-0">
                    <Avatar className="h-24 w-24">
                      <img src={mediator.image} alt={mediator.name} />
                    </Avatar>
                  </div>
                  
                  {/* Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold">{mediator.name}</h3>
                        <div className="flex items-center gap-1 text-muted-foreground mt-1">
                          <MapPin size={16} />
                          <span>{mediator.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Star className="text-yellow-500 fill-yellow-500" size={18} />
                        <span className="ml-1 font-medium">{mediator.rating}</span>
                        <span className="text-muted-foreground ml-1">({mediator.experience} yrs exp)</span>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium mb-1">Expertise</p>
                        <div className="flex flex-wrap gap-2">
                          {mediator.expertise.map((exp, i) => (
                            <Badge key={i} variant="secondary">{exp}</Badge>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-medium mb-1">Languages</p>
                        <div className="flex flex-wrap gap-2">
                          {mediator.languages.map((lang, i) => (
                            <Badge key={i} variant="outline">{lang}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button className="flex items-center gap-2">
                        <Phone size={16} />
                        <span>Call</span>
                      </Button>
                      <Button variant="outline" className="flex items-center gap-2">
                        <Mail size={16} />
                        <span>Email</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </MainLayout>
  );
};

export default MediatorConnect;
