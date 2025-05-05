
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MapPin, Calendar, BookOpen, User, Users, Edit } from 'lucide-react';

type ProfileProps = {
  user: {
    id: string;
    name: string;
    bio: string;
    avatar?: string;
    targetYear: string;
    attemptNumber: number;
    location?: string;
    optionalSubjects: string[];
    following: number;
    followers: number;
    streak: number;
  };
  isCurrentUser?: boolean;
};

const ProfileCard = ({ user, isCurrentUser = false }: ProfileProps) => {
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <div className="flex flex-col md:flex-row md:items-start gap-6">
          <Avatar className="h-24 w-24">
            <img 
              src={user.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200&auto=format&fit=crop'}
              alt={user.name}
              className="object-cover"
            />
          </Avatar>
          
          <div className="flex-grow">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <div className="flex flex-wrap items-center text-muted-foreground text-sm mt-1 gap-x-4 gap-y-2">
                  {user.location && (
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      <span>{user.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>Target: {user.targetYear}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BookOpen size={14} />
                    <span>Attempt: {user.attemptNumber}</span>
                  </div>
                </div>
              </div>
              
              {isCurrentUser ? (
                <Button variant="outline" className="flex items-center gap-2">
                  <Edit size={16} />
                  <span>Edit Profile</span>
                </Button>
              ) : (
                <Button className="bg-upsc-purple hover:bg-upsc-purple-dark">
                  Follow
                </Button>
              )}
            </div>
            
            <p className="mb-4 text-gray-700">{user.bio}</p>
            
            {user.optionalSubjects.length > 0 && (
              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-1">Optional Subjects</h4>
                <div className="flex flex-wrap gap-2">
                  {user.optionalSubjects.map((subject, index) => (
                    <span 
                      key={index}
                      className="bg-upsc-green-light/50 text-gray-800 px-3 py-1 rounded-full text-xs"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div className="flex justify-between items-center mt-4 pt-4 border-t">
              <div className="flex space-x-6">
                <div className="flex flex-col items-center">
                  <span className="font-bold">{user.following}</span>
                  <span className="text-sm text-muted-foreground">Following</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold">{user.followers}</span>
                  <span className="text-sm text-muted-foreground">Followers</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold">{user.streak}</span>
                  <span className="text-sm text-muted-foreground">Day Streak</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
