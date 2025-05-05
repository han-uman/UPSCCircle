
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Calendar, Clock, BookOpen, Target, ChevronRight, BarChart3, Users, Trophy, Star } from 'lucide-react';
import QuoteGenerator from '@/components/motivation/QuoteGenerator';

const Index = () => {
  const [showMore, setShowMore] = useState(false);
  
  // Mock user stats
  const userStats = {
    streak: 23,
    rank: 42,
    points: 1250,
    completionRate: 78,
  };
  
  // Mock features
  const features = [
    {
      title: "Study Circles",
      description: "Join communities of fellow aspirants to collaborate, discuss, and grow together.",
      icon: <Users className="h-10 w-10 text-upsc-purple" />,
      link: "/circles"
    },
    {
      title: "Smart Dashboard",
      description: "Track your progress, performance, and statistics in one place.",
      icon: <BarChart3 className="h-10 w-10 text-upsc-purple" />,
      link: "/dashboard"
    },
    {
      title: "Social Feed",
      description: "Share your journey, learn from others, and stay motivated.",
      icon: <BookOpen className="h-10 w-10 text-upsc-purple" />,
      link: "/feed"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-upsc-purple/20 via-transparent to-upsc-green/20"></div>
            <div className="absolute -top-[40%] -right-[25%] w-[80%] h-[80%] rounded-full bg-upsc-purple/10 blur-3xl"></div>
            <div className="absolute -bottom-[40%] -left-[25%] w-[80%] h-[80%] rounded-full bg-upsc-green/10 blur-3xl"></div>
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-upsc-purple to-upsc-purple-light bg-clip-text text-transparent">
                UPSC Preparation Reimagined
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join India's most engaging community platform designed exclusively for UPSC aspirants. 
                Learn, connect, and succeed together.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link to="/auth">
                  <Button size="lg" className="bg-upsc-purple hover:bg-upsc-purple-dark text-white font-medium px-8">
                    Join Now
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button size="lg" variant="outline" className="font-medium">
                    Explore Dashboard
                  </Button>
                </Link>
              </div>
            </div>

            {/* Stats and Streak Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              <Card className="overflow-hidden border-0 shadow-lg bg-white backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-upsc-purple/10 to-upsc-purple/5 pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="h-6 w-6 text-orange-500" />
                    <span>Your Progress At a Glance</span>
                  </CardTitle>
                  <CardDescription>Track your journey to UPSC success</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col items-center p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <Star className="h-5 w-5 text-amber-400" />
                        <span className="text-2xl font-bold text-upsc-purple">{userStats.streak}</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-1">Day Streak</span>
                      <div className="w-full mt-2">
                        <div className="flex justify-between items-center">
                          {Array.from({ length: 7 }).map((_, i) => {
                            const isActive = i < 5;
                            return (
                              <div key={i} className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                                isActive 
                                  ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-sm' 
                                  : 'bg-gray-100 text-gray-400'
                              }`}>
                                {isActive && '✓'}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-center p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <Award className="h-5 w-5 text-upsc-purple" />
                        <span className="text-2xl font-bold text-upsc-purple">#{userStats.rank}</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-1">Rank</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <Target className="h-5 w-5 text-green-500" />
                        <span className="text-2xl font-bold text-upsc-purple">{userStats.points}</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-1">XP Points</span>
                    </div>
                    
                    <div className="flex flex-col items-center p-3 bg-gradient-to-br from-white to-gray-50 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-5 w-5 text-blue-500" />
                        <span className="text-2xl font-bold text-upsc-purple">{userStats.completionRate}%</span>
                      </div>
                      <span className="text-sm text-gray-500 mt-1">Complete</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="bg-gradient-to-r from-upsc-purple/5 to-upsc-purple/10 flex justify-center pt-4">
                  <Link to="/dashboard">
                    <Button variant="ghost" className="text-upsc-purple flex items-center gap-1">
                      View Complete Dashboard
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
              
              {/* Motivation Quote Card */}
              <Card className="overflow-hidden border-0 shadow-lg bg-white backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-upsc-green/10 to-upsc-blue/5 pb-6">
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-6 w-6 text-upsc-green" />
                    <span>Daily Motivation</span>
                  </CardTitle>
                  <CardDescription>Quotes to inspire your UPSC journey</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <QuoteGenerator shareEnabled={true} />
                </CardContent>
                <CardFooter className="bg-gradient-to-r from-upsc-green/5 to-upsc-blue/10 flex justify-center pt-4">
                  <Link to="/feed">
                    <Button variant="ghost" className="text-upsc-green flex items-center gap-1">
                      Share on Feed
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </div>

            {/* Features Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Features Designed for UPSC Success</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Everything you need to optimize your preparation and maximize your chances of success.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] border border-gray-200 bg-white">
                    <CardHeader>
                      <div className="mb-4">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                    <CardFooter>
                      <Link to={feature.link}>
                        <Button variant="ghost" className="text-upsc-purple flex items-center gap-1">
                          Explore
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Call to Action */}
            <div className="text-center bg-gradient-to-r from-upsc-purple to-upsc-purple-light p-10 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your UPSC Preparation?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of aspirants who have already taken their preparation to the next level.
              </p>
              <Link to="/auth">
                <Button size="lg" className="bg-white text-upsc-purple hover:bg-gray-100 font-medium px-8">
                  Get Started Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
