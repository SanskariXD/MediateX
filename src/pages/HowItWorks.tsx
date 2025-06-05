
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Users, FileText, Handshake, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Understanding the Dispute",
      description: "Identify the core issues and determine if mediation is suitable for your situation",
      icon: FileText,
      details: [
        "Assess the nature of your dispute",
        "Determine if all parties are willing to mediate",
        "Gather relevant documents and information",
        "Set realistic expectations for the process"
      ]
    },
    {
      title: "Selecting a Mediator",
      description: "Choose a qualified, neutral mediator with expertise in your dispute area",
      icon: Users,
      details: [
        "Browse our verified mediator directory",
        "Filter by specialization, location, and language",
        "Review mediator credentials and experience",
        "Both parties must agree on the mediator selection"
      ]
    },
    {
      title: "Mediation Session",
      description: "Participate in structured discussions facilitated by your chosen mediator",
      icon: Handshake,
      details: [
        "Join online or in-person mediation sessions",
        "Present your case with mediator guidance",
        "Engage in constructive dialogue",
        "Explore creative solutions together"
      ]
    },
    {
      title: "Mutual Agreement",
      description: "Reach a binding resolution that satisfies all parties involved",
      icon: Award,
      details: [
        "Draft a comprehensive settlement agreement",
        "Review terms with legal counsel if needed",
        "Sign the binding mediation agreement",
        "Implement the agreed-upon solution"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              How Mediation Works
            </h1>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              A step-by-step guide to resolving disputes through mediation
            </p>
          </div>

          {/* Interactive Steps */}
          <div className="max-w-6xl mx-auto">
            {/* Step Navigation */}
            <div className="flex flex-col md:flex-row justify-center mb-12 space-y-4 md:space-y-0 md:space-x-4">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStep(index)}
                  className={`flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                    currentStep === index
                      ? 'border-blue-600 bg-blue-50 text-blue-900'
                      : 'border-blue-200 bg-white text-blue-700 hover:border-blue-400'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    currentStep === index ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {index + 1}
                  </div>
                  <span className="font-medium hidden md:block">{step.title}</span>
                </button>
              ))}
            </div>

            {/* Current Step Details */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  {React.createElement(steps[currentStep].icon, { 
                    className: "h-8 w-8 text-blue-600" 
                  })}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-blue-900 mb-2">
                    Step {currentStep + 1}: {steps[currentStep].title}
                  </h2>
                  <p className="text-blue-700">{steps[currentStep].description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Key Activities</h3>
                  <ul className="space-y-3">
                    {steps[currentStep].details.map((detail, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-blue-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">
                    {currentStep === 0 && "Getting Started"}
                    {currentStep === 1 && "Choose Your Mediator"}
                    {currentStep === 2 && "During the Session"}
                    {currentStep === 3 && "Final Resolution"}
                  </h3>
                  <p className="text-blue-700 mb-4">
                    {currentStep === 0 && "Ready to begin? Our platform makes it easy to assess your situation and connect with qualified mediators."}
                    {currentStep === 1 && "Browse our extensive directory of certified mediators specializing in various dispute types."}
                    {currentStep === 2 && "Join secure online sessions or meet in person with professional mediation facilities."}
                    {currentStep === 3 && "Create legally binding agreements that provide lasting solutions for all parties."}
                  </p>
                  
                  {currentStep === 0 && (
                    <Link to="/mediators">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Find Mediators <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  
                  {currentStep === 1 && (
                    <Link to="/mediators">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Browse Mediators <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  
                  {currentStep === 2 && (
                    <Link to="/online-mediation">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Start Session <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                  
                  {currentStep === 3 && (
                    <Link to="/legal-info">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Legal Resources <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
                className="border-blue-300 text-blue-700"
              >
                Previous Step
              </Button>
              <Button 
                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                disabled={currentStep === steps.length - 1}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Next Step <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-16 bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
              Why Choose Mediation?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Cost Effective</h3>
                <p className="text-blue-700">Save up to 70% compared to traditional litigation costs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Time Efficient</h3>
                <p className="text-blue-700">Resolve disputes in weeks, not years</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Confidential</h3>
                <p className="text-blue-700">Private process with complete confidentiality</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
