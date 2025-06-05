
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-900 leading-tight">
                Resolve Disputes with
                <span className="text-blue-600 block">Mediation</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-700 leading-relaxed">
                Learn about mediation under the Mediation Act 2023. Find qualified mediators, 
                understand your rights, and resolve conflicts peacefully.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/how-it-works">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  How It Works
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="px-8 py-3 border-blue-300 text-blue-700 hover:bg-blue-50">
                  Get in Touch
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-blue-700">Learn Process</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-blue-700">Find Mediators</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-blue-700">Resolve Safely</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-2xl p-6 transform -rotate-3 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-blue-700">Mediation Session Active</span>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-blue-100 h-3 rounded-full"></div>
                    <div className="bg-blue-100 h-3 rounded-full w-3/4"></div>
                    <div className="bg-blue-200 h-3 rounded-full w-1/2"></div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-blue-600">
                    <span>2 Parties Connected</span>
                    <span>1 Mediator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
