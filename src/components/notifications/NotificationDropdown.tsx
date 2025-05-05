
import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Bell, MessageSquare, User, Star, Trophy } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface NotificationProps {
  children?: React.ReactNode;
}

const NotificationDropdown = ({ children }: NotificationProps) => {
  // Mock notifications data
  const notifications = [
    {
      id: '1',
      type: 'connection',
      content: 'Priya Sharma sent you a connection request',
      icon: <User size={16} className="text-blue-500" />,
      time: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      read: false,
    },
    {
      id: '2',
      type: 'message',
      content: 'New message from Vikram Singh',
      icon: <MessageSquare size={16} className="text-green-500" />,
      time: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: false,
    },
    {
      id: '3',
      type: 'achievement',
      content: 'You earned the "Week Streak" badge!',
      icon: <Trophy size={16} className="text-amber-500" />,
      time: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
      read: true,
    },
    {
      id: '4',
      type: 'mention',
      content: 'Arjun mentioned you in a post',
      icon: <Star size={16} className="text-purple-500" />,
      time: new Date(Date.now() - 1000 * 60 * 60 * 20), // 20 hours ago
      read: true,
    },
  ];

  const unreadCount = notifications.filter((n) => !n.read).length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          {children ? (
            children
          ) : (
            <Bell size={20} className="text-gray-600" />
          )}
          {unreadCount > 0 && (
            <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-80">
        <DropdownMenuLabel className="flex justify-between items-center">
          <span>Notifications</span>
          <Button variant="link" size="sm" className="p-0 h-auto text-xs text-upsc-purple">
            Mark all as read
          </Button>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <DropdownMenuItem key={notification.id} className="flex items-start gap-2 p-3 cursor-pointer">
              <div className="mt-0.5">{notification.icon}</div>
              <div className="flex-1">
                <p className={notification.read ? "text-gray-600" : "font-medium"}>
                  {notification.content}
                </p>
                <p className="text-xs text-gray-500">
                  {formatDistanceToNow(notification.time, { addSuffix: true })}
                </p>
              </div>
              {!notification.read && (
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5"></div>
              )}
            </DropdownMenuItem>
          ))
        ) : (
          <div className="py-4 text-center text-sm text-gray-500">
            No notifications
          </div>
        )}
        
        <DropdownMenuSeparator />
        <DropdownMenuItem className="justify-center cursor-pointer">
          <Button variant="ghost" size="sm" className="w-full text-upsc-purple">
            View all notifications
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NotificationDropdown;
