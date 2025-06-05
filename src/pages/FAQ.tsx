
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      faqs: [
        {
          question: "What is mediation?",
          answer: "Mediation is a voluntary, confidential process where a neutral third party (mediator) helps disputing parties reach a mutually acceptable resolution. Under the Mediation Act 2023, it's recognized as an alternative to litigation."
        },
        {
          question: "How is mediation different from court proceedings?",
          answer: "Mediation is typically faster, less expensive, private, and allows parties to control the outcome. Court proceedings are formal, public, and the judge makes the final decision."
        },
        {
          question: "Is mediation legally binding?",
          answer: "Yes, once parties reach an agreement through mediation and sign a settlement agreement, it becomes legally binding and enforceable under the Mediation Act 2023."
        }
      ]
    },
    {
      title: "Process & Procedure",
      faqs: [
        {
          question: "How long does mediation take?",
          answer: "Most mediations are completed within 2-6 sessions, with each session lasting 2-4 hours. The entire process typically takes 2-8 weeks, depending on the complexity of the dispute."
        },
        {
          question: "Can I have a lawyer present during mediation?",
          answer: "Yes, you can have legal representation during mediation sessions. However, the focus is on collaborative problem-solving rather than adversarial advocacy."
        },
        {
          question: "What happens if mediation fails?",
          answer: "If mediation doesn't result in an agreement, you retain all your legal rights and can pursue other dispute resolution methods, including litigation or arbitration."
        }
      ]
    },
    {
      title: "Costs & Fees",
      faqs: [
        {
          question: "How much does mediation cost?",
          answer: "Mediation costs vary based on the type of dispute, mediator experience, and duration. Generally, it ranges from ₹5,000-75,000 total, which is typically much less than litigation costs."
        },
        {
          question: "Who pays for mediation?",
          answer: "Usually, mediation costs are shared equally between parties, though they can agree to a different arrangement. Some cases may qualify for subsidized or free mediation services."
        },
        {
          question: "Are there any hidden fees?",
          answer: "No, all mediation fees should be disclosed upfront. This includes the mediator's fee, administrative costs, and any venue charges if applicable."
        }
      ]
    },
    {
      title: "Platform & Technology",
      faqs: [
        {
          question: "How do online mediation sessions work?",
          answer: "Online sessions are conducted through secure video conferencing platforms. All parties join a virtual mediation room where the mediator facilitates the discussion just like in-person sessions."
        },
        {
          question: "Is online mediation as effective as in-person mediation?",
          answer: "Yes, studies show online mediation can be equally effective. It offers convenience, reduces travel costs, and can sometimes help parties feel more comfortable in their own environment."
        },
        {
          question: "What technology do I need for online mediation?",
          answer: "You need a computer, tablet, or smartphone with internet access, camera, and microphone. Our platform works on most modern browsers without requiring special software."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Find answers to common questions about mediation and our platform
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
                <div className="flex items-center mb-6">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-slate-900">{category.title}</h2>
                </div>
                
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>

          {/* Still Need Help */}
          <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-xl border border-slate-200 p-8 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still Need Help?</h3>
            <p className="text-slate-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Contact Support
              </a>
              <a href="mailto:support@mediationaware.in" className="border border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 rounded-lg font-medium transition-colors">
                Email Us
              </a>
            </div>
          </div>

          {/* Glossary Link */}
          <div className="max-w-2xl mx-auto mt-8 text-center">
            <p className="text-slate-600">
              Looking for legal terms and definitions?{' '}
              <a href="/legal-info" className="text-blue-600 hover:text-blue-700 font-medium">
                Visit our Legal Glossary
              </a>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
