
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy, Fire, Calendar } from 'lucide-react';

interface StudyStreakCardProps {
  streak: number;
  weeklyActivity: boolean[];
}

const StudyStreakCard = ({ streak, weeklyActivity }: StudyStreakCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-50">
        <CardTitle className="flex items-center gap-2">
          <Trophy size={20} className="text-orange-500" />
          <span>Study Streak</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="flex items-center justify-center flex-col">
          <div className="relative">
            <div className="text-5xl font-bold text-orange-500 mb-1">{streak}</div>
            <Fire size={24} className="absolute -right-6 -top-2 text-orange-400 animate-pulse" />
          </div>
          <p className="text-gray-500 mb-6">consecutive days</p>
          
          <div className="w-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-600">Last 7 days</span>
              <span className="text-xs text-gray-500">
                <Calendar size={14} className="inline mr-1" />
                Weekly progress
              </span>
            </div>
            <div className="flex justify-between w-full">
              {weeklyActivity.map((isActive, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-1 transition-all ${
                    isActive 
                      ? 'bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-md' 
                      : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isActive && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </div>
                  <span className={`text-xs ${isActive ? 'font-medium text-gray-700' : 'text-gray-500'}`}>
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 pt-4 border-t text-center">
              <p className="text-sm text-gray-600">
                <span className="font-medium text-orange-500">+ 125 XP</span> bonus for maintaining your streak!
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreakCard;
