
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Trophy, Star, Medal } from 'lucide-react';

type AchievementType = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  unlocked: boolean;
  progress?: number;
  total?: number;
};

interface AchievementsCardProps {
  achievements: AchievementType[];
}

const AchievementsCard = ({ achievements }: AchievementsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <Trophy size={18} className="text-upsc-purple" />
          <span>Recent Achievements</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-3">
          {achievements.slice(0, 3).map((achievement) => (
            <div key={achievement.id} className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors">
              <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
                {achievement.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">{achievement.title}</h4>
                  <Badge variant={achievement.unlocked ? "default" : "outline"} className={achievement.unlocked ? "bg-upsc-purple" : ""}>
                    {achievement.unlocked ? 'Unlocked' : 'In Progress'}
                  </Badge>
                </div>
                <p className="text-xs text-gray-500">{achievement.description}</p>
                {!achievement.unlocked && achievement.progress !== undefined && (
                  <div className="w-full h-1.5 bg-gray-100 rounded-full mt-1.5 overflow-hidden">
                    <div 
                      className="h-full bg-upsc-purple rounded-full" 
                      style={{ width: `${(achievement.progress / (achievement.total || 1)) * 100}%` }}
                    ></div>
                  </div>
                )}
              </div>
            </div>
          ))}
          {achievements.length > 3 && (
            <a href="#" className="block text-center text-sm text-upsc-purple hover:underline mt-2">
              View all {achievements.length} achievements
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementsCard;
