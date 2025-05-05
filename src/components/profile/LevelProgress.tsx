
import { Progress } from '@/components/ui/progress';
import { Trophy } from 'lucide-react';

type LevelProgressProps = {
  currentXP: number;
  levelXP: number;
  level: number;
};

const LevelProgress = ({ currentXP, levelXP, level }: LevelProgressProps) => {
  const progressPercentage = Math.min(Math.round((currentXP / levelXP) * 100), 100);
  
  return (
    <div className="bg-white rounded-lg border p-4 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className="bg-upsc-purple rounded-full w-8 h-8 flex items-center justify-center text-white">
            <Trophy size={18} />
          </div>
          <span className="font-bold">Level {level}</span>
        </div>
        <span className="text-sm text-gray-500">{currentXP}/{levelXP} XP</span>
      </div>
      <Progress value={progressPercentage} className="h-2" indicatorClassName="bg-upsc-purple" />
      <div className="mt-2 text-xs text-gray-500 text-right">
        {100 - progressPercentage}% to Level {level + 1}
      </div>
    </div>
  );
};

export default LevelProgress;
