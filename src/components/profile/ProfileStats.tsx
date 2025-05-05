
import { Card, CardContent } from '@/components/ui/card';
import { Trophy } from 'lucide-react';

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
    <Card>
      <CardContent className="pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <span className="text-2xl font-bold text-upsc-purple">{stats.points}</span>
            <span className="text-sm text-gray-500">XP Points</span>
          </div>
          
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <span className="text-2xl font-bold text-amber-500">#{stats.rank}</span>
            <span className="text-sm text-gray-500">Rank</span>
          </div>
          
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <span className="text-2xl font-bold text-green-500">{stats.tasksCompleted}</span>
            <span className="text-sm text-gray-500">Tasks</span>
          </div>
          
          <div className="flex flex-col items-center p-3 border rounded-lg">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-orange-500">{stats.streak}</span>
              <Trophy size={18} className="ml-1 text-orange-500" />
            </div>
            <span className="text-sm text-gray-500">Day Streak</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileStats;
