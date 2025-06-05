
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Send, Link2, Copy, Mail, Phone, MessageSquare } from 'lucide-react';

const InviteParty = () => {
  const [inviteMethod, setInviteMethod] = useState('email');
  const [inviteLink] = useState('https://mediationaware.in/invite/ABC123XYZ');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(inviteLink);
    // You would typically show a toast notification here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Invite Party to Mediation
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Send an invitation to the other party to join your mediation session
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Send Invitation</h2>
                <p className="text-slate-600">Choose how you'd like to invite the other party to mediation</p>
              </div>

              {/* Invitation Method Selection */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                <button
                  onClick={() => setInviteMethod('email')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    inviteMethod === 'email'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Mail className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <span className="font-medium">Email</span>
                </button>
                
                <button
                  onClick={() => setInviteMethod('sms')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    inviteMethod === 'sms'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <MessageSquare className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <span className="font-medium">SMS</span>
                </button>
                
                <button
                  onClick={() => setInviteMethod('link')}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    inviteMethod === 'link'
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <Link2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <span className="font-medium">Share Link</span>
                </button>
              </div>

              {/* Form based on selected method */}
              {inviteMethod === 'email' && (
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Recipient Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="other.party@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      defaultValue="Invitation to Mediation Session"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Personal Message (Optional)
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={4}
                      placeholder="Add a personal message to explain the mediation process..."
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="mr-2 h-5 w-5" />
                    Send Email Invitation
                  </Button>
                </form>
              )}

              {inviteMethod === 'sms' && (
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={3}
                      defaultValue="You're invited to join a mediation session. Please visit the link to participate."
                    />
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Send className="mr-2 h-5 w-5" />
                    Send SMS Invitation
                  </Button>
                </form>
              )}

              {inviteMethod === 'link' && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Invitation Link
                    </label>
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 border border-slate-300 rounded-l-lg bg-slate-50"
                        value={inviteLink}
                        readOnly
                      />
                      <Button
                        type="button"
                        onClick={copyToClipboard}
                        className="bg-blue-600 hover:bg-blue-700 text-white rounded-l-none"
                      >
                        <Copy className="h-5 w-5" />
                      </Button>
                    </div>
                    <p className="text-sm text-slate-600 mt-2">
                      Copy this link and share it with the other party
                    </p>
                  </div>
                  
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                    <h3 className="font-medium text-slate-900 mb-2">Share via:</h3>
                    <div className="flex space-x-3">
                      <Button variant="outline" size="sm" className="border-slate-300">WhatsApp</Button>
                      <Button variant="outline" size="sm" className="border-slate-300">Telegram</Button>
                      <Button variant="outline" size="sm" className="border-slate-300">Copy Link</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Information Card */}
            <div className="mt-8 bg-white rounded-xl shadow-lg border border-slate-200 p-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">What happens next?</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• The other party will receive your invitation</li>
                <li>• They can review the mediation details</li>
                <li>• Both parties need to agree on the mediator</li>
                <li>• Once confirmed, the mediation session will be scheduled</li>
                <li>• You'll receive confirmation and session details</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default InviteParty;
