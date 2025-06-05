
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Download, FileText, Scale, MapPin } from 'lucide-react';

const LegalInfo = () => {
  const pricingGuidelines = [
    { category: "Commercial Disputes", range: "₹10,000 - ₹50,000", description: "Business-related conflicts" },
    { category: "Property & Real Estate", range: "₹15,000 - ₹75,000", description: "Property disputes and transactions" },
    { category: "Family Matters", range: "₹5,000 - ₹25,000", description: "Personal and family disputes" },
    { category: "Employment", range: "₹8,000 - ₹40,000", description: "Workplace conflicts" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Legal Resources & Information
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Essential legal information, pricing guidelines, and resources for mediation under the Mediation Act 2023
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Rights and Responsibilities */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Rights and Responsibilities</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Rights</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>• Right to voluntarily participate or withdraw</li>
                    <li>• Right to confidentiality</li>
                    <li>• Right to choose your mediator</li>
                    <li>• Right to legal representation</li>
                    <li>• Right to fair and impartial treatment</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">      Your Responsibilities</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li>      • Participate in good faith</li>
                    <li>      • Respect confidentiality</li>
                    <li>      • Be honest and transparent</li>
                    <li>      • Follow agreed procedures</li>
                    <li>      • Honor settlement agreements</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mediation Clauses */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">Mediation Clauses</h2>
                </div>
                <Button variant="outline" size="sm" className="border-slate-300">
                  <Download className="mr-2 h-4 w-4" />
                  Download Templates
                </Button>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Standard Mediation Clause</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <p className="text-slate-700 leading-relaxed mb-4">
                        "Any dispute, controversy, or claim arising out of or relating to this agreement, 
                        or the breach, termination, or invalidity thereof, shall first be attempted to be 
                        resolved through mediation under the Mediation Act, 2023, before resorting to arbitration or litigation."
                      </p>
                      <Button size="sm" variant="outline" className="border-slate-300">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                  <AccordionTrigger>Multi-Tiered Dispute Resolution Clause</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <p className="text-slate-700 leading-relaxed mb-4">
                        "In the event of any dispute arising out of or in connection with this agreement: 
                        (1) The parties shall first attempt to resolve the dispute through direct negotiation; 
                        (2) If negotiation fails, the dispute shall be referred to mediation under the Mediation Act, 2023; 
                        (3) Only if mediation is unsuccessful may the parties proceed to arbitration or court proceedings."
                      </p>
                      <Button size="sm" variant="outline" className="border-slate-300">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                  <AccordionTrigger>Commercial Contract Mediation Clause</AccordionTrigger>
                  <AccordionContent>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                      <p className="text-slate-700 leading-relaxed mb-4">
                        "The parties agree that any dispute relating to this commercial agreement shall be 
                        resolved through mediation conducted in accordance with the Mediation Act, 2023. 
                        The mediation shall be conducted by a mediator mutually agreed upon by the parties, 
                        and the costs shall be shared equally unless otherwise agreed."
                      </p>
                      <Button size="sm" variant="outline" className="border-slate-300">
                        <Download className="mr-2 h-4 w-4" />
                        Download Template
                      </Button>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* Pricing Guidelines */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <div className="flex items-center mb-6">
                <Scale className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">Pricing Guidelines</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {pricingGuidelines.map((item, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h3 className="font-semibold text-slate-900 mb-2">{item.category}</h3>
                    <p className="text-blue-600 font-bold text-lg mb-1">{item.range}</p>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <p className="text-slate-600 text-sm">
                * Pricing varies based on complexity, duration, and mediator experience. These are suggested ranges as per legal guidelines.
              </p>
            </div>

            {/* District Information */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <div className="flex items-center mb-6">
                <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-slate-900">District-wise Mediation Information</h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="district-1">
                  <AccordionTrigger>Delhi NCR</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">District Attorney Office</h4>
                          <p className="text-slate-600">Tis Hazari Courts Complex, Delhi - 110054</p>
                          <p className="text-slate-600">Phone: +91-11-2386-xxxx</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Available Mediators</h4>
                          <p className="text-slate-600">127 certified mediators</p>
                          <p className="text-slate-600">Languages: Hindi, English, Punjabi, Urdu</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="district-2">
                  <AccordionTrigger>Mumbai</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">District Attorney Office</h4>
                          <p className="text-slate-600">Mumbai City Civil Court, Fort, Mumbai - 400001</p>
                          <p className="text-slate-600">Phone: +91-22-2266-xxxx</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Available Mediators</h4>
                          <p className="text-slate-600">89 certified mediators</p>
                          <p className="text-slate-600">Languages: Hindi, English, Marathi, Gujarati</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="district-3">
                  <AccordionTrigger>Bangalore</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">District Attorney Office</h4>
                          <p className="text-slate-600">City Civil Court, Bangalore - 560001</p>
                          <p className="text-slate-600">Phone: +91-80-2558-xxxx</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 mb-2">Available Mediators</h4>
                          <p className="text-slate-600">73 certified mediators</p>
                          <p className="text-slate-600">Languages: Kannada, English, Hindi, Tamil</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalInfo;
