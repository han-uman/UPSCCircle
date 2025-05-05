
import React, { useState } from 'react';
import { 
  CommandDialog, 
  CommandEmpty, 
  CommandGroup, 
  CommandInput, 
  CommandItem, 
  CommandList 
} from '@/components/ui/command';
import { Search, User, Users, BookOpen, Star } from 'lucide-react';

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  // Mock search results
  const mockUsers = [
    { id: '1', name: 'Rahul Sharma', role: 'UPSC 2024 Aspirant' },
    { id: '2', name: 'Priya Singh', role: 'AIR 45, CSE 2023' },
    { id: '3', name: 'Arjun Patel', role: 'UPSC Mentor' },
  ];

  const mockCircles = [
    { id: '1', name: 'Indian Polity', members: 1240 },
    { id: '2', name: 'Economy Study Group', members: 876 },
    { id: '3', name: 'Current Affairs Daily', members: 2345 },
  ];

  const mockResources = [
    { id: '1', name: 'UPSC Prelims Strategy', type: 'Document' },
    { id: '2', name: 'Economy Revision Notes', type: 'PDF' },
    { id: '3', name: 'Monthly Current Affairs', type: 'Series' },
  ];

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search users, circles, resources..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        
        <CommandGroup heading="Users">
          {mockUsers.map((user) => (
            <CommandItem key={user.id} className="flex items-center gap-2 py-3">
              <div className="bg-gray-200 rounded-full p-1">
                <User size={16} />
              </div>
              <div>
                <p className="font-medium">{user.name}</p>
                <p className="text-xs text-gray-500">{user.role}</p>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        
        <CommandGroup heading="Study Circles">
          {mockCircles.map((circle) => (
            <CommandItem key={circle.id} className="flex items-center gap-2 py-3">
              <div className="bg-upsc-purple-light/20 rounded-full p-1">
                <Users size={16} className="text-upsc-purple" />
              </div>
              <div>
                <p className="font-medium">{circle.name}</p>
                <p className="text-xs text-gray-500">{circle.members} members</p>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        
        <CommandGroup heading="Resources">
          {mockResources.map((resource) => (
            <CommandItem key={resource.id} className="flex items-center gap-2 py-3">
              <div className="bg-upsc-blue-light/20 rounded-full p-1">
                <BookOpen size={16} className="text-upsc-blue" />
              </div>
              <div>
                <p className="font-medium">{resource.name}</p>
                <p className="text-xs text-gray-500">{resource.type}</p>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default SearchDialog;
