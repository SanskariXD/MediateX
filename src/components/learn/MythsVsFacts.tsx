
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import TranslateableText from '../TranslateableText';

interface MythFact {
  id: number;
  myth: string;
  fact: string;
}

const mythsAndFacts: MythFact[] = [
  {
    id: 1,
    myth: "Mediation is only for minor disputes.",
    fact: "Mediation is effective for a wide range of disputes from family conflicts to complex commercial cases."
  },
  {
    id: 2,
    myth: "Only courts can provide legally binding solutions.",
    fact: "Mediated agreements, when documented and signed, are legally binding and enforceable."
  },
  {
    id: 3,
    myth: "Mediators make decisions like judges.",
    fact: "Mediators don't decide outcomes - they facilitate discussions to help parties reach their own agreement."
  },
  {
    id: 4,
    myth: "Mediation is expensive and time-consuming.",
    fact: "Mediation typically costs less than 25% of litigation and can be completed in days or weeks, not years."
  },
  {
    id: 5,
    myth: "Mediation means you must compromise your interests.",
    fact: "Mediation aims for win-win solutions where both parties' core interests are met."
  }
];

export default function MythsVsFacts() {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const toggleCard = (id: number) => {
    if (flippedCards.includes(id)) {
      setFlippedCards(flippedCards.filter(cardId => cardId !== id));
    } else {
      setFlippedCards([...flippedCards, id]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">
          <TranslateableText text="Myths vs. Facts" />
        </h2>
        <p className="text-muted-foreground">
          <TranslateableText text="Tap each card to reveal the truth about mediation" />
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mythsAndFacts.map((item) => (
          <div key={item.id} className="perspective">
            <motion.div
              className="w-full h-full [transform-style:preserve-3d] relative cursor-pointer"
              animate={{ rotateY: flippedCards.includes(item.id) ? 180 : 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => toggleCard(item.id)}
            >
              {/* Myth side (front) */}
              <Card className="absolute w-full h-full backface-hidden">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-500 mb-4">
                    <X size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">
                    <TranslateableText text="Myth" />
                  </h3>
                  <p className="text-center">
                    <TranslateableText text={item.myth} />
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4">
                    <TranslateableText text="Reveal Fact" />
                  </Button>
                </CardContent>
              </Card>
              
              {/* Fact side (back) */}
              <Card className="absolute w-full h-full backface-hidden [transform:rotateY(180deg)]">
                <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-500 mb-4">
                    <Check size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-center">
                    <TranslateableText text="Fact" />
                  </h3>
                  <p className="text-center">
                    <TranslateableText text={item.fact} />
                  </p>
                  <Button variant="ghost" size="sm" className="mt-4">
                    <TranslateableText text="Show Myth" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
