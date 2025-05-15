
import React from 'react';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface OnboardingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export default function OnboardingCard({ title, description, icon, className }: OnboardingCardProps) {
  return (
    <Card className={cn("flex flex-col items-center p-6 text-center animate-fade-in", className)}>
      <div className="text-primary-blue mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
}
