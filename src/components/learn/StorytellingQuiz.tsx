
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CustomButton } from '@/components/ui/custom-button'; 
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StorytellingQuiz: React.FC = () => {
  const { t } = useLanguage();
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const [storyStage, setStoryStage] = useState(0);

  // Use hardcoded strings instead of translation keys for now
  const storyOptions = [
    [
      { text: "Go to the mediation center", nextStage: 1 },
      { text: "Try to resolve it yourself", nextStage: 2 },
    ],
    [
      { text: "Present your case calmly", nextStage: 3 },
      { text: "Demand immediate resolution", nextStage: 4 },
    ],
    [
      { text: "Listen to the other party", nextStage: 5 },
      { text: "Interrupt and correct them", nextStage: 6 },
    ],
    [
      { text: "Accept a compromise", nextStage: 7 },
      { text: "Stick to your original demand", nextStage: 8 },
    ],
    [
      { text: "Thank the mediator", nextStage: 9 },
      { text: "Leave without saying anything", nextStage: 10 },
    ],
  ];
  
  // Define sample story content
  const storyContent = {
    0: {
      title: "A Neighborhood Dispute",
      text: "Your neighbor's tree branches are hanging over your property and dropping leaves into your yard. You've asked them to trim the tree, but they haven't responded. What do you do?"
    },
    1: {
      title: "At the Mediation Center",
      text: "You've arrived at the local mediation center. The staff welcomes you and asks about your dispute. What's your approach?"
    },
    2: {
      title: "Direct Confrontation",
      text: "You decide to confront your neighbor directly. They seem defensive about their tree. What's your next step?"
    },
    3: {
      title: "The Mediation Session",
      text: "During the mediation, your neighbor explains they love the tree and can't afford professional trimming. How do you respond?"
    },
    4: {
      title: "Tempers Rising",
      text: "Your demands have made your neighbor upset. The mediator is trying to calm the situation. What do you do now?"
    },
    5: {
      title: "Finding Common Ground",
      text: "After listening to your neighbor, you understand their attachment to the tree. The mediator suggests a compromise. What will you do?"
    },
    6: {
      title: "Communication Breakdown",
      text: "Your interruptions have created tension. The mediator suggests taking a break. How do you proceed?"
    },
    7: {
      title: "Resolution Reached",
      text: "You and your neighbor agree that they will trim the branches hanging over your property twice a year. How do you feel?"
    },
    8: {
      title: "Stalemate",
      text: "The mediation has reached an impasse. The mediator suggests reconvening next week. What's your next move?"
    },
    9: {
      title: "Successful Mediation",
      text: "The dispute has been resolved through mediation. Both you and your neighbor are satisfied with the outcome. What did you learn from this experience?"
    },
    10: {
      title: "Unresolved Issues",
      text: "The mediation session has ended without resolution. What will you do about the tree situation now?"
    },
  };

  const handleOptionSelect = () => {
    if (currentOption && storyStage < Object.keys(storyContent).length - 1) {
      const selectedOptionIndex = storyOptions[storyStage].findIndex(option => option.text === currentOption);
      if (selectedOptionIndex !== -1) {
        const nextStage = storyOptions[storyStage][selectedOptionIndex].nextStage;
        setStoryStage(nextStage);
        setCurrentOption(null);
      }
    }
  };

  const currentStoryContent = storyContent[storyStage as keyof typeof storyContent] || { 
    title: "End of Story", 
    text: "You've reached the end of this interactive story. Would you like to start again?" 
  };

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-4">{currentStoryContent.title}</h2>
        <p className="text-gray-700 mb-6">{currentStoryContent.text}</p>

        {storyOptions[storyStage] && storyOptions[storyStage].map((option, index) => (
          <CustomButton
            key={index}
            variant="outline"
            className={`w-full mb-2 justify-start ${currentOption === option.text ? 'border-primary' : ''}`}
            onClick={() => setCurrentOption(option.text)}
          >
            <ArrowRight size={16} className="mr-2" />
            {option.text}
          </CustomButton>
        ))}

        <CustomButton 
          className="mt-4"
          onClick={handleOptionSelect}
          disabled={!currentOption}
          startIcon={<Play size={16} />}
        >
          Continue the story
        </CustomButton>
        
        {storyStage > 0 && (
          <CustomButton 
            variant="outline"
            className="mt-2 w-full"
            onClick={() => {
              setStoryStage(0);
              setCurrentOption(null);
            }}
          >
            Start Over
          </CustomButton>
        )}
      </CardContent>
    </Card>
  );
};

export default StorytellingQuiz;
