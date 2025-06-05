
import React, { useState, useEffect } from 'react';
import { TrendingUp, CheckCircle, Clock, Users, MapPin } from 'lucide-react';

const LiveCaseCounter = () => {
  const [stats, setStats] = useState({
    totalCases: 15420,
    activeCases: 89,
    resolvedCases: 14250,
    mediators: 1250
  });

  // Simulate live updates every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        activeCases: Math.max(10, prev.activeCases + Math.floor(Math.random() * 5) - 2),
        totalCases: prev.totalCases + Math.floor(Math.random() * 2),
        resolvedCases: prev.resolvedCases + Math.floor(Math.random() * 2)
      }));
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ icon: Icon, label, value, color, isLive = false }) => (
    <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-blue-700 mb-1">{label}</p>
          <p className="text-3xl font-bold text-blue-900">
            {value.toLocaleString()}
          </p>
        </div>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      {isLive && (
        <div className="flex items-center mt-3 text-xs text-green-600">
          <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
          Live Updates
        </div>
      )}
    </div>
  );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Mediation Impact in Real-Time
          </h2>
          <p className="text-lg text-blue-700 max-w-2xl mx-auto">
            See how mediation is transforming dispute resolution across India. 
            These numbers update live as new cases are initiated and resolved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={TrendingUp}
            label="Total Cases Initiated"
            value={stats.totalCases}
            color="bg-blue-500"
            isLive={true}
          />
          <StatCard
            icon={Clock}
            label="Active Cases"
            value={stats.activeCases}
            color="bg-orange-500"
            isLive={true}
          />
          <StatCard
            icon={CheckCircle}
            label="Successfully Resolved"
            value={stats.resolvedCases}
            color="bg-green-500"
          />
          <StatCard
            icon={Users}
            label="Registered Mediators"
            value={stats.mediators}
            color="bg-purple-500"
          />
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Success Rate: 92.4%
              </h3>
              <p className="text-blue-700">
                Most mediation cases reach successful resolution, saving time and costs compared to litigation.
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">₹2.5L</div>
              <div className="text-sm text-blue-600">Avg. cost savings</div>
            </div>
          </div>
        </div>

        {/* Quick State Overview */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-4">
          {[
            { state: 'Delhi', cases: 2450 },
            { state: 'Mumbai', cases: 1890 },
            { state: 'Bangalore', cases: 1560 },
            { state: 'Chennai', cases: 1200 },
            { state: 'Hyderabad', cases: 980 },
            { state: 'Pune', cases: 750 }
          ].map((item) => (
            <div key={item.state} className="bg-white rounded-lg p-4 border border-blue-100 text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="h-4 w-4 text-blue-600 mr-1" />
              </div>
              <p className="font-semibold text-blue-900">{item.state}</p>
              <p className="text-sm text-blue-600">{item.cases} cases</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiveCaseCounter;
