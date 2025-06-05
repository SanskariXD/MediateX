
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const Stats = () => {
  const [selectedState, setSelectedState] = useState('All States');

  const stateData = [
    { state: 'Delhi', cases: 2450, resolved: 2200, active: 250 },
    { state: 'Mumbai', cases: 1890, resolved: 1650, active: 240 },
    { state: 'Bangalore', cases: 1560, resolved: 1420, active: 140 },
    { state: 'Chennai', cases: 1200, resolved: 1080, active: 120 },
    { state: 'Hyderabad', cases: 980, resolved: 890, active: 90 },
    { state: 'Pune', cases: 750, resolved: 680, active: 70 },
  ];

  const caseTypeData = [
    { name: 'Commercial', value: 35, color: '#3B82F6' },
    { name: 'Property', value: 28, color: '#10B981' },
    { name: 'Family', value: 22, color: '#F59E0B' },
    { name: 'Employment', value: 15, color: '#EF4444' },
  ];

  const monthlyData = [
    { month: 'Jan', cases: 820 },
    { month: 'Feb', cases: 950 },
    { month: 'Mar', cases: 1120 },
    { month: 'Apr', cases: 1350 },
    { month: 'May', cases: 1580 },
    { month: 'Jun', cases: 1720 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
              Mediation Statistics
            </h1>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Real-time insights into mediation activity across India
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-700 font-medium">Total Cases</p>
                  <p className="text-3xl font-bold text-blue-900">15,420</p>
                </div>
                <TrendingUp className="h-12 w-12 text-blue-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-700 font-medium">Resolved</p>
                  <p className="text-3xl font-bold text-green-600">14,250</p>
                </div>
                <Users className="h-12 w-12 text-green-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-700 font-medium">Active</p>
                  <p className="text-3xl font-bold text-orange-600">89</p>
                </div>
                <Calendar className="h-12 w-12 text-orange-600" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-700 font-medium">Mediators</p>
                  <p className="text-3xl font-bold text-purple-600">1,250</p>
                </div>
                <MapPin className="h-12 w-12 text-purple-600" />
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* State-wise Cases */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Cases by State</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={stateData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="state" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="resolved" fill="#10B981" name="Resolved" />
                  <Bar dataKey="active" fill="#F59E0B" name="Active" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Case Types */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-blue-900 mb-6">Case Types Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={caseTypeData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {caseTypeData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Monthly Trend */}
          <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 mb-12">
            <h3 className="text-xl font-bold text-blue-900 mb-6">Monthly Case Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cases" stroke="#3B82F6" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Success Metrics */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">Success Metrics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">92.4%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">₹2.5L</div>
                <div className="text-blue-100">Avg. Cost Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">45 days</div>
                <div className="text-blue-100">Avg. Resolution Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Stats;
