
import { Badge } from '@/components/ui/badge';
import { Award, Medal, Star, Trophy } from 'lucide-react';

type BadgeData = {
  id: string;
  title: string;
  description: string;
  icon: JSX.Element;
  unlocked: boolean;
};

type UserBadgesProps = {
  badges: BadgeData[];
  compact?: boolean;
};

const UserBadges = ({ badges, compact = false }: UserBadgesProps) => {
  const displayBadges = compact ? badges.filter(badge => badge.unlocked).slice(0, 3) : badges;
  
  return (
    <div className={`grid ${compact ? 'grid-cols-3 gap-2' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'}`}>
      {displayBadges.map((badge) => (
        <div 
          key={badge.id} 
          className={`border rounded-lg p-3 flex ${compact ? 'flex-col' : 'flex-col items-center'} ${
            badge.unlocked ? 'bg-white' : 'bg-gray-50 opacity-70'
          }`}
        >
          <div className={`${compact ? 'h-10 w-10' : 'h-14 w-14'} rounded-full bg-gray-100 flex items-center justify-center mb-2 mx-auto`}>
            {badge.icon}
          </div>
          <div className={`${compact ? '' : 'text-center'}`}>
            <h4 className="font-medium mb-1">{badge.title}</h4>
            {!compact && <p className="text-xs text-gray-500 mb-2">{badge.description}</p>}
            {!compact && (
              <Badge variant={badge.unlocked ? "default" : "outline"} className={badge.unlocked ? "bg-upsc-purple" : ""}>
                {badge.unlocked ? 'Unlocked' : 'Locked'}
              </Badge>
            )}
          </div>
        </div>
      ))}
      
      {compact && badges.filter(badge => badge.unlocked).length > 3 && (
        <div className="border rounded-lg p-3 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100 cursor-pointer">
          <span className="text-lg font-medium text-upsc-purple">+{badges.filter(badge => badge.unlocked).length - 3}</span>
          <span className="text-xs text-gray-500">More</span>
        </div>
      )}
    </div>
  );
};

export default UserBadges;
