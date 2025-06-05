
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Video, Users, Plus, Calendar, Shield, Clock } from 'lucide-react';

const OnlineMediation = () => {
  const [activeTab, setActiveTab] = useState('create');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Online Mediation Platform
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Conduct secure, confidential mediation sessions from anywhere with our online platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
              <div className="flex border-b border-slate-200">
                <button
                  onClick={() => setActiveTab('create')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'create'
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Plus className="h-5 w-5 mx-auto mb-2" />
                  Create Session
                </button>
                <button
                  onClick={() => setActiveTab('join')}
                  className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                    activeTab === 'join'
                      ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Users className="h-5 w-5 mx-auto mb-2" />
                  Join Session
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'create' ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Create New Mediation Session</h3>
                      <p className="text-slate-600 mb-6">Set up a secure mediation room and invite all parties</p>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Case Title
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter case or dispute title"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Scheduled Date
                          </label>
                          <input
                            type="date"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">
                            Scheduled Time
                          </label>
                          <input
                            type="time"
                            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Mediator
                        </label>
                        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Select a mediator</option>
                          <option>Dr. Anjali Sharma - Commercial Disputes</option>
                          <option>Advocate Rajesh Kumar - Property & Real Estate</option>
                          <option>Ms. Priya Patel - Family & Personal</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Party Emails (comma separated)
                        </label>
                        <textarea
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          rows={3}
                          placeholder="party1@email.com, party2@email.com"
                        />
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Video className="mr-2 h-5 w-5" />
                        Create Mediation Room
                      </Button>
                    </form>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">Join Mediation Session</h3>
                      <p className="text-slate-600 mb-6">Enter your session ID or invitation link to join</p>
                    </div>

                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Session ID or Invitation Link
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter session ID or paste invitation link"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Your Role
                        </label>
                        <select className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                          <option>Select your role</option>
                          <option>Party 1</option>
                          <option>Party 2</option>
                          <option>Legal Representative</option>
                          <option>Observer</option>
                        </select>
                      </div>

                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <Users className="mr-2 h-5 w-5" />
                        Join Session
                      </Button>
                    </form>
                  </div>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure & Private</h3>
                <p className="text-slate-600">End-to-end encryption ensures all communications remain confidential</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Flexible Scheduling</h3>
                <p className="text-slate-600">Schedule sessions at convenient times for all parties involved</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Access</h3>
                <p className="text-slate-600">Access your mediation sessions anytime, anywhere with internet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OnlineMediation;
