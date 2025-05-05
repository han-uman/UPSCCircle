
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CircleCard from '@/components/circles/CircleCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus } from 'lucide-react';

// Mock circles data
const mockCircles = [
  {
    id: '1',
    name: 'UPSC 2025',
    description: 'Community for aspirants targeting the 2025 exam. Daily discussions and resource sharing.',
    category: 'Batch',
    membersCount: 245,
    tags: ['UPSC2025', 'Prelims', 'Strategy'],
    image: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=400&auto=format&fit=crop',
    isJoined: true,
  },
  {
    id: '2',
    name: 'Geography Optional',
    description: 'For aspirants with Geography as their optional subject. Map discussions, answer writing practice, and more.',
    category: 'Subject',
    membersCount: 148,
    tags: ['Geography', 'Maps', 'Optional'],
    isJoined: false,
  },
  {
    id: '3',
    name: 'Delhi Study Group',
    description: 'Local study group for aspirants in Delhi NCR. Weekly meetups, resource sharing, and collaborative learning.',
    category: 'Regional',
    membersCount: 87,
    tags: ['Delhi', 'StudyGroup', 'Meetup'],
    isJoined: false,
  },
  {
    id: '4',
    name: 'Essay Champions',
    description: 'Focused on improving essay writing skills for UPSC Mains. Weekly practice and peer reviews.',
    category: 'Skill',
    membersCount: 132,
    tags: ['Essay', 'Writing', 'Mains'],
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=400&auto=format&fit=crop',
    isJoined: true,
  },
  {
    id: '5',
    name: 'Economics Discussions',
    description: 'Deep dive into economic concepts relevant for UPSC. Daily news analysis and concept clarity sessions.',
    category: 'Subject',
    membersCount: 195,
    tags: ['Economics', 'CurrentAffairs', 'Concepts'],
    isJoined: false,
  },
  {
    id: '6',
    name: 'Interview Preparation',
    description: 'For aspirants preparing for the UPSC personality test. Mock interviews, guidance, and discussion.',
    category: 'Stage',
    membersCount: 108,
    tags: ['Interview', 'Personality', 'Final'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop',
    isJoined: false,
  },
];

const categories = [
  { id: 'all', name: 'All' },
  { id: 'batch', name: 'Batch' },
  { id: 'subject', name: 'Subject' },
  { id: 'skill', name: 'Skill' },
  { id: 'regional', name: 'Regional' },
  { id: 'stage', name: 'Stage' },
];

const Circles = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('discover');
  
  const filteredCircles = mockCircles.filter(circle => {
    const matchesCategory = selectedCategory === 'all' || 
      circle.category.toLowerCase() === selectedCategory.toLowerCase();
    
    const matchesSearch = circle.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      circle.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      circle.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = filter === 'discover' || 
      (filter === 'joined' && circle.isJoined);
    
    return matchesCategory && matchesSearch && matchesFilter;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-6 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Study Circles</h1>
            
            <Button className="bg-upsc-purple hover:bg-upsc-purple-dark">
              <Plus size={18} className="mr-2" />
              Create Circle
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <Tabs defaultValue="discover" className="w-auto" onValueChange={setFilter}>
              <TabsList>
                <TabsTrigger value="discover">Discover</TabsTrigger>
                <TabsTrigger value="joined">Joined</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="flex-grow max-w-md w-full sm:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <Input 
                  className="pl-10" 
                  placeholder="Search circles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          
          <div className="mb-6 overflow-x-auto pb-2">
            <div className="flex space-x-2">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`cursor-pointer px-3 py-1 text-sm ${
                    selectedCategory === category.id 
                      ? 'bg-upsc-purple hover:bg-upsc-purple-dark' 
                      : 'hover:bg-gray-100'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
          
          {filteredCircles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCircles.map(circle => (
                <CircleCard key={circle.id} {...circle} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500">No circles found matching your criteria</p>
              <Button variant="outline" className="mt-4" onClick={() => {
                setSelectedCategory('all');
                setSearchTerm('');
              }}>
                Reset Filters
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Circles;
