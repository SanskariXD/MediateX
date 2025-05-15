
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface CustomButtonProps extends ButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}

export function CustomButton({
  children,
  startIcon,
  endIcon,
  className,
  ...props
}: CustomButtonProps) {
  return (
    <Button className={cn("flex items-center gap-2", className)} {...props}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Button>
  );
}
