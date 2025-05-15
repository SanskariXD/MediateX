import React from 'react';
import MainLayout from '@/components/layout/MainLayout';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Steps, Step } from '@/components/ui/custom-components';
import { Scale, Clock, Heart, Check, X } from 'lucide-react';

// Custom components for the tab content
const ProcessTab = () => (
  <div className="mt-6 space-y-8">
    <h3 className="text-xl font-bold mb-4">The Mediation Process</h3>
    <Steps>
      <Step icon={<div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center">1</div>}>
        <h4 className="text-lg font-bold">Introduction</h4>
        <p>The mediator introduces everyone, explains the process, and sets ground rules.</p>
      </Step>
      <Step icon={<div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center">2</div>}>
        <h4 className="text-lg font-bold">Opening Statements</h4>
        <p>Each person shares their perspective without interruption.</p>
      </Step>
      <Step icon={<div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center">3</div>}>
        <h4 className="text-lg font-bold">Joint Discussion</h4>
        <p>The mediator helps identify issues and encourages dialogue.</p>
      </Step>
      <Step icon={<div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center">4</div>}>
        <h4 className="text-lg font-bold">Private Meetings</h4>
        <p>The mediator may meet with each party separately to discuss concerns.</p>
      </Step>
      <Step icon={<div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center">5</div>}>
        <h4 className="text-lg font-bold">Negotiation</h4>
        <p>Both parties work together to find a solution that meets everyone's needs.</p>
      </Step>
      <Step icon={<div className="bg-primary-blue text-white rounded-full w-8 h-8 flex items-center justify-center">6</div>}>
        <h4 className="text-lg font-bold">Agreement</h4>
        <p>If successful, the terms are written in a settlement agreement signed by all parties.</p>
      </Step>
    </Steps>
  </div>
);

const MythsTab = () => {
  const myths = [
    {
      myth: "Mediation is only for minor disputes",
      fact: "Mediation is used for all types of conflicts, from small claims to complex business and family matters."
    },
    {
      myth: "The mediator decides who is right",
      fact: "Unlike judges, mediators don't make decisions. They help the parties find their own solutions."
    },
    {
      myth: "Mediation isn't legally binding",
      fact: "While the process is voluntary, signed mediation agreements can become legally binding contracts."
    },
    {
      myth: "Mediation means compromise",
      fact: "Mediation focuses on finding solutions that satisfy everyone's core needs, not just splitting the difference."
    },
    {
      myth: "You need a lawyer for mediation",
      fact: "While you can bring a lawyer, many people successfully mediate without legal representation."
    }
  ];

  return (
    <div className="mt-6 space-y-6">
      <h3 className="text-xl font-bold mb-4">Common Myths About Mediation</h3>
      {myths.map((item, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
          <div className="bg-muted p-4 flex items-start gap-3">
            <X className="text-red-500 mt-1 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-medium">Myth:</h4>
              <p>{item.myth}</p>
            </div>
          </div>
          <div className="p-4 flex items-start gap-3">
            <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
            <div>
              <h4 className="font-medium">Fact:</h4>
              <p>{item.fact}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const BenefitsTab = () => {
  const benefits = [
    {
      title: "Faster Resolution",
      description: "Mediation typically takes days or weeks, while court cases can take months or years.",
      icon: <Clock size={32} />,
      color: "bg-green-100 text-green-600"
    },
    {
      title: "Lower Cost",
      description: "Mediation costs a fraction of what litigation costs in terms of legal fees and court expenses.",
      icon: <Scale size={32} />,
      color: "bg-blue-100 text-blue-600"
    },
    {
      title: "Preserve Relationships",
      description: "Mediation focuses on cooperation rather than conflict, helping maintain relationships.",
      icon: <Heart size={32} />,
      color: "bg-pink-100 text-pink-600"
    },
    {
      title: "Confidential",
      description: "Unlike public court hearings, mediation is private and confidential.",
      icon: <Check size={32} />,
      color: "bg-purple-100 text-purple-600"
    },
    {
      title: "More Control",
      description: "Parties create their own solutions rather than having a decision imposed on them.",
      icon: <Check size={32} />,
      color: "bg-amber-100 text-amber-600"
    }
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-4">Benefits of Mediation vs. Litigation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="card-hover">
            <CardContent className="p-5 flex gap-4">
              <div className={`rounded-full ${benefit.color} p-3`}>
                {benefit.icon}
              </div>
              <div>
                <h4 className="font-bold text-lg">{benefit.title}</h4>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

const LegalTab = () => {
  const rights = [
    {
      title: "Right to Legal Representation",
      description: "You have the right to be represented by a lawyer during mediation, though it's not required."
    },
    {
      title: "Right to Withdraw",
      description: "You can leave the mediation process at any time if you feel it isn't working."
    },
    {
      title: "Right to Confidentiality",
      description: "What you say during mediation cannot generally be used against you in court later."
    },
    {
      title: "Right to a Fair Process",
      description: "The mediator must remain neutral and give all parties equal opportunity to speak."
    },
    {
      title: "Right to Decline Settlement",
      description: "You are never forced to accept any agreement in mediation."
    }
  ];

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold mb-6">Basic Legal Rights You Should Know</h3>
      <div className="space-y-4">
        {rights.map((right, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <h4 className="font-bold">{right.title}</h4>
            <p className="text-muted-foreground">{right.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Create additional UI components for the Learn page
const Learn = () => {
  const { t } = useLanguage();

  return (
    <MainLayout title={t('learn')}>
      <Tabs defaultValue="process" className="w-full">
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
          <TabsTrigger value="process">Process</TabsTrigger>
          <TabsTrigger value="myths">Myths vs. Facts</TabsTrigger>
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="legal">Legal Rights</TabsTrigger>
        </TabsList>
        <TabsContent value="process">
          <ProcessTab />
        </TabsContent>
        <TabsContent value="myths">
          <MythsTab />
        </TabsContent>
        <TabsContent value="benefits">
          <BenefitsTab />
        </TabsContent>
        <TabsContent value="legal">
          <LegalTab />
        </TabsContent>
      </Tabs>
    </MainLayout>
  );
};

export default Learn;
