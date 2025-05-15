import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CustomButton } from '@/components/ui/custom-button'; 
import { ArrowRight, Play } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const StorytellingQuiz: React.FC = () => {
  const { t } = useLanguage();
  const [currentOption, setCurrentOption] = useState<string | null>(null);
  const [storyStage, setStoryStage] = useState(0);

  const storyOptions = [
    [
      { text: t('option1_1'), nextStage: 1 },
      { text: t('option1_2'), nextStage: 2 },
    ],
    [
      { text: t('option2_1'), nextStage: 3 },
      { text: t('option2_2'), nextStage: 4 },
    ],
    [
      { text: t('option3_1'), nextStage: 5 },
      { text: t('option3_2'), nextStage: 6 },
    ],
    [
      { text: t('option4_1'), nextStage: 7 },
      { text: t('option4_2'), nextStage: 8 },
    ],
    [
      { text: t('option5_1'), nextStage: 9 },
      { text: t('option5_2'), nextStage: 10 },
    ],
    [
      { text: t('option6_1'), nextStage: 11 },
      { text: t('option6_2'), nextStage: 12 },
    ],
    [
      { text: t('option7_1'), nextStage: 13 },
      { text: t('option7_2'), nextStage: 14 },
    ],
    [
      { text: t('option8_1'), nextStage: 15 },
      { text: t('option8_2'), nextStage: 16 },
    ],
    [
      { text: t('option9_1'), nextStage: 17 },
      { text: t('option9_2'), nextStage: 18 },
    ],
    [
      { text: t('option10_1'), nextStage: 19 },
      { text: t('option10_2'), nextStage: 20 },
    ],
    [
      { text: t('option11_1'), nextStage: 21 },
      { text: t('option11_2'), nextStage: 22 },
    ],
    [
      { text: t('option12_1'), nextStage: 23 },
      { text: t('option12_2'), nextStage: 24 },
    ],
    [
      { text: t('option13_1'), nextStage: 25 },
      { text: t('option13_2'), nextStage: 26 },
    ],
    [
      { text: t('option14_1'), nextStage: 27 },
      { text: t('option14_2'), nextStage: 28 },
    ],
    [
      { text: t('option15_1'), nextStage: 29 },
      { text: t('option15_2'), nextStage: 30 },
    ],
    [
      { text: t('option16_1'), nextStage: 31 },
      { text: t('option16_2'), nextStage: 32 },
    ],
    [
      { text: t('option17_1'), nextStage: 33 },
      { text: t('option17_2'), nextStage: 34 },
    ],
    [
      { text: t('option18_1'), nextStage: 35 },
      { text: t('option18_2'), nextStage: 36 },
    ],
    [
      { text: t('option19_1'), nextStage: 37 },
      { text: t('option19_2'), nextStage: 38 },
    ],
    [
      { text: t('option20_1'), nextStage: 39 },
      { text: t('option20_2'), nextStage: 40 },
    ],
    [
      { text: t('option21_1'), nextStage: 41 },
      { text: t('option21_2'), nextStage: 42 },
    ],
    [
      { text: t('option22_1'), nextStage: 43 },
      { text: t('option22_2'), nextStage: 44 },
    ],
    [
      { text: t('option23_1'), nextStage: 45 },
      { text: t('option23_2'), nextStage: 46 },
    ],
    [
      { text: t('option24_1'), nextStage: 47 },
      { text: t('option24_2'), nextStage: 48 },
    ],
    [
      { text: t('option25_1'), nextStage: 49 },
      { text: t('option25_2'), nextStage: 50 },
    ],
    [
      { text: t('option26_1'), nextStage: 51 },
      { text: t('option26_2'), nextStage: 52 },
    ],
    [
      { text: t('option27_1'), nextStage: 53 },
      { text: t('option27_2'), nextStage: 54 },
    ],
    [
      { text: t('option28_1'), nextStage: 55 },
      { text: t('option28_2'), nextStage: 56 },
    ],
    [
      { text: t('option29_1'), nextStage: 57 },
      { text: t('option29_2'), nextStage: 58 },
    ],
    [
      { text: t('option30_1'), nextStage: 59 },
      { text: t('option30_2'), nextStage: 60 },
    ],
    [
      { text: t('option31_1'), nextStage: 61 },
      { text: t('option31_2'), nextStage: 62 },
    ],
    [
      { text: t('option32_1'), nextStage: 63 },
      { text: t('option32_2'), nextStage: 64 },
    ],
    [
      { text: t('option33_1'), nextStage: 65 },
      { text: t('option33_2'), nextStage: 66 },
    ],
    [
      { text: t('option34_1'), nextStage: 67 },
      { text: t('option34_2'), nextStage: 68 },
    ],
    [
      { text: t('option35_1'), nextStage: 69 },
      { text: t('option35_2'), nextStage: 70 },
    ],
    [
      { text: t('option36_1'), nextStage: 71 },
      { text: t('option36_2'), nextStage: 72 },
    ],
    [
      { text: t('option37_1'), nextStage: 73 },
      { text: t('option37_2'), nextStage: 74 },
    ],
    [
      { text: t('option38_1'), nextStage: 75 },
      { text: t('option38_2'), nextStage: 76 },
    ],
    [
      { text: t('option39_1'), nextStage: 77 },
      { text: t('option39_2'), nextStage: 78 },
    ],
    [
      { text: t('option40_1'), nextStage: 79 },
      { text: t('option40_2'), nextStage: 80 },
    ],
    [
      { text: t('option41_1'), nextStage: 81 },
      { text: t('option41_2'), nextStage: 82 },
    ],
    [
      { text: t('option42_1'), nextStage: 83 },
      { text: t('option42_2'), nextStage: 84 },
    ],
    [
      { text: t('option43_1'), nextStage: 85 },
      { text: t('option43_2'), nextStage: 86 },
    ],
    [
      { text: t('option44_1'), nextStage: 87 },
      { text: t('option44_2'), nextStage: 88 },
    ],
    [
      { text: t('option45_1'), nextStage: 89 },
      { text: t('option45_2'), nextStage: 90 },
    ],
    [
      { text: t('option46_1'), nextStage: 91 },
      { text: t('option46_2'), nextStage: 92 },
    ],
    [
      { text: t('option47_1'), nextStage: 93 },
      { text: t('option47_2'), nextStage: 94 },
    ],
    [
      { text: t('option48_1'), nextStage: 95 },
      { text: t('option48_2'), nextStage: 96 },
    ],
    [
      { text: t('option49_1'), nextStage: 97 },
      { text: t('option49_2'), nextStage: 98 },
    ],
    [
      { text: t('option50_1'), nextStage: 99 },
      { text: t('option50_2'), nextStage: 100 },
    ],
    [
      { text: t('option51_1'), nextStage: 101 },
      { text: t('option51_2'), nextStage: 102 },
    ],
    [
      { text: t('option52_1'), nextStage: 103 },
      { text: t('option52_2'), nextStage: 104 },
    ],
    [
      { text: t('option53_1'), nextStage: 105 },
      { text: t('option53_2'), nextStage: 106 },
    ],
    [
      { text: t('option54_1'), nextStage: 107 },
      { text: t('option54_2'), nextStage: 108 },
    ],
    [
      { text: t('option55_1'), nextStage: 109 },
      { text: t('option55_2'), nextStage: 110 },
    ],
    [
      { text: t('option56_1'), nextStage: 111 },
      { text: t('option56_2'), nextStage: 112 },
    ],
    [
      { text: t('option57_1'), nextStage: 113 },
      { text: t('option57_2'), nextStage: 114 },
    ],
    [
      { text: t('option58_1'), nextStage: 115 },
      { text: t('option58_2'), nextStage: 116 },
    ],
    [
      { text: t('option59_1'), nextStage: 117 },
      { text: t('option59_2'), nextStage: 118 },
    ],
    [
      { text: t('option60_1'), nextStage: 119 },
      { text: t('option60_2'), nextStage: 120 },
    ],
    [
      { text: t('option61_1'), nextStage: 121 },
      { text: t('option61_2'), nextStage: 122 },
    ],
    [
      { text: t('option62_1'), nextStage: 123 },
      { text: t('option62_2'), nextStage: 124 },
    ],
    [
      { text: t('option63_1'), nextStage: 125 },
      { text: t('option63_2'), nextStage: 126 },
    ],
    [
      { text: t('option64_1'), nextStage: 127 },
      { text: t('option64_2'), nextStage: 128 },
    ],
    [
      { text: t('option65_1'), nextStage: 129 },
      { text: t('option65_2'), nextStage: 130 },
    ],
    [
      { text: t('option66_1'), nextStage: 131 },
      { text: t('option66_2'), nextStage: 132 },
    ],
    [
      { text: t('option67_1'), nextStage: 133 },
      { text: t('option67_2'), nextStage: 134 },
    ],
    [
      { text: t('option68_1'), nextStage: 135 },
      { text: t('option68_2'), nextStage: 136 },
    ],
    [
      { text: t('option69_1'), nextStage: 137 },
      { text: t('option69_2'), nextStage: 138 },
    ],
    [
      { text: t('option70_1'), nextStage: 139 },
      { text: t('option70_2'), nextStage: 140 },
    ],
    [
      { text: t('option71_1'), nextStage: 141 },
      { text: t('option71_2'), nextStage: 142 },
    ],
    [
      { text: t('option72_1'), nextStage: 143 },
      { text: t('option72_2'), nextStage: 144 },
    ],
    [
      { text: t('option73_1'), nextStage: 145 },
      { text: t('option73_2'), nextStage: 146 },
    ],
    [
      { text: t('option74_1'), nextStage: 147 },
      { text: t('option74_2'), nextStage: 148 },
    ],
    [
      { text: t('option75_1'), nextStage: 149 },
      { text: t('option75_2'), nextStage: 150 },
    ],
    [
      { text: t('option76_1'), nextStage: 151 },
      { text: t('option76_2'), nextStage: 152 },
    ],
    [
      { text: t('option77_1'), nextStage: 153 },
      { text: t('option77_2'), nextStage: 154 },
    ],
    [
      { text: t('option78_1'), nextStage: 155 },
      { text: t('option78_2'), nextStage: 156 },
    ],
    [
      { text: t('option79_1'), nextStage: 157 },
      { text: t('option79_2'), nextStage: 158 },
    ],
    [
      { text: t('option80_1'), nextStage: 159 },
      { text: t('option80_2'), nextStage: 160 },
    ],
  ];

  const handleOptionSelect = () => {
    if (storyOptions[storyStage]) {
      setStoryStage(storyOptions[storyStage][0].nextStage);
      setCurrentOption(null);
    }
  };

  return (
    <Card>
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-4">{t(`stage${storyStage + 1}_title`)}</h2>
        <p className="text-gray-700 mb-6">{t(`stage${storyStage + 1}_text`)}</p>

        {storyOptions[storyStage] && storyOptions[storyStage].map((option, index) => (
          <CustomButton
            key={index}
            variant="outline"
            className="w-full mb-2 justify-start"
            onClick={() => setCurrentOption(option.text)}
          >
            <ArrowRight size={16} className="mr-2" />
            {option.text}
          </CustomButton>
        ))}

        <CustomButton 
          className="mt-4"
          onClick={handleOptionSelect}
          startIcon={<Play size={16} />}
        >
          Continue the story
        </CustomButton>
      </CardContent>
    </Card>
  );
};

export default StorytellingQuiz;
