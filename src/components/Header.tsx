import React, { useState, useEffect } from 'react';
import { Globe, Menu, X, Scale } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
//import { useLanguage } from '@/lib/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  //const { language, setLanguage } = useLanguage();
  const location = useLocation();

  const languages = ['English', 'हिंदी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'ગુજરાતી'];

  const isActive = (path: string) => location.pathname === path;

  // Update selected language when context language changes
  //useEffect(() => {
    // No local state needed for selectedLanguage, using context language directly
  //}, [language]);

 // const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
   // setLanguage(e.target.value);
  //};

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-blue-900">MediateX</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/about" 
              className={`text-blue-700 hover:text-blue-600 transition-colors font-medium ${
                isActive('/about') ? 'text-blue-600 border-b-2 border-blue-600' : ''
              }`}
            >
              About Mediation
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-blue-700 hover:text-blue-600 transition-colors font-medium ${
                isActive('/how-it-works') ? 'text-blue-600 border-b-2 border-blue-600' : ''
              }`}
            >
              Find Mediators
            </Link>
            
            <Link 
              to="/legal-info" 
              className={`text-blue-700 hover:text-blue-600 transition-colors font-medium ${
                isActive('/legal-info') ? 'text-blue-600 border-b-2 border-blue-600' : ''
              }`}
            >
              Legal Resources
            </Link>
            <Link 
              to="/stats" 
              className={`text-blue-700 hover:text-blue-600 transition-colors font-medium ${
                isActive('/stats') ? 'text-blue-600 border-b-2 border-blue-600' : ''
              }`}
            >
              Statistics
            </Link>
            <Link 
              to="/contact" 
              className={`text-blue-700 hover:text-blue-600 transition-colors font-medium ${
                isActive('/contact') ? 'text-blue-600 border-b-2 border-blue-600' : ''
              }`}
            >
              Contact Us
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <select 
                //value={language} 
                //onChange={handleLanguageChange}
                className="flex items-center space-x-1 border border-blue-200 rounded-lg px-3 py-1 text-sm bg-white text-blue-700 focus:ring-2 focus:ring-blue-500"
              >
                {languages.map(lang => (
                  <option key={lang} value={lang}>{lang}</option>
                ))}
              </select>
            </div>
            
            <Link to="/login">
              <Button variant="outline" className="hidden md:inline-flex border-blue-300 text-blue-700 hover:bg-blue-50">
                Login
              </Button>
            </Link>
            
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white hidden md:inline-flex">
                Register
              </Button>
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 text-blue-700"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-100">
            <nav className="flex flex-col space-y-4">
              <Link to="/about" className="text-blue-700 hover:text-blue-600 transition-colors">About Mediation</Link>
              <Link to="/mediators" className="text-blue-700 hover:text-blue-600 transition-colors">Find Mediators</Link>
              <Link to="/legal-info" className="text-blue-700 hover:text-blue-600 transition-colors">Legal Resources</Link>
              <Link to="/stats" className="text-blue-700 hover:text-blue-600 transition-colors">Statistics</Link>
              <Link to="/contact" className="text-blue-700 hover:text-blue-600 transition-colors">Contact</Link>
              <div className="flex space-x-2 pt-2">
                <Link to="/login">
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">Login</Button>
                </Link>
                <Link to="/register">
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Register</Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
