
import React from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { UserPlus, User, Users, Send, Search } from 'lucide-react';

interface ConnectionsDrawerProps {
  children?: React.ReactNode;
}

const ConnectionsDrawer = ({ children }: ConnectionsDrawerProps) => {
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
  ];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || (
          <Button variant="ghost" size="icon">
            <Users size={20} className="text-gray-600" />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-4xl">
          <DrawerHeader>
            <DrawerTitle>Connections</DrawerTitle>
            <DrawerDescription>Connect with fellow aspirants and mentors</DrawerDescription>
          </DrawerHeader>
          
          <Tabs defaultValue="myConnections" className="px-4 pb-2">
            <div className="flex items-center justify-between mb-4">
              <TabsList>
                <TabsTrigger value="myConnections">My Connections</TabsTrigger>
                <TabsTrigger value="requests">
                  Requests
                  {connectionRequests.length > 0 && (
                    <Badge className="ml-2 bg-upsc-purple text-white" variant="secondary">
                      {connectionRequests.length}
                    </Badge>
                  )}
                </TabsTrigger>
                <TabsTrigger value="suggested">Suggested</TabsTrigger>
              </TabsList>
              
              <div className="relative w-60">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input placeholder="Search connections..." className="pl-8" />
              </div>
            </div>
            
            <TabsContent value="myConnections" className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {connections.map((connection) => (
                  <div key={connection.id} className="flex items-center justify-between p-3 rounded-lg border bg-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-upsc-purple text-white">
                        {connection.avatar}
                      </div>
                      <div>
                        <h4 className="font-medium">{connection.name}</h4>
                        <p className="text-xs text-gray-500">{connection.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {connection.online ? (
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          Online
                        </Badge>
                      ) : (
                        <span className="text-xs text-gray-500">
                          {connection.lastActive}
                        </span>
                      )}
                      <Button size="sm" variant="ghost">
                        <Send size={16} className="text-upsc-purple" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="requests" className="mt-0">
              <div className="space-y-4">
                {connectionRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-3 rounded-lg border bg-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700">
                        {request.avatar}
                      </div>
                      <div>
                        <h4 className="font-medium">{request.name}</h4>
                        <p className="text-xs text-gray-500">{request.role}</p>
                        <p className="text-xs text-gray-500">
                          {request.mutualConnections} mutual connections
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="bg-upsc-purple hover:bg-upsc-purple-dark">
                        Accept
                      </Button>
                      <Button size="sm" variant="outline">
                        Decline
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="suggested" className="mt-0">
              <div className="space-y-4">
                {suggestedConnections.map((suggestion) => (
                  <div key={suggestion.id} className="flex items-center justify-between p-3 rounded-lg border bg-white">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-gray-700">
                        {suggestion.avatar}
                      </div>
                      <div>
                        <h4 className="font-medium">{suggestion.name}</h4>
                        <p className="text-xs text-gray-500">{suggestion.role}</p>
                        <p className="text-xs text-gray-500">
                          {suggestion.mutualConnections} mutual connections
                        </p>
                      </div>
                    </div>
                    <div>
                      <Button size="sm" className="bg-upsc-purple hover:bg-upsc-purple-dark">
                        <UserPlus size={16} className="mr-1" />
                        Connect
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ConnectionsDrawer;
