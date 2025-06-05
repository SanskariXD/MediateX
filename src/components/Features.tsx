
import React from 'react';
import { Search, Calendar, FileText, Globe, Shield, Award } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Features = () => {
  const features = [
    {
      icon: Search,
      title: "Find Mediators",
      description: "Search qualified mediators by location, specialization, and language",
      link: "Browse Mediators"
    },
    {
      icon: Calendar,
      title: "Schedule Sessions",
      description: "Book mediation sessions at convenient times for all parties",
      link: "Book Session"
    },
    {
      icon: FileText,
      title: "Legal Resources",
      description: "Access mediation clauses, guidelines, and educational materials",
      link: "View Resources"
    },
    {
      icon: Globe,
      title: "Multi-Language",
      description: "Platform available in major Indian languages via BHASHINI",
      link: "Change Language"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "All mediation sessions are confidential and legally protected",
      link: "Learn More"
    },
    {
      icon: Award,
      title: "Certified Process",
      description: "Compliant with Mediation Act 2023 and legal standards",
      link: "View Compliance"
    }
  ];

  return (
    <section id="mediators" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Platform Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to understand, access, and participate in mediation under the new legal framework.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border border-blue-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                  <feature.icon className="h-7 w-7 text-blue-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white">
                  {feature.link}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-500 to-slate-500 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Mediation Journey?
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of Indians who have chosen mediation over litigation. 
            Start learning about the process or find a mediator near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Register">
            <Button size="lg" variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white">
              Create Account
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
