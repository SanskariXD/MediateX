
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MediationStory from '../components/MediationStory';
import { BookOpen, Users, Scale, Clock, CheckCircle, Shield } from 'lucide-react';

const AboutMediation = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Faster Resolution",
      description: "Resolve disputes in weeks instead of years through litigation"
    },
    {
      icon: CheckCircle,
      title: "Cost Effective",
      description: "Save up to 80% compared to traditional court proceedings"
    },
    {
      icon: Users,
      title: "Mutual Agreement",
      description: "Both parties work together to find acceptable solutions"
    },
    {
      icon: Shield,
      title: "Confidential",
      description: "All discussions remain private and confidential"
    },
    {
      icon: Scale,
      title: "Legally Binding",
      description: "Mediation agreements are enforceable by law"
    },
    {
      icon: BookOpen,
      title: "Educational",
      description: "Learn about your rights and legal options"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Understanding Mediation
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Mediation is a voluntary, confidential process where a neutral third party helps 
              disputing parties reach a mutually acceptable resolution under the Mediation Act 2023.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
                <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <MediationStory />

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Key Principles of Mediation
            </h2>
            
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Voluntary Participation</h3>
                <p className="text-slate-600">All parties must agree to participate in mediation voluntarily. No one can be forced into the process.</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Neutral Mediator</h3>
                <p className="text-slate-600">The mediator remains impartial and doesn't take sides or make decisions for the parties.</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Confidentiality</h3>
                <p className="text-slate-600">Everything discussed in mediation remains confidential and cannot be used in court if mediation fails.</p>
              </div>
              
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Self-Determination</h3>
                <p className="text-slate-600">Parties control the outcome and create their own solutions rather than having decisions imposed on them.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMediation;
