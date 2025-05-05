
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

type GoalType = {
  id: string;
  title: string;
  deadline: string;
  progress: number;
};

interface GoalProgressCardProps {
  goals: GoalType[];
}

const GoalProgressCard = ({ goals }: GoalProgressCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Study Goals</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div key={goal.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-medium">{goal.title}</h4>
                <Badge variant="outline">
                  {goal.deadline === 'Ongoing' ? 'Ongoing' : `Due ${new Date(goal.deadline).toLocaleDateString()}`}
                </Badge>
              </div>
              <div className="w-full mb-1">
                <Progress value={goal.progress} className="h-2" />
              </div>
              <div className="flex justify-between text-xs text-gray-500">
                <span>Progress: {goal.progress}%</span>
                <span>Target: 100%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GoalProgressCard;
