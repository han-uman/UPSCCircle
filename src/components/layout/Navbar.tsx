
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
  Users
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Mock authentication state - would be managed by a proper auth provider
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-upsc-purple font-bold text-2xl">UPSC<span className="text-upsc-purple-light">Circle</span></h1>
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
                <div className="relative">
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-upsc-purple">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
                  </Button>
                </div>
                <Button variant="ghost" size="icon" className="text-gray-600 hover:text-upsc-purple">
                  <Search size={20} />
                </Button>
                <Link to="/profile">
                  <Button variant="outline" className="rounded-full h-10 w-10 p-0" size="icon">
                    <User size={18} />
                  </Button>
                </Link>
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
                >
                  <BookOpen size={18} />
                  <span>Feed</span>
                </Link>
                <Link
                  to="/circles"
                  className="flex items-center gap-2 text-gray-600 hover:bg-upsc-purple-light/10 hover:text-upsc-purple block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Users size={18} />
                  <span>Circles</span>
                </Link>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-gray-600 hover:bg-upsc-purple-light/10 hover:text-upsc-purple block px-3 py-2 rounded-md text-base font-medium"
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
                >
                  <LogIn size={18} />
                  <span>Sign In</span>
                </Link>
                <Link to="/auth?register=true">
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
  );
};

export default Navbar;
