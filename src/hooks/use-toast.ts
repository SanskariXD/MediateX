
import { useState, useEffect } from 'react';

// Define the Toast structure
type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  variant?: "default" | "destructive";
};

// Return type for useToast
type UseToastReturn = {
  toasts: Toast[];
  toast: (props: Omit<Toast, "id">) => void;
  dismiss: (id: string) => void;
};

export function useToast(): UseToastReturn {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = ({ ...props }: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).slice(2, 11);
    setToasts((prevToasts) => [...prevToasts, { id, ...props }]);

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, 5000);
  };

  const dismiss = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return {
    toasts,
    toast,
    dismiss,
  };
}

// Export a singleton toast function for use outside of components
let toasts: Toast[] = [];
let listeners: Function[] = [];

const updateToasts = (newToasts: Toast[]) => {
  toasts = newToasts;
  listeners.forEach(listener => listener(toasts));
};

export const toast = (props: Omit<Toast, "id">) => {
  const id = Math.random().toString(36).slice(2, 11);
  updateToasts([...toasts, { id, ...props }]);
  
  // Auto dismiss
  setTimeout(() => {
    updateToasts(toasts.filter(toast => toast.id !== id));
  }, 5000);
};
