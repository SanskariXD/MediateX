
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ArrowRight, Play, Check, RefreshCw } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Progress } from '@/components/ui/progress';

// Story scenario type
interface StoryStep {
  id: number;
  content: string;
  options?: {
    id: string;
    text: string;
    nextStep: number;
    feedback: string;
    isGood: boolean;
  }[];
  isEnding?: boolean;
  outcome?: string;
  points?: number;
}

// Property dispute story
const propertyDisputeStory: StoryStep[] = [
  {
    id: 1,
    content: "Your uncle passed away and left a piece of land that borders your farm. However, your cousin also claims the land belongs to them. What do you do?",
    options: [
      {
        id: "1a",
        text: "File a case in court immediately",
        nextStep: 2,
        feedback: "This could take years and ruin your relationship with your cousin.",
        isGood: false
      },
      {
        id: "1b",
        text: "Have a direct conversation with your cousin",
        nextStep: 3,
        feedback: "Good first step! Open communication helps understand both perspectives.",
        isGood: true
      },
      {
        id: "1c",
        text: "Ignore the situation and use the land anyway",
        nextStep: 4,
        feedback: "This might lead to conflict escalation and possibly violence.",
        isGood: false
      }
    ]
  },
  {
    id: 2,
    content: "You file a case in court. After 6 months, you're still waiting for the first hearing. Your cousin is no longer speaking to you, and other family members are taking sides. What now?",
    options: [
      {
        id: "2a",
        text: "Continue with the court case",
        nextStep: 5,
        feedback: "The case drags on for 5 years, causing family rifts and high legal fees.",
        isGood: false
      },
      {
        id: "2b",
        text: "Withdraw the case and suggest mediation",
        nextStep: 6,
        feedback: "A good choice to de-escalate the situation and potentially save the relationship.",
        isGood: true
      }
    ]
  },
  {
    id: 3,
    content: "You have a conversation with your cousin. They explain they were promised the land verbally by your uncle. You have the written will. What do you do?",
    options: [
      {
        id: "3a",
        text: "Suggest going to a mediator together",
        nextStep: 7,
        feedback: "Excellent choice! A mediator can help find a solution that works for both of you.",
        isGood: true
      },
      {
        id: "3b",
        text: "Insist the will is final and refuse to compromise",
        nextStep: 8,
        feedback: "This rigid stance might lead to a prolonged dispute.",
        isGood: false
      }
    ]
  },
  {
    id: 4,
    content: "You start using the land. Your cousin confronts you angrily and threatens legal action. The situation has escalated. What now?",
    options: [
      {
        id: "4a",
        text: "Apologize and suggest mediation",
        nextStep: 7,
        feedback: "Good recovery! It's never too late to choose dialogue over conflict.",
        isGood: true
      },
      {
        id: "4b",
        text: "Threaten to counter-sue",
        nextStep: 5,
        feedback: "This will likely lead to expensive, lengthy legal battles.",
        isGood: false
      }
    ]
  },
  {
    id: 5,
    isEnding: true,
    content: "After 5 years of legal proceedings, you win the case but have spent more than the land's value on legal fees. Your family relationships are severely damaged.",
    outcome: "You've legally won but lost much more in terms of time, money, and relationships.",
    points: 10
  },
  {
    id: 6,
    content: "You suggest mediation and your cousin agrees. The mediator helps you discuss the situation calmly. What approach do you take?",
    options: [
      {
        id: "6a",
        text: "Listen to your cousin's needs and look for compromise",
        nextStep: 9,
        feedback: "Perfect approach! Mediation works best when both sides are willing to understand each other.",
        isGood: true
      },
      {
        id: "6b",
        text: "Focus only on the legal will and refuse to budge",
        nextStep: 8,
        feedback: "Mediation requires some flexibility to be successful.",
        isGood: false
      }
    ]
  },
  {
    id: 7,
    content: "You both agree to mediation. The mediator suggests several options, including sharing the land or one person buying out the other's interest. What do you choose?",
    options: [
      {
        id: "7a",
        text: "Explore a creative solution like shared use for different purposes",
        nextStep: 9,
        feedback: "Creative solutions often provide the best outcomes in mediation!",
        isGood: true
      },
      {
        id: "7b",
        text: "Insist on selling the land and splitting proceeds",
        nextStep: 10,
        feedback: "This is a reasonable compromise if sharing isn't feasible.",
        isGood: true
      }
    ]
  },
  {
    id: 8,
    isEnding: true,
    content: "Your rigid stance leads to a breakdown in talks. The dispute continues, causing ongoing tension in the family.",
    outcome: "The dispute remains unresolved, and family gatherings become uncomfortable.",
    points: 20
  },
  {
    id: 9,
    isEnding: true,
    content: "Through mediation, you reach a creative agreement where you'll use the land for farming while your cousin can use it for their planned small business on weekends. Both needs are met!",
    outcome: "You've resolved the dispute amicably and preserved family harmony while meeting both your needs.",
    points: 100
  },
  {
    id: 10,
    isEnding: true,
    content: "You agree to sell the land and split the proceeds. While not ideal for either of you, the compromise allows you to move forward without damaging family relationships.",
    outcome: "You've found a practical solution through compromise that maintains peace in the family.",
    points: 80
  }
];

// Family dispute story (simplified version)
const familyDisputeStory: StoryStep[] = [
  {
    id: 1,
    content: "Your parents want to divide their property among siblings while they're still alive. Your brother believes he should get more as he lives with them. What do you do?",
    options: [
      {
        id: "1a",
        text: "Argue with your brother about fairness",
        nextStep: 2,
        feedback: "This could damage your relationship with your brother.",
        isGood: false
      },
      {
        id: "1b",
        text: "Suggest a family meeting with a neutral facilitator",
        nextStep: 3,
        feedback: "Great approach! Getting a neutral third party can help everyone be heard.",
        isGood: true
      },
      {
        id: "1c",
        text: "Ask your parents to decide without your input",
        nextStep: 4,
        feedback: "Avoiding the issue might lead to resentment later.",
        isGood: false
      }
    ]
  },
  {
    id: 2,
    isEnding: true,
    content: "The argument escalates and creates a rift in the family. Your parents are distressed by the conflict.",
    outcome: "Family harmony is damaged, and no resolution is reached.",
    points: 20
  },
  {
    id: 3,
    isEnding: true,
    content: "With a mediator's help, your family discusses everyone's needs. Your brother explains he'll care for your parents as they age. You all agree he'll get slightly more property with the understanding he'll provide care.",
    outcome: "Through mediation, you've found a solution that acknowledges everyone's contributions and needs.",
    points: 100
  },
  {
    id: 4,
    isEnding: true,
    content: "Your parents make a decision, but without understanding everyone's perspective. Later, disagreements arise about whether the division was fair.",
    outcome: "The unresolved feelings lead to ongoing tension at family gatherings.",
    points: 40
  }
];

export default function StorytellingQuiz() {
  const [storyType, setStoryType] = useState<string | undefined>(undefined);
  const [currentStep, setCurrentStep] = useState<StoryStep | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [points, setPoints] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [path, setPath] = useState<string[]>([]);

  const startStory = (type: string) => {
    if (type === 'property') {
      setCurrentStep(propertyDisputeStory[0]);
    } else {
      setCurrentStep(familyDisputeStory[0]);
    }
    setStoryType(type);
    setSelectedOption(null);
    setFeedback(null);
    setShowFeedback(false);
    setPoints(0);
    setCompleted(false);
    setPath([]);
  };

  const handleSelectOption = (optionId: string) => {
    setSelectedOption(optionId);
  };

  const handleContinue = () => {
    if (!currentStep || !selectedOption) return;
    
    const story = storyType === 'property' ? propertyDisputeStory : familyDisputeStory;
    const option = currentStep.options?.find(opt => opt.id === selectedOption);
    
    if (!option) return;
    
    // Set feedback and show it
    setFeedback(option.feedback);
    setShowFeedback(true);
    
    // Update path
    setPath([...path, `${currentStep.id}${selectedOption.slice(-1)}`]);
    
    // If it's a good choice, add points
    if (option.isGood) {
      setPoints(points + 10);
    }
    
    // Find next step
    const nextStep = story.find(step => step.id === option.nextStep);
    
    if (nextStep) {
      // If it's an ending, add the outcome points
      if (nextStep.isEnding && nextStep.points) {
        setPoints(points + nextStep.points);
        setCompleted(true);
      }
      
      // Set timeout to move to next step after showing feedback
      setTimeout(() => {
        setCurrentStep(nextStep);
        setSelectedOption(null);
        setFeedback(null);
        setShowFeedback(false);
      }, 2000);
    }
  };

  const resetQuiz = () => {
    setStoryType(undefined);
    setCurrentStep(null);
    setSelectedOption(null);
    setFeedback(null);
    setShowFeedback(false);
    setPoints(0);
    setCompleted(false);
    setPath([]);
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Interactive Scenario</h2>
        <p className="text-muted-foreground">Experience how mediation works through interactive stories</p>
      </div>
      
      {!storyType ? (
        // Story selection screen
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startStory('property')}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-orange-100 text-orange-600 p-3 rounded-full mb-4">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Land Dispute Scenario</h3>
              <p className="text-muted-foreground">Navigate a family inheritance dispute over a piece of land</p>
              <Button className="mt-4">Start Story</Button>
            </CardContent>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg transition-shadow" onClick={() => startStory('family')}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full mb-4">
                <Play size={24} />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Property Division</h3>
              <p className="text-muted-foreground">Help resolve a dispute between siblings over parents' property</p>
              <Button className="mt-4">Start Story</Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        // Story in progress
        <div>
          {/* Points and progress */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Award className="text-yellow-500" size={20} />
              <span className="font-bold">{points} Points</span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Path:</span>
              {path.map((step, i) => (
                <Badge key={i} variant="outline" className="text-xs">{step}</Badge>
              ))}
            </div>
          </div>
          
          {/* Story content */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep?.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-lg mb-4">{currentStep?.content}</p>
                  
                  {currentStep?.isEnding ? (
                    <div>
                      <div className="my-4 p-4 bg-muted rounded-lg">
                        <h3 className="font-bold mb-1">Outcome:</h3>
                        <p>{currentStep.outcome}</p>
                      </div>
                      
                      <div className="flex flex-col items-center justify-center mt-8">
                        <Badge className="mb-2 text-lg py-2 px-4">
                          <Award className="mr-2" /> {points} Total Points
                        </Badge>
                        
                        <Button 
                          className="mt-4" 
                          onClick={resetQuiz}
                          startIcon={<RefreshCw size={16} />}
                        >
                          <RefreshCw size={16} className="mr-2" />
                          Try Another Scenario
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-medium mb-3">What will you do?</h3>
                      
                      <ToggleGroup 
                        type="single" 
                        className="flex flex-col space-y-2"
                        value={selectedOption || ''}
                        onValueChange={handleSelectOption}
                      >
                        {currentStep?.options?.map(option => (
                          <ToggleGroupItem
                            key={option.id}
                            value={option.id}
                            className="w-full justify-start text-left p-4 h-auto"
                          >
                            {option.text}
                          </ToggleGroupItem>
                        ))}
                      </ToggleGroup>
                      
                      <Button 
                        className="mt-6 w-full sm:w-auto"
                        onClick={handleContinue}
                        disabled={!selectedOption}
                      >
                        Continue <ArrowRight size={16} className="ml-2" />
                      </Button>
                      
                      {showFeedback && feedback && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 p-4 rounded-lg bg-muted"
                        >
                          <div className="flex items-start gap-2">
                            <Check size={18} className="text-green-500 mt-0.5" />
                            <p>{feedback}</p>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
