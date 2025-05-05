
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Avatar } from '@/components/ui/avatar';
import { Image, Tag, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

const CreatePostForm = ({ onPostCreated }: { onPostCreated?: () => void }) => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const [showTagInput, setShowTagInput] = useState(false);
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!content.trim()) {
      toast.error('Please write something before posting');
      return;
    }
    
    // In a real app, this would send the post data to an API
    console.log({
      content,
      image,
      tags,
      createdAt: new Date().toISOString(),
    });
    
    // Reset form
    setContent('');
    setImage(null);
    setTags([]);
    
    toast.success('Post created successfully!');
    
    if (onPostCreated) {
      onPostCreated();
    }
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real app, this would upload the image to a server
      // Here we're just creating a local URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };
  
  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  
  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit}>
          <div className="flex items-start space-x-3 mb-4">
            <Avatar>
              <img 
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=100&auto=format&fit=crop" 
                alt="User avatar" 
                className="rounded-full object-cover"
              />
            </Avatar>
            <div className="flex-grow">
              <Textarea
                placeholder="Share your thoughts, progress or ask for guidance..."
                className="min-h-[80px] resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
          </div>
          
          {image && (
            <div className="mb-4 relative">
              <div className="relative rounded-md overflow-hidden">
                <img src={image} alt="Preview" className="w-full h-auto" />
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  className="absolute top-2 right-2 h-8 w-8 rounded-full"
                  onClick={() => setImage(null)}
                >
                  <span>×</span>
                </Button>
              </div>
            </div>
          )}
          
          {showTagInput && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((tag, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary"
                    className="py-1 px-3 bg-upsc-blue-light/30 hover:bg-upsc-blue-light/50"
                  >
                    #{tag}
                    <button 
                      type="button" 
                      className="ml-1 text-gray-500 hover:text-gray-700"
                      onClick={() => removeTag(tag)}
                    >
                      ×
                    </button>
                  </Badge>
                ))}
              </div>
              <input
                type="text"
                className="w-full rounded-md border border-input p-2"
                placeholder="Add tags (press Enter to add)"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={handleAddTag}
              />
            </div>
          )}
          
          <div className="flex items-center justify-between pt-2 border-t">
            <div className="flex items-center space-x-2">
              <Button type="button" variant="ghost" size="sm" className="flex items-center" onClick={() => document.getElementById('image-upload')?.click()}>
                <Image size={18} className="mr-2" />
                <span>Image</span>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </Button>
              
              <Button type="button" variant="ghost" size="sm" className="flex items-center" onClick={() => setShowTagInput(!showTagInput)}>
                <Tag size={18} className="mr-2" />
                <span>Tags</span>
              </Button>
              
              <Button type="button" variant="ghost" size="sm" className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>Task</span>
              </Button>
            </div>
            
            <Button type="submit" className="bg-upsc-purple hover:bg-upsc-purple-dark">
              Post
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreatePostForm;
