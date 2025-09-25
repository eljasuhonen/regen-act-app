import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Leaf, Droplets, Trash2, Zap } from "lucide-react";

interface ImpactMetric {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: number;
  unit: string;
  progress: number;
  color: string;
  gradient: string;
}

const ImpactDashboard = () => {
  const impactMetrics: ImpactMetric[] = [
    {
      icon: Leaf,
      label: "CO₂ Saved",
      value: 24.5,
      unit: "kg",
      progress: 68,
      color: "text-success",
      gradient: "bg-gradient-success"
    },
    {
      icon: Droplets,
      label: "Water Saved",
      value: 450,
      unit: "L",
      progress: 45,
      color: "text-water",
      gradient: "bg-gradient-water"
    },
    {
      icon: Trash2,
      label: "Waste Prevented",
      value: 12.3,
      unit: "kg",
      progress: 82,
      color: "text-earth",
      gradient: "bg-gradient-earth"
    },
    {
      icon: Zap,
      label: "Energy Saved",
      value: 89,
      unit: "kWh",
      progress: 56,
      color: "text-warning",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Your Impact</h2>
        <p className="text-muted-foreground">See how your actions are making a difference</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {impactMetrics.map((metric, index) => {
          const IconComponent = metric.icon;
          return (
            <Card 
              key={metric.label} 
              className="relative overflow-hidden border-border/50 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${metric.gradient}`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-foreground">
                      {metric.value}
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        {metric.unit}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {metric.progress}%
                    </span>
                  </div>
                  <Progress 
                    value={metric.progress} 
                    className="h-2"
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Card className="mt-6 bg-gradient-primary text-white border-0 shadow-custom-lg">
        <CardContent className="pt-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
            <Leaf className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Great job!</h3>
          <p className="text-white/90 text-sm">
            Your actions this month are equivalent to planting 3.2 trees
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactDashboard;