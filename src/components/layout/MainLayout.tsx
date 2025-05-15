
import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, MessageSquare, BookOpen, Users, FileText, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LanguageSelector from '@/components/LanguageSelector';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface MainLayoutProps {
  children: ReactNode;
  title?: string;
}

export default function MainLayout({ children, title }: MainLayoutProps) {
  const { t } = useLanguage();
  const location = useLocation();
  
  const navItems = [
    { name: t('home'), path: '/dashboard', icon: Home },
    { name: t('chatbot'), path: '/chatbot', icon: MessageSquare },
    { name: t('learn'), path: '/learn', icon: BookOpen },
    { name: t('mediatorConnect'), path: '/mediator-connect', icon: Users },
    { name: t('community'), path: '/community', icon: Users },
    { name: t('resources'), path: '/resources', icon: FileText },
  ];

  const NavLinks = () => (
    <>
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        const ItemIcon = item.icon;
        
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg transition-colors ${
              isActive 
                ? 'bg-primary text-primary-foreground font-medium' 
                : 'hover:bg-secondary text-foreground'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            <ItemIcon size={24} />
            <span className="text-lg">{item.name}</span>
          </Link>
        );
      })}
    </>
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile header */}
      <header className="lg:hidden border-b px-4 py-3 bg-background sticky top-0 z-50 flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu size={24} />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[80%] sm:w-[350px]">
            <div className="flex flex-col gap-6 mt-8">
              <NavLinks />
              <div className="mt-auto pt-4 border-t">
                <LanguageSelector />
              </div>
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex-1 flex justify-center">
          <h1 className="text-xl font-bold">MediateX</h1>
        </div>
        
        <div className="w-10"></div> {/* Empty div for spacing */}
      </header>

      {/* Desktop layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop sidebar */}
        <aside className="hidden lg:flex lg:flex-col w-64 border-r bg-background p-4">
          <div className="text-2xl font-bold mb-8">MediateX</div>
          <nav className="space-y-2 flex-1">
            <NavLinks />
          </nav>
          <div className="pt-4 border-t mt-auto">
            <LanguageSelector />
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {title && <h1 className="text-2xl font-bold mb-6">{title}</h1>}
          {children}
        </main>
      </div>
    </div>
  );
}
