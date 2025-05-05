
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom';

type CircleProps = {
  id: string;
  name: string;
  description: string;
  category: string;
  membersCount: number;
  tags: string[];
  image?: string;
  isJoined?: boolean;
};

const CircleCard = ({
  id,
  name,
  description,
  category,
  membersCount,
  tags,
  image,
  isJoined = false,
}: CircleProps) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300 flex flex-col">
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-upsc-purple/80 to-upsc-blue/80 rounded-t-lg overflow-hidden">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover opacity-50"
            />
          )}
        </div>
        <Avatar className="absolute bottom-0 left-4 transform translate-y-1/2 h-16 w-16 border-4 border-white">
          <div className="bg-upsc-purple text-white w-full h-full flex items-center justify-center text-xl font-bold">
            {name.charAt(0)}
          </div>
        </Avatar>
      </div>

      <CardContent className="pt-10 pb-4 flex-grow">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <Badge variant="outline" className="bg-upsc-green-light/30">
            {category}
          </Badge>
        </div>

        <p className="text-gray-700 text-sm mb-4 line-clamp-2">{description}</p>

        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Users size={16} className="mr-1" />
          <span>{membersCount} members</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-upsc-blue-light/20">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="border-t pt-3">
        <Link to={`/circles/${id}`} className="w-full">
          <Button 
            variant={isJoined ? "outline" : "default"} 
            className={`w-full ${isJoined ? 'border-upsc-purple text-upsc-purple' : 'bg-upsc-purple hover:bg-upsc-purple-dark'}`}
          >
            {isJoined ? 'View Circle' : 'Join Circle'}
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CircleCard;
