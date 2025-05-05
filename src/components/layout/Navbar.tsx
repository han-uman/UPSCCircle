
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Search, 
  Menu, 
  X, 
  LogIn, 
  User, 
  BookOpen,
  Users,
  BarChart3,
  MessageSquare,
  Trophy
} from 'lucide-react';
import Logo from '@/components/ui/logo';
import SearchDialog from '@/components/search/SearchDialog';
import NotificationDropdown from '@/components/notifications/NotificationDropdown';
import ConnectionsDrawer from '@/components/connections/ConnectionsDrawer';
import ChatDrawer from '@/components/chat/ChatDrawer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  // Mock authentication state - would be managed by a proper auth provider
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Set to true for development

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Logo size="md" />
              </Link>
            </div>
            
            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated ? (
                <>
                  <Link to="/feed" className="text-gray-600 hover:text-upsc-purple px-3 py-2 rounded-md font-medium flex items-center gap-2">
                    <BookOpen size={18} />
                    <span>Feed</span>
                  </Link>
                  <Link to="/circles" className="text-gray-600 hover:text-upsc-purple px-3 py-2 rounded-md font-medium flex items-center gap-2">
                    <Users size={18} />
                    <span>Circles</span>
                  </Link>
                  <Link to="/dashboard" className="text-gray-600 hover:text-upsc-purple px-3 py-2 rounded-md font-medium flex items-center gap-2">
                    <BarChart3 size={18} />
                    <span>Dashboard</span>
                  </Link>
                  
                  <div className="flex items-center gap-2 ml-2">
                    <Button variant="ghost" size="icon" className="text-gray-600 hover:text-upsc-purple" onClick={() => setIsSearchOpen(true)}>
                      <Search size={20} />
                    </Button>
                    
                    <NotificationDropdown />
                    
                    <ConnectionsDrawer />
                    
                    <ChatDrawer />
                    
                    <div className="flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1 border">
                      <Trophy className="h-4 w-4 text-orange-500" />
                      <span className="text-sm font-medium">1250</span>
                    </div>
                    
                    <Link to="/profile">
                      <Button variant="outline" className="rounded-full h-10 w-10 p-0" size="icon">
                        <User size={18} />
                      </Button>
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <Link to="/auth" className="flex items-center gap-2">
                    <Button variant="ghost" className="text-gray-600 hover:text-upsc-purple">
                      <LogIn size={18} className="mr-2" />
                      Sign In
                    </Button>
                  </Link>
                  <Link to="/auth?register=true">
                    <Button className="bg-upsc-purple hover:bg-upsc-purple-dark text-white">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-upsc-purple hover:bg-upsc-purple-light/10"
                aria-expanded="false"
              >
                <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/feed"
                    className="flex items-center gap-2 text-gray-600 hover:bg-upsc-purple-light/10 hover:text-upsc-purple block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <BookOpen size={18} />
                    <span>Feed</span>
                  </Link>
                  <Link
                    to="/circles"
                    className="flex items-center gap-2 text-gray-600 hover:bg-upsc-purple-light/10 hover:text-upsc-purple block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <Users size={18} />
                    <span>Study Circles</span>
                  </Link>
                  <Link
                    to="/dashboard"
                    className="flex items-center gap-2 text-gray-600 hover:bg-upsc-purple-light/10 hover:text-upsc-purple block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <BarChart3 size={18} />
                    <span>Dashboard</span>
                  </Link>
                  
                  <div className="flex flex-wrap gap-3 mt-4 px-3 py-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex-1 justify-start items-center gap-2"
                      onClick={() => {
                        setIsOpen(false);
                        setIsSearchOpen(true);
                      }}
                    >
                      <Search size={18} />
                      <span>Search</span>
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="flex-1 justify-start items-center gap-2" asChild>
                      <Link to="/notifications" onClick={() => setIsOpen(false)}>
                        <Bell size={18} />
                        <span>Notifications</span>
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-3 px-3 py-2">
                    <Button variant="ghost" size="sm" className="flex-1 justify-start items-center gap-2" asChild>
                      <Link to="/connections" onClick={() => setIsOpen(false)}>
                        <Users size={18} />
                        <span>Connections</span>
                      </Link>
                    </Button>
                    
                    <Button variant="ghost" size="sm" className="flex-1 justify-start items-center gap-2" asChild>
                      <Link to="/messages" onClick={() => setIsOpen(false)}>
                        <MessageSquare size={18} />
                        <span>Messages</span>
                      </Link>
                    </Button>
                  </div>
                  
                  <Link
                    to="/profile"
                    className="flex items-center gap-2 text-gray-600 hover:bg-upsc-purple-light/10 hover:text-upsc-purple block px-3 py-2 rounded-md text-base font-medium mt-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <User size={18} />
                    <span>Profile</span>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    to="/auth"
                    className="flex items-center gap-2 text-gray-600 hover:bg-upsc-purple-light/10 hover:text-upsc-purple block px-3 py-2 rounded-md text-base font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    <LogIn size={18} />
                    <span>Sign In</span>
                  </Link>
                  <Link to="/auth?register=true" onClick={() => setIsOpen(false)}>
                    <Button className="w-full my-2 bg-upsc-purple hover:bg-upsc-purple-dark text-white">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
      
      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </>
  );
};

export default Navbar;
