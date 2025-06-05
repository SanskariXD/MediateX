
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookOpen, FileText, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";

const LegalTerms = () => {
  const terms = [
    {
      term: "Mediation",
      definition: "A voluntary, confidential process where a neutral third party (mediator) helps disputing parties reach a mutually acceptable agreement.",
      example: "Two business partners use mediation to resolve their contract dispute instead of going to court."
    },
    {
      term: "Mediator",
      definition: "A trained, neutral facilitator who guides the mediation process but does not make decisions for the parties.",
      example: "A certified mediator with expertise in family law helps a divorcing couple reach an amicable settlement."
    },
    {
      term: "Settlement Agreement",
      definition: "A legally binding document that outlines the terms agreed upon by all parties during mediation.",
      example: "After successful mediation, both parties sign a settlement agreement detailing payment terms and future obligations."
    },
    {
      term: "Confidentiality",
      definition: "The principle that all communications and documents in mediation remain private and cannot be used in court.",
      example: "Statements made during mediation sessions cannot be disclosed or used as evidence in subsequent legal proceedings."
    },
    {
      term: "Good Faith",
      definition: "The requirement that all parties participate honestly and genuinely attempt to reach a resolution.",
      example: "Parties must come to mediation with a sincere intention to resolve their dispute, not to delay litigation."
    },
    {
      term: "Voluntary Participation",
      definition: "The principle that mediation requires willing participation from all parties and can be terminated by any party at any time.",
      example: "If one party feels mediation is not working, they can choose to end the process and pursue other options."
    }
  ];

  const clauses = [
    {
      title: "Basic Mediation Clause",
      content: "Any dispute arising out of or relating to this agreement shall first be submitted to mediation under the Mediation Act, 2023.",
      use: "Simple contracts and agreements"
    },
    {
      title: "Stepped Mediation Clause",
      content: "Before initiating any legal proceedings, the parties agree to: (1) Attempt direct negotiation; (2) Submit to mediation if negotiation fails; (3) Only then pursue litigation or arbitration.",
      use: "Complex commercial contracts"
    },
    {
      title: "Institutional Mediation Clause",
      content: "Disputes shall be resolved through mediation administered by [Institution Name] under their mediation rules and the Mediation Act, 2023.",
      use: "When preferring institutional support"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Legal Terms Simplified
            </h1>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Understanding mediation terminology in plain language
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Key Terms */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-900">Key Mediation Terms</h2>
              </div>

              <Accordion type="single" collapsible className="w-full">
                {terms.map((item, index) => (
                  <AccordionItem key={index} value={`term-${index}`}>
                    <AccordionTrigger className="text-left">
                      <span className="font-semibold text-blue-900">{item.term}</span>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-blue-700">{item.definition}</p>
                        <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                          <p className="text-sm text-blue-800">
                            <strong>Example:</strong> {item.example}
                          </p>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Mediation Clauses */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <FileText className="h-8 w-8 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-blue-900">Sample Mediation Clauses</h2>
                </div>
                <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                  <Download className="mr-2 h-4 w-4" />
                  Download All
                </Button>
              </div>

              <div className="space-y-6">
                {clauses.map((clause, index) => (
                  <div key={index} className="border border-blue-100 rounded-lg p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold text-blue-900">{clause.title}</h3>
                      <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {clause.use}
                      </span>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg mb-3 border border-blue-100">
                      <p className="text-blue-800 italic">"{clause.content}"</p>
                    </div>
                    <Button size="sm" variant="outline" className="border-blue-300 text-blue-700">
                      <Download className="mr-2 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Fee Structure */}
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 p-8">
              <h2 className="text-2xl font-bold text-blue-900 mb-6">Understanding Fee Structure</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">What's Included</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Mediator fees (per session or total)</li>
                    <li>• Administrative costs</li>
                    <li>• Venue charges (if applicable)</li>
                    <li>• Document preparation</li>
                    <li>• Technology platform access</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-4">Payment Terms</h3>
                  <ul className="space-y-2 text-blue-700">
                    <li>• Usually split equally between parties</li>
                    <li>• Payment required before sessions</li>
                    <li>• Refund policy for cancelled sessions</li>
                    <li>• Additional costs for extended sessions</li>
                    <li>• No hidden charges policy</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Mediation Act 2023 Highlights */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Mediation Act 2023 - Key Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-blue-100 mb-3">Legal Framework</h3>
                  <ul className="space-y-2 text-blue-200">
                    <li>• Establishes mediation as preferred dispute resolution</li>
                    <li>• Creates regulatory framework for mediators</li>
                    <li>• Defines enforceability of settlement agreements</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-100 mb-3">Benefits</h3>
                  <ul className="space-y-2 text-blue-200">
                    <li>• Faster resolution compared to courts</li>
                    <li>• Cost-effective dispute resolution</li>
                    <li>• Confidential and private process</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalTerms;
