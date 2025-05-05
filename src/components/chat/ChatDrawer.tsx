
import React, { useState } from 'react';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Send, Plus } from 'lucide-react';

interface ChatDrawerProps {
  children?: React.ReactNode;
  connectionId?: string;
  connectionName?: string;
}

interface Message {
  id: string;
  senderId: string;
  text: string;
  timestamp: Date;
  senderName: string;
  senderIsCurrentUser: boolean;
}

const ChatDrawer = ({ children, connectionId, connectionName }: ChatDrawerProps) => {
  const [messageText, setMessageText] = useState('');
  const [activeConnection, setActiveConnection] = useState({
    id: connectionId || '1',
    name: connectionName || 'Priya Sharma',
  });

  // Mock chat data
  const connections = [
    {
      id: '1',
      name: 'Priya Sharma',
      lastMessage: 'Thanks for sharing those notes!',
      avatar: 'PS',
      unread: 2,
      online: true,
    },
    {
      id: '2',
      name: 'Vikram Singh',
      lastMessage: 'Let me know if you have questions about the Economy section.',
      avatar: 'VS',
      unread: 0,
      online: true,
    },
    {
      id: '3',
      name: 'Aditya Kumar',
      lastMessage: 'Are you joining the polity study circle tomorrow?',
      avatar: 'AK',
      unread: 0,
      online: false,
    },
  ];

  // Mock messages
  const mockMessages: Record<string, Message[]> = {
    '1': [
      {
        id: '1-1',
        senderId: '1',
        text: 'Hi there! I saw you were studying for the same optional subject.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
        senderName: 'Priya Sharma',
        senderIsCurrentUser: false,
      },
      {
        id: '1-2',
        senderId: 'current-user',
        text: "Yes! I've been working through the Geography optional syllabus. How about you?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1.5), // 1.5 hours ago
        senderName: 'You',
        senderIsCurrentUser: true,
      },
      {
        id: '1-3',
        senderId: '1',
        text: 'Same here! I found some great notes on physical geography. Would you like me to share them?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 1), // 1 hour ago
        senderName: 'Priya Sharma',
        senderIsCurrentUser: false,
      },
      {
        id: '1-4',
        senderId: 'current-user',
        text: 'That would be amazing! Thank you so much!',
        timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
        senderName: 'You',
        senderIsCurrentUser: true,
      },
      {
        id: '1-5',
        senderId: '1',
        text: 'Just sent them to your email. Let me know what you think!',
        timestamp: new Date(Date.now() - 1000 * 60 * 20), // 20 minutes ago
        senderName: 'Priya Sharma',
        senderIsCurrentUser: false,
      },
      {
        id: '1-6',
        senderId: '1',
        text: 'Also, are you joining the weekly geography discussion this Thursday?',
        timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
        senderName: 'Priya Sharma',
        senderIsCurrentUser: false,
      },
    ],
    '2': [
      {
        id: '2-1',
        senderId: '2',
        text: 'Hi! I noticed you had questions about Economic Survey.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
        senderName: 'Vikram Singh',
        senderIsCurrentUser: false,
      },
      {
        id: '2-2',
        senderId: 'current-user',
        text: "Yes, I'm struggling with understanding some concepts in the monetary policy section.",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 23), // 23 hours ago
        senderName: 'You',
        senderIsCurrentUser: true,
      },
      {
        id: '2-3',
        senderId: '2',
        text: 'Let me know if you have questions about the Economy section.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 22), // 22 hours ago
        senderName: 'Vikram Singh',
        senderIsCurrentUser: false,
      },
    ],
    '3': [
      {
        id: '3-1',
        senderId: 'current-user',
        text: "Hey Aditya! How's your preparation going?",
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 48), // 2 days ago
        senderName: 'You',
        senderIsCurrentUser: true,
      },
      {
        id: '3-2',
        senderId: '3',
        text: 'Going well! Just finished the constitutional history section.',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 47), // 47 hours ago
        senderName: 'Aditya Kumar',
        senderIsCurrentUser: false,
      },
      {
        id: '3-3',
        senderId: '3',
        text: 'Are you joining the polity study circle tomorrow?',
        timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
        senderName: 'Aditya Kumar',
        senderIsCurrentUser: false,
      },
    ],
  };

  const messages = mockMessages[activeConnection.id] || [];

  const sendMessage = () => {
    if (!messageText.trim()) return;
    
    // In a real app, this would send the message to the backend
    console.log(`Sending message to ${activeConnection.name}: ${messageText}`);
    setMessageText('');
    
    // For demo purposes, we're just logging to console
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || (
          <Button variant="ghost" size="icon">
            <MessageSquare size={20} className="text-gray-600" />
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent className="h-[85vh]">
        <DrawerHeader className="text-left py-2 border-b">
          <DrawerTitle>Messages</DrawerTitle>
        </DrawerHeader>
        
        <div className="flex h-full">
          {/* Connections sidebar */}
          <div className="w-[30%] border-r p-2">
            <div className="flex justify-between items-center p-2">
              <h3 className="font-medium">Connections</h3>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Plus size={16} />
              </Button>
            </div>
            
            <div className="space-y-1 mt-2">
              {connections.map((connection) => (
                <button
                  key={connection.id}
                  className={`w-full flex items-center p-2 rounded-lg ${
                    activeConnection.id === connection.id
                      ? "bg-upsc-purple-light/10"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => setActiveConnection({
                    id: connection.id,
                    name: connection.name,
                  })}
                >
                  <div className="relative">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-full bg-upsc-purple text-white`}>
                      {connection.avatar}
                    </div>
                    {connection.online && (
                      <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                    )}
                  </div>
                  
                  <div className="ml-3 flex-1 overflow-hidden">
                    <div className="flex justify-between">
                      <p className="font-medium truncate">{connection.name}</p>
                      {connection.unread > 0 && (
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-upsc-purple text-xs text-white">
                          {connection.unread}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500 truncate">
                      {connection.lastMessage}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            <div className="p-3 border-b flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-upsc-purple text-white flex items-center justify-center mr-2">
                  {activeConnection.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-medium">{activeConnection.name}</h3>
              </div>
            </div>
            
            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderIsCurrentUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[70%] ${
                        message.senderIsCurrentUser
                          ? 'bg-upsc-purple text-white rounded-tl-lg rounded-tr-lg rounded-bl-lg'
                          : 'bg-gray-100 rounded-tl-lg rounded-tr-lg rounded-br-lg'
                      } p-3`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs mt-1 opacity-70">
                        {formatDistanceToNow(message.timestamp, { addSuffix: true })}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            {/* Message input */}
            <div className="p-3 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button onClick={sendMessage} className="bg-upsc-purple hover:bg-upsc-purple-dark">
                  <Send size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        <DrawerFooter className="border-t pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ChatDrawer;
