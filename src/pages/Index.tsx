
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { BookOpen, Users, Calendar, MessageSquare } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-upsc-purple/10 to-upsc-blue-light/20 py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-gray-900">
                  Connect, Learn & Grow with <span className="text-upsc-purple">UPSC</span><span className="text-upsc-purple-light">Circle</span>
                </h1>
                <p className="text-xl text-gray-700 mb-6">
                  A dedicated social platform for UPSC aspirants to share their journey, find mentors, and achieve success together.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/auth?register=true">
                    <Button size="lg" className="bg-upsc-purple hover:bg-upsc-purple-dark text-white">
                      Join Community
                    </Button>
                  </Link>
                  <Link to="/auth">
                    <Button size="lg" variant="outline">
                      Sign In
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="h-10 w-10 rounded-full bg-upsc-purple flex items-center justify-center text-white">
                        A
                      </div>
                      <div>
                        <p className="font-semibold">Aditya Sharma</p>
                        <p className="text-sm text-gray-500">UPSC 2025 Aspirant</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      Just finished my daily revision of Indian Polity. Making steady progress! 
                      #UPSCPreparation #Polity
                    </p>
                    <div className="flex justify-between text-sm text-gray-500 border-t pt-3">
                      <span>42 likes</span>
                      <span>12 comments</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-upsc-blue-light/30 rounded-lg p-4 hidden md:block">
                    <div className="flex items-center space-x-2">
                      <div className="h-8 w-8 rounded-full bg-upsc-blue flex items-center justify-center text-white">
                        <Calendar size={16} />
                      </div>
                      <p className="text-sm font-medium">23 day streak!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Why Join UPSCCircle?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover-scale card-shadow">
                <div className="h-12 w-12 rounded-full bg-upsc-purple-light/20 flex items-center justify-center text-upsc-purple mb-4">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Study Circles</h3>
                <p className="text-gray-700">
                  Join topic-based communities to discuss, share resources, and learn collaboratively with peers.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover-scale card-shadow">
                <div className="h-12 w-12 rounded-full bg-upsc-green-light/30 flex items-center justify-center text-green-700 mb-4">
                  <Calendar size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Daily Tracking</h3>
                <p className="text-gray-700">
                  Track your study goals, build consistency with streaks, and share progress with your network.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover-scale card-shadow">
                <div className="h-12 w-12 rounded-full bg-upsc-blue-light/30 flex items-center justify-center text-blue-700 mb-4">
                  <MessageSquare size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Mentorship</h3>
                <p className="text-gray-700">
                  Request guidance from experienced mentors and collaborate with senior aspirants.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover-scale card-shadow">
                <div className="h-12 w-12 rounded-full bg-upsc-purple-light/20 flex items-center justify-center text-upsc-purple mb-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Resource Sharing</h3>
                <p className="text-gray-700">
                  Discover curated study materials, notes, and strategies shared by the community.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Aspirant Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
                    <img src="https://images.unsplash.com/photo-1617077644557-64be144aa306?q=80&w=100&auto=format&fit=crop" alt="Profile" className="rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold">Priya Sharma</p>
                    <p className="text-sm text-gray-500">AIR 45, CSE 2023</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "UPSCCircle helped me connect with like-minded aspirants. The daily accountability and peer support made a huge difference in my preparation journey."
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
                    <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?q=80&w=100&auto=format&fit=crop" alt="Profile" className="rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold">Vikram Singh</p>
                    <p className="text-sm text-gray-500">AIR 78, CSE 2022</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "The study circles were game-changers for me. Being able to discuss topics with others preparing for the same subjects helped clarify many concepts."
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gray-200 mr-4">
                    <img src="https://images.unsplash.com/photo-1614270532514-904c3aa5628e?q=80&w=100&auto=format&fit=crop" alt="Profile" className="rounded-full" />
                  </div>
                  <div>
                    <p className="font-semibold">Aryan Patel</p>
                    <p className="text-sm text-gray-500">UPSC 2025 Aspirant</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "As a first-time aspirant, I was overwhelmed until I found UPSCCircle. The mentorship system and structured approach helped me build a solid foundation."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-upsc-purple to-upsc-purple-dark text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join the Community?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Start your UPSC preparation journey with a supportive community that helps you stay motivated and focused.
            </p>
            <Link to="/auth?register=true">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-upsc-purple">
                Register Now
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
