
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Target, 
  Calendar, 
  Activity, 
  Star, 
  Clock, 
  CheckCircle, 
  XCircle,
  TrendingUp,
  Users,
  Award,
  Mail,
  Phone,
  Edit
} from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const mediatorProfile = {
    name: "Dr. Priya Sharma",
    email: "priya.sharma@mediation.in",
    phone: "+91 98765 43210",
    specialization: ["Commercial Disputes", "Family Mediation", "Property Disputes"],
    languages: ["English", "Hindi", "Gujarati"],
    experience: "8 years",
    rating: 4.8,
    totalCases: 156,
    successRate: 92,
    verified: true
  };

  const goalTracker = {
    monthlyTarget: 15,
    completed: 12,
    inProgress: 3,
    pending: 2
  };

  const sessionRequests = [
    {
      id: 1,
      caseType: "Commercial Dispute",
      parties: ["ABC Corp", "XYZ Ltd"],
      requestedDate: "2024-05-30",
      status: "pending",
      priority: "high"
    },
    {
      id: 2,
      caseType: "Family Mediation",
      parties: ["Rajesh Kumar", "Sunita Kumar"],
      requestedDate: "2024-06-02",
      status: "accepted",
      priority: "medium"
    },
    {
      id: 3,
      caseType: "Property Dispute",
      parties: ["Amit Patel", "Housing Society"],
      requestedDate: "2024-06-05",
      status: "pending",
      priority: "low"
    }
  ];

  const activityLogs = [
    {
      id: 1,
      action: "Case Completed",
      details: "Successfully resolved commercial dispute between ABC Corp and XYZ Ltd",
      timestamp: "2024-05-25 14:30",
      type: "success"
    },
    {
      id: 2,
      action: "Session Scheduled",
      details: "Family mediation session scheduled for June 2nd",
      timestamp: "2024-05-24 10:15",
      type: "info"
    },
    {
      id: 3,
      action: "New Request",
      details: "Received new mediation request for property dispute",
      timestamp: "2024-05-23 16:45",
      type: "warning"
    },
    {
      id: 4,
      action: "Profile Updated",
      details: "Updated specialization and language preferences",
      timestamp: "2024-05-22 09:20",
      type: "info"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'warning': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'error': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <Activity className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Mediator Dashboard</h1>
          <p className="text-blue-700">Welcome back, {mediatorProfile.name}</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-blue-100 p-1 rounded-lg">
          {[
            { id: 'overview', label: 'Overview', icon: User },
            { id: 'requests', label: 'Session Requests', icon: Calendar },
            { id: 'activity', label: 'Activity Logs', icon: Activity }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-blue-700 shadow-sm'
                  : 'text-blue-600 hover:text-blue-700'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Profile Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Profile Information</span>
                  <Button variant="ghost" size="sm" className="ml-auto">
                    <Edit className="h-4 w-4" />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-blue-900 mb-2">{mediatorProfile.name}</h3>
                      <div className="flex items-center space-x-2 mb-2">
                        {mediatorProfile.verified && (
                          <Badge className="bg-green-100 text-green-800">
                            <Award className="h-3 w-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{mediatorProfile.rating}</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-blue-700">
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4" />
                          <span>{mediatorProfile.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4" />
                          <span>{mediatorProfile.phone}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Specializations</h4>
                      <div className="flex flex-wrap gap-1">
                        {mediatorProfile.specialization.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-900 mb-2">Languages</h4>
                      <div className="flex flex-wrap gap-1">
                        {mediatorProfile.languages.map((lang, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-900">{mediatorProfile.totalCases}</div>
                        <div className="text-sm text-blue-700">Total Cases</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-900">{mediatorProfile.successRate}%</div>
                        <div className="text-sm text-green-700">Success Rate</div>
                      </div>
                    </div>
                    <div className="text-center p-4 bg-yellow-50 rounded-lg">
                      <div className="text-2xl font-bold text-yellow-900">{mediatorProfile.experience}</div>
                      <div className="text-sm text-yellow-700">Experience</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Goal Tracker */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Monthly Goal Tracker</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-xl font-bold text-blue-900">{goalTracker.monthlyTarget}</div>
                    <div className="text-sm text-blue-700">Monthly Target</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-xl font-bold text-green-900">{goalTracker.completed}</div>
                    <div className="text-sm text-green-700">Completed</div>
                  </div>
                  <div className="text-center p-4 bg-yellow-50 rounded-lg">
                    <div className="text-xl font-bold text-yellow-900">{goalTracker.inProgress}</div>
                    <div className="text-sm text-yellow-700">In Progress</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-xl font-bold text-red-900">{goalTracker.pending}</div>
                    <div className="text-sm text-red-700">Pending</div>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-blue-700 mb-2">
                    <span>Progress</span>
                    <span>{Math.round((goalTracker.completed / goalTracker.monthlyTarget) * 100)}%</span>
                  </div>
                  <div className="w-full bg-blue-100 rounded-full h-3">
                    <div 
                      className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${(goalTracker.completed / goalTracker.monthlyTarget) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Session Requests Tab */}
        {activeTab === 'requests' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Session Requests</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sessionRequests.map((request) => (
                  <div key={request.id} className="border border-blue-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold text-blue-900">{request.caseType}</h3>
                        <div className="flex items-center space-x-2 text-sm text-blue-700 mt-1">
                          <Users className="h-4 w-4" />
                          <span>{request.parties.join(" vs ")}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Badge className={getStatusColor(request.status)}>
                          {request.status}
                        </Badge>
                        <Badge className={getPriorityColor(request.priority)}>
                          {request.priority}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-blue-600">
                        Requested Date: {request.requestedDate}
                      </div>
                      <div className="space-x-2">
                        {request.status === 'pending' && (
                          <>
                            <Button size="sm" variant="outline" className="text-red-600 border-red-200">
                              Decline
                            </Button>
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Accept
                            </Button>
                          </>
                        )}
                        {request.status === 'accepted' && (
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Activity Logs Tab */}
        {activeTab === 'activity' && (
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5" />
                <span>Activity Logs</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {activityLogs.map((log) => (
                  <div key={log.id} className="flex items-start space-x-3 p-3 border border-blue-100 rounded-lg hover:bg-blue-50 transition-colors">
                    <div className="flex-shrink-0 mt-1">
                      {getActivityIcon(log.type)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-blue-900">{log.action}</h4>
                      <p className="text-sm text-blue-700 mt-1">{log.details}</p>
                      <p className="text-xs text-blue-500 mt-2">{log.timestamp}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
