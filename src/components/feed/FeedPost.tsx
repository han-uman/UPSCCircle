
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { MessageSquare, Heart, Share2, BookmarkPlus } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

type PostProps = {
  id: string;
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  content: string;
  image?: string;
  likes: number;
  comments: number;
  tags: string[];
  createdAt: string;
  isLiked?: boolean;
};

const FeedPost = ({
  id,
  author,
  content,
  image,
  likes,
  comments,
  tags,
  createdAt,
  isLiked = false
}: PostProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likes);
  
  const handleLike = () => {
    // Toggle like state
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };
  
  return (
    <Card className="mb-4 animate-fade-in">
      <CardHeader className="flex flex-row items-start space-y-0 pb-3">
        <Link to={`/profile/${author.id}`} className="flex items-center space-x-3">
          <Avatar>
            <img 
              src={author.avatar || 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop'} 
              alt={author.name} 
              className="rounded-full object-cover"
            />
          </Avatar>
          <div>
            <h3 className="font-semibold text-base">{author.name}</h3>
            <p className="text-xs text-muted-foreground">{createdAt}</p>
          </div>
        </Link>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className="mb-4 text-left">{content}</p>
        
        {image && (
          <div className="mb-4 rounded-md overflow-hidden">
            <img src={image} alt="Post image" className="w-full h-auto" />
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline" className="bg-upsc-blue-light/30 hover:bg-upsc-blue-light/50">
              #{tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-3 flex justify-between">
        <div className="flex space-x-4">
          <Button 
            variant="ghost" 
            size="sm" 
            className={`flex items-center gap-1 ${liked ? 'text-red-500' : ''}`}
            onClick={handleLike}
          >
            <Heart size={18} className={`${liked ? 'fill-red-500' : ''}`} />
            <span>{likeCount}</span>
          </Button>
          
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            <MessageSquare size={18} />
            <span>{comments}</span>
          </Button>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="ghost" size="icon">
            <BookmarkPlus size={18} />
          </Button>
          
          <Button variant="ghost" size="icon">
            <Share2 size={18} />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default FeedPost;
