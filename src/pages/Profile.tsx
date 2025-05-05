
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileStats from '@/components/profile/ProfileStats';
import UserBadges from '@/components/profile/UserBadges';
import FeedPost from '@/components/feed/FeedPost';
import LevelProgress from '@/components/profile/LevelProgress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CircleCard from '@/components/circles/CircleCard';
import { Award, Medal, Star, Trophy } from 'lucide-react';

// Mock user data
const mockUser = {
  id: '101',
  name: 'Arjun Mehta',
  bio: 'UPSC Aspirant | Sociology & Geography Optional | IIT Delhi Alumnus | Passionate about public policy and governance',
  avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
  targetYear: 'UPSC 2025',
  attemptNumber: 2,
  location: 'New Delhi',
  optionalSubjects: ['Sociology', 'Geography'],
  following: 134,
  followers: 89,
  streak: 23,
  level: 8,
  currentXP: 750,
  levelXP: 1000,
};

// Mock posts data
const mockPosts = [
  {
    id: '1',
    author: {
      id: '101',
      name: 'Arjun Mehta',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
    },
    content: 'Just finished my daily revision of Indian Polity. The Preamble and its evolution is such an interesting topic!',
    likes: 24,
    comments: 5,
    tags: ['Polity', 'Prelims'],
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    author: {
      id: '101',
      name: 'Arjun Mehta',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
    },
    content: 'Completed my daily target! 3 hours of focused study on Economy today.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21ed6c?q=80&w=800&auto=format&fit=crop',
    likes: 18,
    comments: 3,
    tags: ['Economy', 'DailyUpdate'],
    createdAt: '1 day ago',
  },
];

// Mock circles data
const mockCircles = [
  {
    id: '1',
    name: 'UPSC 2025',
    description: 'Community for aspirants targeting the 2025 exam. Daily discussions and resource sharing.',
    category: 'Batch',
    membersCount: 245,
    tags: ['UPSC2025', 'Prelims', 'Strategy'],
    isJoined: true,
  },
  {
    id: '2',
    name: 'Geography Optional',
    description: 'For aspirants with Geography as their optional subject. Map discussions, answer writing practice, and more.',
    category: 'Subject',
    membersCount: 148,
    tags: ['Geography', 'Maps', 'Optional'],
    isJoined: true,
  },
];

// Mock tasks data
const mockTasks = [
  {
    id: '1',
    date: 'Today',
    tasks: [
      { id: 't1', title: 'Revise Polity - Chapter 5', completed: true },
      { id: 't2', title: 'Solve 30 Economy MCQs', completed: true },
      { id: 't3', title: 'Read The Hindu Editorial', completed: true },
      { id: 't4', title: 'Answer writing practice', completed: false },
    ]
  },
  {
    id: '2',
    date: 'Yesterday',
    tasks: [
      { id: 't5', title: 'Complete Geography maps', completed: true },
      { id: 't6', title: 'Make notes on Ancient History', completed: true },
      { id: 't7', title: 'Current affairs revision', completed: true },
    ]
  },
];

// Mock badges data
const mockBadges = [
  { id: '1', title: 'Early Bird', description: 'Completed 5 days of morning study sessions', icon: <Star className="text-amber-500" size={20} />, unlocked: true },
  { id: '2', title: 'Consistency King', description: 'Maintained a 30-day streak', icon: <Trophy className="text-upsc-purple" size={20} />, unlocked: true },
  { id: '3', title: 'Subject Master', description: 'Completed all topics in a subject', icon: <Award className="text-blue-500" size={20} />, unlocked: true },
  { id: '4', title: 'Knowledge Explorer', description: 'Read 50 current affairs articles', icon: <Medal className="text-green-500" size={20} />, unlocked: false },
  { id: '5', title: 'Quiz Champion', description: 'Scored 90% in 10 quizzes', icon: <Star className="text-red-500" size={20} />, unlocked: false },
];

// Mock stats data
const mockStats = {
  points: 1250,
  rank: 42,
  tasksCompleted: 127,
  streak: 23,
};

const Profile = () => {
  const [activeTab, setActiveTab] = useState('posts');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ProfileCard user={mockUser} isCurrentUser={true} />
            <div className="mb-6">
              <LevelProgress currentXP={mockUser.currentXP} levelXP={mockUser.levelXP} level={mockUser.level} />
            </div>
            <ProfileStats stats={mockStats} />
            
            <div className="my-6 flex justify-between items-center">
              <h3 className="text-lg font-bold">Recent Achievements</h3>
              <Link to="/dashboard">
                <Button variant="link" className="text-upsc-purple">
                  View Dashboard
                </Button>
              </Link>
            </div>
            
            <div className="mb-6">
              <UserBadges badges={mockBadges} compact={true} />
            </div>
            
            <Tabs defaultValue="posts" onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full border-b mb-6">
                <TabsTrigger value="posts" className="flex-1">Posts</TabsTrigger>
                <TabsTrigger value="circles" className="flex-1">Study Circles</TabsTrigger>
                <TabsTrigger value="tasks" className="flex-1">Tasks & Streak</TabsTrigger>
                <TabsTrigger value="badges" className="flex-1">Badges</TabsTrigger>
              </TabsList>
              
              <TabsContent value="posts" className="space-y-4">
                {mockPosts.map(post => (
                  <FeedPost key={post.id} {...post} />
                ))}
              </TabsContent>
              
              <TabsContent value="circles">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mockCircles.map(circle => (
                    <CircleCard key={circle.id} {...circle} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="tasks">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Task Tracker</h3>
                  
                  <div className="space-y-6">
                    {mockTasks.map((dayTasks) => (
                      <div key={dayTasks.id}>
                        <h4 className="font-semibold mb-3">{dayTasks.date}</h4>
                        <div className="space-y-2">
                          {dayTasks.tasks.map((task) => (
                            <div 
                              key={task.id} 
                              className={`flex items-center p-3 border rounded-md ${
                                task.completed 
                                  ? 'bg-green-50 border-green-200' 
                                  : 'bg-white border-gray-200'
                              }`}
                            >
                              <div className={`h-5 w-5 rounded-full mr-3 flex items-center justify-center ${
                                task.completed 
                                  ? 'bg-green-500 text-white' 
                                  : 'border border-gray-300'
                              }`}>
                                {task.completed && (
                                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                  </svg>
                                )}
                              </div>
                              <span className={task.completed ? 'text-gray-700' : 'text-gray-800'}>
                                {task.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-semibold mb-3">Weekly Streak</h4>
                    <div className="flex items-center justify-between">
                      {Array.from({ length: 7 }).map((_, i) => {
                        const isActive = i < 5; // Mock data: 5 out of 7 days active
                        return (
                          <div key={i} className="flex flex-col items-center">
                            <div className={`h-8 w-8 rounded-full flex items-center justify-center mb-1 ${
                              isActive ? 'bg-upsc-purple text-white' : 'bg-gray-100 text-gray-400'
                            }`}>
                              {isActive && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              )}
                            </div>
                            <span className="text-xs text-gray-500">
                              {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              </TabsContent>
              
              <TabsContent value="badges">
                <Card className="p-6">
                  <h3 className="font-bold text-lg mb-4">Your Achievements</h3>
                  <UserBadges badges={mockBadges} />
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Profile;
