
import { Card, CardContent } from '@/components/ui/card';
import { Trophy, Award, CheckCircle, Target } from 'lucide-react';

type ProfileStatsProps = {
  stats: {
    points: number;
    rank: number;
    tasksCompleted: number;
    streak: number;
  };
};

const ProfileStats = ({ stats }: ProfileStatsProps) => {
  return (
    <Card className="overflow-hidden shadow-md">
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center gap-1.5">
              <Target className="h-5 w-5 text-upsc-purple" />
              <span className="text-2xl font-bold text-upsc-purple">{stats.points}</span>
            </div>
            <span className="text-sm text-gray-500 mt-1">XP Points</span>
          </div>
          
          <div className="flex flex-col items-center p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center gap-1.5">
              <Award className="h-5 w-5 text-amber-500" />
              <span className="text-2xl font-bold text-amber-500">#{stats.rank}</span>
            </div>
            <span className="text-sm text-gray-500 mt-1">Rank</span>
          </div>
          
          <div className="flex flex-col items-center p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center gap-1.5">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span className="text-2xl font-bold text-green-500">{stats.tasksCompleted}</span>
            </div>
            <span className="text-sm text-gray-500 mt-1">Tasks</span>
          </div>
          
          <div className="flex flex-col items-center p-4 border rounded-lg bg-gradient-to-br from-white to-gray-50">
            <div className="flex items-center gap-1.5 mb-1">
              <Trophy className="h-5 w-5 text-orange-500" />
              <span className="text-2xl font-bold text-orange-500">{stats.streak}</span>
            </div>
            <span className="text-sm text-gray-500 mb-1.5">Day Streak</span>
            
            <div className="w-full">
              <div className="flex justify-between items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-4 h-4 rounded-full bg-gradient-to-r from-orange-400 to-amber-500 shadow-sm flex items-center justify-center"
                  >
                    <span className="text-[8px] font-bold text-white">✓</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileStats;
