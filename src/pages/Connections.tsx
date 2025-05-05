
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, UserPlus } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ChatDrawer from '@/components/chat/ChatDrawer';

const Connections = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock connections data
  const connections = [
    {
      id: '1',
      name: 'Vikram Singh',
      role: 'AIR 78, CSE 2022',
      avatar: 'VS',
      online: true,
    },
    {
      id: '2',
      name: 'Priya Sharma',
      role: 'UPSC 2024 Aspirant',
      avatar: 'PS',
      online: true,
    },
    {
      id: '3',
      name: 'Rajat Verma',
      role: 'Economics Optional',
      avatar: 'RV',
      online: false,
      lastActive: '2h ago',
    },
    {
      id: '4',
      name: 'Anjali Singh',
      role: 'Geography Optional',
      avatar: 'AS',
      online: false,
      lastActive: '1d ago',
    },
  ];

  // Mock connection requests
  const connectionRequests = [
    {
      id: '10',
      name: 'Siddharth Kumar',
      role: 'UPSC 2025 Aspirant',
      avatar: 'SK',
      mutualConnections: 3,
    },
    {
      id: '11',
      name: 'Neha Gupta',
      role: 'AIR 120, CSE 2023',
      avatar: 'NG',
      mutualConnections: 5,
    },
  ];

  // Mock suggested connections
  const suggestedConnections = [
    {
      id: '20',
      name: 'Raghav Menon',
      role: 'UPSC Mentor',
      avatar: 'RM',
      mutualConnections: 8,
    },
    {
      id: '21',
      name: 'Meera Reddy',
      role: 'History Optional',
      avatar: 'MR',
      mutualConnections: 2,
    },
    {
      id: '22',
      name: 'Arjun Khanna',
      role: 'UPSC 2026 Aspirant',
      avatar: 'AK',
      mutualConnections: 1,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Connections</h1>
        
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <Input 
            placeholder="Search connections..." 
            className="pl-10" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <Tabs defaultValue="myConnections" className="w-full">
          <TabsList className="w-full mb-4">
            <TabsTrigger value="myConnections" className="flex-1">My Connections</TabsTrigger>
            <TabsTrigger value="requests" className="flex-1">
              Requests
              {connectionRequests.length > 0 && (
                <Badge variant="destructive" className="ml-2">{connectionRequests.length}</Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="suggested" className="flex-1">Suggested</TabsTrigger>
          </TabsList>
          
          <TabsContent value="myConnections">
            <div className="space-y-4">
              {connections.map(connection => (
                <div key={connection.id} className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-sm">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-upsc-purple text-white flex items-center justify-center mr-3">
                      {connection.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium">{connection.name}</h3>
                      <p className="text-sm text-gray-500">{connection.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {connection.online ? (
                      <span className="text-xs text-green-600 font-medium mr-2 flex items-center">
                        <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                        Online
                      </span>
                    ) : (
                      <span className="text-xs text-gray-500 mr-2">
                        {connection.lastActive}
                      </span>
                    )}
                    <ChatDrawer connectionId={connection.id} connectionName={connection.name}>
                      <Button size="sm" className="bg-upsc-purple hover:bg-upsc-purple-dark">
                        Message
                      </Button>
                    </ChatDrawer>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="requests">
            <div className="space-y-4">
              {connectionRequests.length > 0 ? (
                connectionRequests.map(request => (
                  <div key={request.id} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 border rounded-lg bg-white shadow-sm">
                    <div className="flex items-center mb-3 sm:mb-0">
                      <div className="h-12 w-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3">
                        {request.avatar}
                      </div>
                      <div>
                        <h3 className="font-medium">{request.name}</h3>
                        <p className="text-sm text-gray-500">{request.role}</p>
                        <p className="text-xs text-gray-500">
                          {request.mutualConnections} mutual connections
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 justify-end">
                      <Button size="sm" className="bg-upsc-purple hover:bg-upsc-purple-dark">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <p>No pending connection requests</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="suggested">
            <div className="space-y-4">
              {suggestedConnections.map(suggestion => (
                <div key={suggestion.id} className="flex justify-between items-center p-4 border rounded-lg bg-white shadow-sm">
                  <div className="flex items-center">
                    <div className="h-12 w-12 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3">
                      {suggestion.avatar}
                    </div>
                    <div>
                      <h3 className="font-medium">{suggestion.name}</h3>
                      <p className="text-sm text-gray-500">{suggestion.role}</p>
                      <p className="text-xs text-gray-500">
                        {suggestion.mutualConnections} mutual connections
                      </p>
                    </div>
                  </div>
                  <Button size="sm" className="bg-upsc-purple hover:bg-upsc-purple-dark">
                    <UserPlus size={16} className="mr-1" />
                    Connect
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default Connections;
