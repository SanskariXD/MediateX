
import React from 'react';
import { Scale, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-green-400" />
              <span className="text-xl font-bold">MediationAware</span>
            </div>
            <p className="text-blue-200 leading-relaxed">
              Empowering peaceful dispute resolution through mediation awareness and education 
              under the Mediation Act 2023.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Mail className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors cursor-pointer">
                <Phone className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Learn</h3>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/about" className="hover:text-green-400 transition-colors">What is Mediation?</Link></li>
              <li><Link to="/how-it-works" className="hover:text-green-400 transition-colors">How It Works</Link></li>
              <li><Link to="/legal-info" className="hover:text-green-400 transition-colors">Mediation Act 2023</Link></li>
              <li><Link to="/faq" className="hover:text-green-400 transition-colors">FAQs</Link></li>
              <li><Link to="/legal-terms" className="hover:text-green-400 transition-colors">Legal Terms</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-blue-200">
              <li><Link to="/mediators" className="hover:text-green-400 transition-colors">Find Mediators</Link></li>
              <li><Link to="/online-mediation" className="hover:text-green-400 transition-colors">Online Mediation</Link></li>
              <li><Link to="/invite" className="hover:text-green-400 transition-colors">Invite Party</Link></li>
              <li><Link to="/stats" className="hover:text-green-400 transition-colors">Statistics</Link></li>
              <li><Link to="/dashboard" className="hover:text-green-400 transition-colors">Mediator Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span>info@mediationaware.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span>1800-MEDIATE</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-green-400 mt-1" />
                <span>Legal Education Center<br />New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-300 text-sm">
              © 2024 MediationAware. A non-commercial legal awareness initiative.
            </div>
            <div className="flex items-center space-x-6 text-sm text-blue-300">
              <Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Use</Link>
              <a href="#" className="hover:text-green-400 transition-colors flex items-center">
                Legal Disclaimer <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
