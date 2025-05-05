
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Award, Medal, Star, Trophy, BookOpen, CheckCircle, Target } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

import StudyStreakCard from '@/components/dashboard/StudyStreakCard';
import AchievementsCard from '@/components/dashboard/AchievementsCard';
import LeaderboardCard from '@/components/dashboard/LeaderboardCard';
import GoalProgressCard from '@/components/dashboard/GoalProgressCard';
import LevelProgress from '@/components/profile/LevelProgress';

// Mock data for progress and achievements
const mockProgress = [
  { id: '1', subject: 'Indian Polity', completed: 65, total: 100, color: 'bg-blue-500' },
  { id: '2', subject: 'Economics', completed: 45, total: 100, color: 'bg-green-500' },
  { id: '3', subject: 'Geography', completed: 80, total: 100, color: 'bg-purple-500' },
  { id: '4', subject: 'History', completed: 30, total: 100, color: 'bg-amber-500' },
];

const mockBadges = [
  { id: '1', title: 'Early Bird', description: 'Completed 5 days of morning study sessions', icon: <Star className="text-amber-500" />, unlocked: true },
  { id: '2', title: 'Consistency King', description: 'Maintained a 30-day streak', icon: <Trophy className="text-upsc-purple" />, unlocked: true },
  { id: '3', title: 'Subject Master', description: 'Completed all topics in a subject', icon: <Award className="text-blue-500" />, unlocked: true },
  { id: '4', title: 'Knowledge Explorer', description: 'Read 50 current affairs articles', icon: <Medal className="text-green-500" />, unlocked: true },
  { id: '5', title: 'Quiz Champion', description: 'Scored 90% in 10 quizzes', icon: <Star className="text-red-500" />, unlocked: false, progress: 7, total: 10 },
  { id: '6', title: 'Essay Expert', description: 'Wrote 15 practice essays', icon: <BookOpen className="text-orange-500" />, unlocked: false, progress: 8, total: 15 },
];

const mockLeaderboard = [
  { id: '1', name: 'Arjun Mehta', points: 1250, rank: 1, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop' },
  { id: '2', name: 'Priya Singh', points: 1180, rank: 2, avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=100&auto=format&fit=crop' },
  { id: '3', name: 'Rahul Kumar', points: 1050, rank: 3, avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop' },
  { id: '4', name: 'Sneha Desai', points: 950, rank: 4, avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=100&auto=format&fit=crop' },
  { id: '5', name: 'Vikram Patel', points: 920, rank: 5, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop' },
];

const mockGoals = [
  { id: '1', title: 'Complete Indian Polity', deadline: '2025-06-15', progress: 65 },
  { id: '2', title: 'Solve 500 MCQs', deadline: '2025-05-30', progress: 40 },
  { id: '3', title: 'Read NCERT History', deadline: '2025-07-10', progress: 25 },
  { id: '4', title: 'Daily Current Affairs', deadline: 'Ongoing', progress: 80 },
];

// Add the missing mockTasks data
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

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Weekly activity mock data (5 out of 7 days active)
  const weeklyActivity = [true, true, true, false, true, true, false];
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Your Learning Dashboard</h1>
            <div className="flex items-center gap-2 bg-white rounded-lg border p-3 shadow-sm">
              <div className="flex items-center gap-2">
                <Target size={18} className="text-upsc-purple" />
                <span className="text-sm font-medium">Level 8</span>
              </div>
              <span className="text-sm text-gray-500">|</span>
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-orange-500" />
                <span className="text-sm font-medium">1250 XP</span>
              </div>
            </div>
          </div>
          
          <LevelProgress currentXP={750} levelXP={1000} level={8} />
          
          <div className="my-6">
            <Tabs defaultValue="overview" onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full border-b mb-6 bg-transparent p-0">
                <TabsTrigger 
                  value="overview" 
                  className="flex-1 rounded-t-lg data-[state=active]:bg-white data-[state=active]:shadow-none"
                >
                  Overview
                </TabsTrigger>
                <TabsTrigger 
                  value="achievements" 
                  className="flex-1 rounded-t-lg data-[state=active]:bg-white data-[state=active]:shadow-none"
                >
                  Achievements
                </TabsTrigger>
                <TabsTrigger 
                  value="leaderboard" 
                  className="flex-1 rounded-t-lg data-[state=active]:bg-white data-[state=active]:shadow-none"
                >
                  Leaderboard
                </TabsTrigger>
                <TabsTrigger 
                  value="goals" 
                  className="flex-1 rounded-t-lg data-[state=active]:bg-white data-[state=active]:shadow-none"
                >
                  Goals
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Your Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockProgress.map((subject) => (
                          <div key={subject.id}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-medium">{subject.subject}</span>
                              <span className="text-sm text-gray-500">
                                {subject.completed}% completed
                              </span>
                            </div>
                            <Progress 
                              value={subject.completed} 
                              className="h-3"
                              indicatorClassName={subject.color}
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <AchievementsCard achievements={mockBadges} />
                  
                  <StudyStreakCard streak={23} weeklyActivity={weeklyActivity} />
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>Top Performers</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {mockLeaderboard.slice(0, 3).map((user) => (
                          <div key={user.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                                <span className="text-upsc-purple font-bold">{user.rank}</span>
                              </div>
                              <div className="h-10 w-10 rounded-full overflow-hidden">
                                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                              </div>
                              <span className="font-medium">{user.name}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <span className="font-bold">{user.points}</span>
                              <span className="text-gray-500">pts</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle size={18} className="text-green-500" />
                        <span>Daily Tasks</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {mockTasks[0].tasks.map((task) => (
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
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="achievements" className="p-0">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Earned Badges</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {mockBadges.map((badge) => (
                        <div 
                          key={badge.id} 
                          className={`border rounded-lg p-4 flex flex-col items-center text-center ${
                            badge.unlocked ? 'bg-white' : 'bg-gray-50 opacity-60'
                          }`}
                        >
                          <div className="h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                            {badge.icon}
                          </div>
                          <h4 className="font-medium mb-1">{badge.title}</h4>
                          <p className="text-xs text-gray-500 mb-2">{badge.description}</p>
                          <Badge variant={badge.unlocked ? "default" : "outline"} className={badge.unlocked ? "bg-upsc-purple" : ""}>
                            {badge.unlocked ? 'Unlocked' : 'Locked'}
                          </Badge>
                          {!badge.unlocked && badge.progress !== undefined && (
                            <div className="mt-2 w-full">
                              <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                                <div 
                                  className="h-full bg-upsc-purple rounded-full" 
                                  style={{ width: `${(badge.progress / (badge.total || 1)) * 100}%` }}
                                ></div>
                              </div>
                              <div className="text-xs text-gray-500 mt-1">
                                {badge.progress}/{badge.total}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="leaderboard" className="p-0">
                <LeaderboardCard users={mockLeaderboard} category="Weekly" />
                
                <div className="mt-6">
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#" isActive>1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              </TabsContent>
              
              <TabsContent value="goals" className="p-0">
                <GoalProgressCard goals={mockGoals} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
