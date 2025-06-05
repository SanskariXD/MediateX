import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MediationStory = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
    title: "Dispute Arises",
      description: "Two parties have a disagreement that needs resolution",
      illustration: "🤝❌",
      details: "Instead of going directly to court, parties can choose mediation as a faster, cost-effective alternative."
    },
    {
      title: "Choose Mediation",
      description: "Parties agree to resolve through mediation",
      illustration: "⚖️✨",
      details: "Under the Mediation Act 2023, parties can voluntarily opt for mediation or be referred by courts."
    },
    {
      title: "Select Mediator",
      description: "Find and agree on a qualified, neutral mediator",
      illustration: "🎯👨‍⚖️",
      details: "Browse our verified mediators, check their experience, and select one that both parties agree upon."
    },
    {
      title: "Mediation Session",
      description: "Guided discussion to find common ground",
      illustration: "💬🤝",
      details: "The mediator facilitates discussion, helping parties understand each other's perspectives and find solutions."
    },
    {
      title: "Resolution",
      description: "Reach a mutually acceptable agreement",
      illustration: "✅🎉",
      details: "Most mediation cases resolve successfully, with legally binding agreements that save time and money."
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How Mediation Works
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Understanding the mediation process step by step. See how conflicts transform into collaborative solutions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
            <div className="relative h-80 bg-gradient-to-br from-blue-600 to-slate-700 flex items-center justify-center">
              <div className="text-center text-white">
                <div className="text-6xl mb-4">{steps[currentStep].illustration}</div>
                <h3 className="text-2xl font-bold mb-2">{steps[currentStep].title}</h3>
                <p className="text-lg opacity-90">{steps[currentStep].description}</p>
              </div>
              
              <button
                onClick={prevStep}
                className="absolute left-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </button>
              
              <button
                onClick={nextStep}
                className="absolute right-4 p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </button>
            </div>
            
            <div className="p-8">
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                {steps[currentStep].details}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  {steps.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentStep(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentStep ? 'bg-blue-600' : 'bg-slate-300'
                      }`}
                    />
                  ))}
                </div>
                
                <div className="text-sm text-slate-500">
                  Step {currentStep + 1} of {steps.length}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Play className="mr-2 h-5 w-5" />
              Watch Interactive Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediationStory;