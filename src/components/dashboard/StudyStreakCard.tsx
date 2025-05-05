
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

interface StudyStreakCardProps {
  streak: number;
  weeklyActivity: boolean[];
}

const StudyStreakCard = ({ streak, weeklyActivity }: StudyStreakCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Trophy size={18} className="text-orange-500" />
          <span>Study Streak</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center flex-col">
          <div className="text-5xl font-bold text-upsc-purple mb-2">{streak}</div>
          <p className="text-gray-500 mb-6">days</p>
          
          <div className="w-full">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">Last 7 days</span>
            </div>
            <div className="flex justify-between w-full">
              {weeklyActivity.map((isActive, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className={`h-8 w-8 rounded-full flex items-center justify-center mb-1 ${
                    isActive ? 'bg-upsc-purple text-white' : 'bg-gray-100 text-gray-400'
                  }`}>
                    {isActive && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    )}
                  </div>
                  <span className="text-xs text-gray-500">
                    {['M', 'T', 'W', 'T', 'F', 'S', 'S'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudyStreakCard;
