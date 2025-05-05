
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Award, Medal, Star, Trophy } from 'lucide-react';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

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
  { id: '5', title: 'Quiz Champion', description: 'Scored 90% in 10 quizzes', icon: <Star className="text-red-500" />, unlocked: false },
];

const mockLeaderboard = [
  { id: '1', name: 'Arjun Mehta', points: 1250, avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop' },
  { id: '2', name: 'Priya Singh', points: 1180, avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=100&auto=format&fit=crop' },
  { id: '3', name: 'Rahul Kumar', points: 1050, avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop' },
  { id: '4', name: 'Sneha Desai', points: 950, avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=100&auto=format&fit=crop' },
  { id: '5', name: 'Vikram Patel', points: 920, avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop' },
];

const mockGoals = [
  { id: '1', title: 'Complete Indian Polity', deadline: '2025-06-15', progress: 65 },
  { id: '2', title: 'Solve 500 MCQs', deadline: '2025-05-30', progress: 40 },
  { id: '3', title: 'Read NCERT History', deadline: '2025-07-10', progress: 25 },
  { id: '4', title: 'Daily Current Affairs', deadline: 'Ongoing', progress: 80 },
];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Your Learning Dashboard</h1>
          
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
                
                <Card>
                  <CardHeader>
                    <CardTitle>Your Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col space-y-3">
                      {mockBadges.filter(badge => badge.unlocked).slice(0, 3).map((badge) => (
                        <div key={badge.id} className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                            {badge.icon}
                          </div>
                          <div>
                            <h4 className="font-medium">{badge.title}</h4>
                            <p className="text-xs text-gray-500">{badge.description}</p>
                          </div>
                        </div>
                      ))}
                      
                      <div className="pt-2">
                        <a href="#" className="text-upsc-purple text-sm hover:underline">
                          View all achievements →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Daily Streak</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center flex-col">
                      <div className="text-5xl font-bold text-upsc-purple mb-2">23</div>
                      <p className="text-gray-500">days</p>
                      
                      <div className="w-full mt-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500">Last 7 days</span>
                        </div>
                        <div className="flex justify-between w-full">
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
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Top Performers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockLeaderboard.slice(0, 3).map((user, index) => (
                        <div key={user.id} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100">
                              <span className="text-upsc-purple font-bold">{index + 1}</span>
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
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="leaderboard" className="p-0">
              <Card>
                <CardHeader>
                  <CardTitle>Community Leaderboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockLeaderboard.map((user, index) => (
                      <div key={user.id} className="flex items-center justify-between border-b pb-3 last:border-b-0">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 font-semibold">
                            {index + 1}
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
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="goals" className="p-0">
              <Card>
                <CardHeader>
                  <CardTitle>Your Study Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockGoals.map((goal) => (
                      <div key={goal.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-center mb-2">
                          <h4 className="font-medium">{goal.title}</h4>
                          <Badge variant="outline">
                            {goal.deadline === 'Ongoing' ? 'Ongoing' : `Due ${new Date(goal.deadline).toLocaleDateString()}`}
                          </Badge>
                        </div>
                        <div className="w-full mb-1">
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Progress: {goal.progress}%</span>
                          <span>Target: 100%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
