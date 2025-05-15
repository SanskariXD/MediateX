
import React, { ReactNode } from 'react';

export interface StepProps {
  icon?: ReactNode;
  children: ReactNode;
}

export const Step = ({ icon, children }: StepProps) => {
  return (
    <div className="flex gap-4">
      {icon && <div className="flex-shrink-0 mt-1">{icon}</div>}
      <div className="flex-1">{children}</div>
    </div>
  );
};

export interface StepsProps {
  children: ReactNode;
}

export const Steps = ({ children }: StepsProps) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <div className="space-y-8">
      {childrenArray.map((child, index) => (
        <div key={index} className="relative">
          {index < childrenArray.length - 1 && (
            <div 
              className="absolute h-full w-0.5 bg-muted-foreground/20 left-4 top-8 -bottom-8 transform -translate-x-1/2" 
              style={{ opacity: 0.5 }} 
            />
          )}
          {child}
        </div>
      ))}
    </div>
  );
};
