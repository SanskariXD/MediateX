import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Award, Languages } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MediatorDiscovery = () => {
  const [filters, setFilters] = useState({
    location: '',
    specialization: '',
    language: '',
    userType: 'individual'
  });

  const mediators = [
    {
      id: 1,
      name: "Dr. Anjali Sharma",
      experience: "15 years",
      specialization: "Commercial Disputes",
      languages: ["Hindi", "English", "Punjabi"],
      location: "Delhi",
      rating: 4.9,
      cases: 250,
      image: "AS",
      price: "₹5,000-15,000",
      verified: true
    },
    {
      id: 2,
      name: "Advocate Rajesh Kumar",
      experience: "12 years",
      specialization: "Property & Real Estate",
      languages: ["Hindi", "English"],
      location: "Mumbai",
      rating: 4.8,
      cases: 180,
      image: "RK",
      price: "₹8,000-20,000",
      verified: true
    },
    {
      id: 3,
      name: "Ms. Priya Patel",
      experience: "10 years",
      specialization: "Family & Personal",
      languages: ["Gujarati", "Hindi", "English"],
      location: "Ahmedabad",
      rating: 4.9,
      cases: 320,
      image: "PP",
      price: "₹3,000-12,000",
      verified: true
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 p-4">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-slate-900">Find Mediators</h1>
            <div className="flex bg-slate-100 rounded-lg p-1">
              <button
                onClick={() => setFilters({...filters, userType: 'individual'})}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  filters.userType === 'individual'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600'
                }`}
              >
                For Individuals
              </button>
              <button
                onClick={() => setFilters({...filters, userType: 'company'})}
                className={`py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                  filters.userType === 'company'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600'
                }`}
              >
                For Companies
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-4">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Filters</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Location
                  </label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Select State</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Bangalore</option>
                    <option>Chennai</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Specialization
                  </label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>All Specializations</option>
                    <option>Commercial Disputes</option>
                    <option>Property & Real Estate</option>
                    <option>Family & Personal</option>
                    <option>Employment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Language
                  </label>
                  <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    <option>Any Language</option>
                    <option>Hindi</option>
                    <option>English</option>
                    <option>Tamil</option>
                    <option>Bengali</option>
                  </select>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Filter className="mr-2 h-4 w-4" />
                  Apply Filters
                </Button>
              </div>
            </div>
          </div>

          {/* Mediators List */}
          <div className="lg:col-span-3">
            <div className="mb-6">
              <div className="flex items-center justify-between">
                <p className="text-slate-600">Showing 127 mediators in your area</p>
                <select className="px-3 py-2 border border-slate-300 rounded-lg">
                  <option>Sort by Rating</option>
                  <option>Sort by Experience</option>
                  <option>Sort by Price</option>
                </select>
              </div>
            </div>

            <div className="space-y-6">
              {mediators.map((mediator) => (
                <div key={mediator.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-lg">{mediator.image}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="text-xl font-semibold text-slate-900">{mediator.name}</h3>
                            {mediator.verified && (
                              <Award className="h-5 w-5 text-green-500" />
                            )}
                          </div>
                          <p className="text-slate-600">{mediator.specialization}</p>
                          
                          <div className="flex items-center space-x-4 mt-2 text-sm text-slate-500">
                            <span className="flex items-center">
                              <MapPin className="h-4 w-4 mr-1" />
                              {mediator.location}
                            </span>
                            <span>{mediator.experience} experience</span>
                            <span>{mediator.cases} cases resolved</span>
                          </div>
                          
                          <div className="flex items-center space-x-2 mt-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{mediator.rating}</span>
                            <span className="text-slate-500">rating</span>
                          </div>
                          
                          <div className="flex items-center space-x-1 mt-2">
                            <Languages className="h-4 w-4 text-slate-400" />
                            <span className="text-sm text-slate-600">
                              {mediator.languages.join(', ')}
                            </span>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-lg font-semibold text-slate-900">{mediator.price}</div>
                          <div className="text-sm text-slate-500">per session</div>
                          <Button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white">
                            View Profile
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" className="border-slate-300 text-slate-600 hover:bg-slate-50">
                Load More Mediators
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediatorDiscovery;