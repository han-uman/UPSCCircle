
import { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { CheckCircle } from 'lucide-react';

interface AnimatedTaskBarProps {
  title: string;
  target: number;
  current: number;
  color?: string;
}

const AnimatedTaskBar = ({ title, target, current, color = 'bg-upsc-purple' }: AnimatedTaskBarProps) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    // Animate progress over time
    const timer = setTimeout(() => {
      setProgress(Math.min((current / target) * 100, 100));
    }, 300);
    
    return () => clearTimeout(timer);
  }, [current, target]);
  
  const isComplete = current >= target;
  
  return (
    <div className="mb-4 bg-white p-3 border rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {isComplete && (
            <div className="text-green-500">
              <CheckCircle size={18} />
            </div>
          )}
          <h4 className="font-medium text-sm">{title}</h4>
        </div>
        <span className="text-sm text-gray-500">
          {current}/{target}
        </span>
      </div>
      <Progress value={progress} className="h-2" indicatorClassName={color} />
    </div>
  );
};

export default AnimatedTaskBar;
