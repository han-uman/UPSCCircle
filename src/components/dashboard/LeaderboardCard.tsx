
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';

type UserRankType = {
  id: string;
  name: string;
  avatar: string;
  points: number;
  rank: number;
};

interface LeaderboardCardProps {
  users: UserRankType[];
  category: string;
}

const LeaderboardCard = ({ users, category }: LeaderboardCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{category} Leaderboard</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user.id} className="flex items-center gap-3">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 text-upsc-purple font-bold">
                {user.rank}
              </div>
              <Avatar className="h-10 w-10">
                <img src={user.avatar} alt={user.name} className="object-cover" />
              </Avatar>
              <div className="flex-1">
                <p className="font-medium">{user.name}</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="font-bold text-upsc-purple">{user.points}</span>
                <span className="text-sm text-gray-500">pts</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;
