
import React, { useState } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Quote, RefreshCw, Share2, Star } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface QuoteGeneratorProps {
  className?: string;
}

const QuoteGenerator = ({ className = '' }: QuoteGeneratorProps) => {
  // Mock quotes data
  const quotes = [
    {
      id: '1',
      text: "The UPSC journey is not just about succeeding in an exam; it's about becoming the best version of yourself.",
      author: "Sanjeev Sanyal",
      category: "Motivation"
    },
    {
      id: '2',
      text: "UPSC is not a test of knowledge but a test of perseverance. The one who stays consistent, wins.",
      author: "Roman Saini",
      category: "Persistence"
    },
    {
      id: '3',
      text: "Don't let the pressure of the exam take away the joy of learning.",
      author: "Tina Dabi",
      category: "Learning"
    },
    {
      id: '4',
      text: "Success in UPSC is not about studying 18 hours a day. It's about studying smart with 100% focus.",
      author: "Athar Aamir Khan",
      category: "Strategy"
    },
    {
      id: '5',
      text: "Hard work is important, but direction is more important in UPSC preparation.",
      author: "Saumya Sharma",
      category: "Direction"
    },
    {
      id: '6',
      text: "The key to UPSC is not just reading but understanding, analyzing, and forming your own opinions.",
      author: "Kanishak Kataria",
      category: "Study"
    },
    {
      id: '7',
      text: "Consistency and persistence are the two keys to unlock the door of success in UPSC.",
      author: "Anudeep Durishetty",
      category: "Persistence"
    }
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [isFavorite, setIsFavorite] = useState(false);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
    setIsFavorite(false);
  };

  const handleShare = () => {
    // In a real app, this would use the Web Share API or copy to clipboard
    navigator.clipboard.writeText(`"${currentQuote.text}" - ${currentQuote.author}`);
    toast({
      title: "Quote copied to clipboard!",
      description: "You can now paste it anywhere to share."
    });
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: isFavorite ? "Quote removed from your favorites list." : "Quote saved to your favorites list.",
    });
  };

  return (
    <Card className={`overflow-hidden ${className}`}>
      <CardHeader className="bg-upsc-purple-light/10 pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Quote size={18} className="text-upsc-purple" />
            <h3 className="font-bold text-lg">Motivation Corner</h3>
          </div>
          <Badge variant="outline" className="bg-upsc-purple-light/20 text-upsc-purple border-none">
            {currentQuote.category}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="pt-6 pb-4">
        <div className="relative">
          <blockquote className="text-lg font-medium leading-relaxed text-gray-700 italic">
            "{currentQuote.text}"
          </blockquote>
          <div className="mt-4 text-right">
            <p className="text-gray-600">- {currentQuote.author}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-4 bg-gray-50">
        <Button variant="ghost" size="sm" onClick={getRandomQuote}>
          <RefreshCw size={16} className="mr-2" />
          New Quote
        </Button>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" onClick={toggleFavorite}>
            <Star 
              size={16} 
              className={`mr-2 ${isFavorite ? 'fill-yellow-400 text-yellow-400' : ''}`} 
            />
            {isFavorite ? 'Favorited' : 'Favorite'}
          </Button>
          <Button variant="ghost" size="sm" onClick={handleShare}>
            <Share2 size={16} className="mr-2" />
            Share
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuoteGenerator;
