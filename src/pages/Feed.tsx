
import { useState, useEffect } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CreatePostForm from '@/components/feed/CreatePostForm';
import FeedPost from '@/components/feed/FeedPost';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Flame, Users } from 'lucide-react';

// Mock data for posts
const mockPosts = [
  {
    id: '1',
    author: {
      id: '101',
      name: 'Arjun Mehta',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop',
    },
    content: 'Just finished my daily revision of Indian Polity. The Preamble and its evolution is such an interesting topic! Anyone else studying this currently?',
    likes: 24,
    comments: 5,
    tags: ['Polity', 'Prelims', 'Preamble'],
    createdAt: '2 hours ago',
  },
  {
    id: '2',
    author: {
      id: '102',
      name: 'Priya Singh',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=100&auto=format&fit=crop',
    },
    content: 'Looking for good resources on International Relations for Mains 2025. Any recommendations would be appreciated! #UPSC #Mains2025',
    image: 'https://images.unsplash.com/photo-1459499362902-55a20553e082?q=80&w=800&auto=format&fit=crop',
    likes: 18,
    comments: 12,
    tags: ['IR', 'Mains', 'Resources'],
    createdAt: '5 hours ago',
  },
  {
    id: '3',
    author: {
      id: '103',
      name: 'Rahul Kumar',
      avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop',
    },
    content: 'Completed my daily target of solving 50 MCQs on Economy. Scored 42/50 today. Slowly improving! #DailyProgress',
    likes: 35,
    comments: 8,
    tags: ['Economy', 'MCQs', 'DailyTarget'],
    createdAt: '1 day ago',
  },
  {
    id: '4',
    author: {
      id: '104',
      name: 'Sneha Desai',
      avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?q=80&w=100&auto=format&fit=crop',
    },
    content: 'Just had an amazing study session on Geography optional. Here\'s my mind map for Physical Geography topics. Hope this helps fellow aspirants!',
    image: 'https://images.unsplash.com/photo-1530918198175-646f81221089?q=80&w=800&auto=format&fit=crop',
    likes: 52,
    comments: 15,
    tags: ['Geography', 'Optional', 'MindMap'],
    createdAt: '2 days ago',
  }
];

const Feed = () => {
  const [posts, setPosts] = useState(mockPosts);
  const [filter, setFilter] = useState('recent');
  
  const handleCreatePost = () => {
    // In a real app, we would fetch the updated posts from an API
    // For now, let's just console.log
    console.log('New post created');
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <CreatePostForm onPostCreated={handleCreatePost} />
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Community Feed</h2>
              
              <Tabs defaultValue="recent" className="w-auto" onValueChange={setFilter}>
                <TabsList className="bg-white border border-gray-200 p-0.5">
                  <TabsTrigger value="recent" className="flex items-center gap-1.5 data-[state=active]:bg-muted">
                    <Clock size={14} />
                    <span>Recent</span>
                  </TabsTrigger>
                  <TabsTrigger value="popular" className="flex items-center gap-1.5 data-[state=active]:bg-muted">
                    <Flame size={14} />
                    <span>Popular</span>
                  </TabsTrigger>
                  <TabsTrigger value="following" className="flex items-center gap-1.5 data-[state=active]:bg-muted">
                    <Users size={14} />
                    <span>Following</span>
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            {posts.length > 0 ? (
              <div>
                {posts.map(post => (
                  <FeedPost key={post.id} {...post} />
                ))}
                
                <div className="text-center mt-8">
                  <Button variant="outline">Load More</Button>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
                <p className="text-gray-500">No posts to display</p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Feed;
