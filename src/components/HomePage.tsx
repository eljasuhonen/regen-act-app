import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Target, 
  Users, 
  Sparkles, 
  ArrowRight,
  Flame,
  Trophy,
  Zap
} from "lucide-react";

const HomePage = () => {
  const todayStats = {
    actionsCompleted: 3,
    pointsEarned: 28,
    streak: 7
  };

  const weeklyGoal = {
    current: 15,
    target: 20,
    progress: 75
  };

  const quickActions = [
    { name: "Log Bike Ride", points: 15, icon: "🚴‍♀️" },
    { name: "Plant-Based Meal", points: 10, icon: "🌱" },
    { name: "Recycle Items", points: 8, icon: "♻️" },
    { name: "Energy Save", points: 6, icon: "💡" }
  ];

  const achievements = [
    { name: "Week Warrior", description: "Complete 7 days of actions", unlocked: true },
    { name: "Eco Champion", description: "Save 50kg CO₂", unlocked: false },
    { name: "Community Star", description: "Get 100 likes", unlocked: false }
  ];

  return (
    <div className="space-y-6 pb-20">
      {/* Welcome Section */}
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Welcome back, Emma!</h2>
        <p className="text-muted-foreground">Let's make today count for the planet</p>
      </div>

      {/* Today's Progress */}
      <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-semibold">Today's Impact</h3>
              <p className="text-white/80 text-sm">Keep up the great work!</p>
            </div>
            <div className="flex items-center space-x-1">
              <Flame className="w-5 h-5 text-orange-300" />
              <span className="font-bold text-lg">{todayStats.streak}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{todayStats.actionsCompleted}</div>
              <div className="text-white/80 text-xs">Actions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{todayStats.pointsEarned}</div>
              <div className="text-white/80 text-xs">Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">4.2kg</div>
              <div className="text-white/80 text-xs">CO₂ Saved</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Goal */}
      <Card className="border-border/50 shadow-custom-sm">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base font-semibold flex items-center">
              <Target className="w-5 h-5 mr-2 text-primary" />
              Weekly Goal
            </CardTitle>
            <Badge variant="secondary" className="bg-primary/10 text-primary">
              {weeklyGoal.current}/{weeklyGoal.target} actions
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <Progress value={weeklyGoal.progress} className="h-3" />
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium text-primary">{weeklyGoal.progress}%</span>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground flex items-center">
          <Zap className="w-5 h-5 mr-2 text-warning" />
          Quick Actions
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {quickActions.map((action, index) => (
            <Card 
              key={action.name}
              className="border-border/50 hover:shadow-custom-md transition-all duration-200 hover:-translate-y-1 cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardContent className="pt-4 text-center">
                <div className="text-2xl mb-2">{action.icon}</div>
                <div className="text-sm font-medium text-foreground mb-1">
                  {action.name}
                </div>
                <div className="text-xs text-primary font-bold">
                  +{action.points} points
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Achievements Preview */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-foreground flex items-center">
            <Trophy className="w-5 h-5 mr-2 text-warning" />
            Achievements
          </h3>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
        
        <div className="space-y-2">
          {achievements.slice(0, 2).map((achievement, index) => (
            <Card 
              key={achievement.name}
              className={`border-border/50 transition-all duration-300 animate-fade-in ${
                achievement.unlocked ? 'bg-success/5 border-success/30' : 'opacity-60'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      achievement.unlocked ? 'bg-success text-white' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">{achievement.name}</div>
                      <div className="text-xs text-muted-foreground">{achievement.description}</div>
                    </div>
                  </div>
                  {achievement.unlocked && (
                    <Badge className="bg-success text-success-foreground">
                      Unlocked
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Community Highlight */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="pt-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <Users className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Community Highlight</span>
              </div>
              <p className="text-sm text-muted-foreground">
                268 people in Vantaa saved 1.2 tons of CO₂ this week!
              </p>
            </div>
            <Button variant="outline" size="sm">
              Join
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;