import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Sparkles, 
  MapPin, 
  Clock, 
  TrendingUp, 
  ArrowRight,
  Lightbulb,
  Target
} from "lucide-react";

interface Recommendation {
  id: string;
  type: "challenge" | "tip" | "local" | "trending";
  title: string;
  description: string;
  impact: string;
  difficulty: "easy" | "medium" | "hard";
  timeEstimate: string;
  location?: string;
  isPersonalized: boolean;
  points: number;
}

const RegenAgent = () => {
  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: "1",
      type: "challenge",
      title: "5-Day Bike Challenge",
      description: "Replace short car trips with cycling this week. Perfect for the sunny weather ahead!",
      impact: "11.5 kg CO₂ potential savings",
      difficulty: "medium",
      timeEstimate: "5 days",
      isPersonalized: true,
      points: 75
    },
    {
      id: "2",
      type: "local",
      title: "Vantaa Recycling Event",
      description: "Bring electronics and batteries to Tikkurila Community Center this Saturday",
      impact: "Proper disposal of hazardous waste",
      difficulty: "easy",
      timeEstimate: "30 min",
      location: "Tikkurila, Vantaa",
      isPersonalized: false,
      points: 20
    },
    {
      id: "3",
      type: "tip",
      title: "Meal Prep Sunday",
      description: "Based on your cooking habits, prep plant-based meals for the week to save time and impact",
      impact: "4.2 kg CO₂ weekly savings",
      difficulty: "easy",
      timeEstimate: "2 hours",
      isPersonalized: true,
      points: 30
    },
    {
      id: "4",
      type: "trending",
      title: "Join Community Garden",
      description: "268 people in your area are growing their own food. Find a plot near you!",
      impact: "Fresh food + community connection",
      difficulty: "medium",
      timeEstimate: "Ongoing",
      isPersonalized: false,
      points: 50
    }
  ]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "challenge":
        return Target;
      case "local":
        return MapPin;
      case "tip":
        return Lightbulb;
      case "trending":
        return TrendingUp;
      default:
        return Sparkles;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "challenge":
        return "bg-primary text-primary-foreground";
      case "local":
        return "bg-earth text-white";
      case "tip":
        return "bg-warning text-warning-foreground";
      case "trending":
        return "bg-accent text-accent-foreground";
      default:
        return "bg-primary text-primary-foreground";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-success/20 text-success";
      case "medium":
        return "bg-warning/20 text-warning";
      case "hard":
        return "bg-destructive/20 text-destructive";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="p-2 bg-gradient-primary rounded-full">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-foreground">RegenAgent</h2>
        </div>
        <p className="text-muted-foreground">Personalized recommendations just for you</p>
      </div>

      <div className="space-y-4">
        {recommendations.map((rec, index) => {
          const TypeIcon = getTypeIcon(rec.type);
          
          return (
            <Card 
              key={rec.id}
              className={`relative overflow-hidden border transition-all duration-300 hover:shadow-custom-md hover:-translate-y-1 animate-fade-in ${
                rec.isPersonalized ? 'ring-1 ring-primary/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {rec.isPersonalized && (
                <div className="absolute top-0 right-0 bg-gradient-primary text-white px-2 py-1 text-xs font-medium rounded-bl-lg">
                  <Sparkles className="w-3 h-3 inline mr-1" />
                  For You
                </div>
              )}
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${getTypeColor(rec.type)}`}>
                      <TypeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold mb-1">
                        {rec.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge className={getDifficultyColor(rec.difficulty)}>
                          {rec.difficulty}
                        </Badge>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Clock className="w-3 h-3 mr-1" />
                          {rec.timeEstimate}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold">
                      +{rec.points}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    {rec.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-success font-medium">
                      <div className="w-2 h-2 bg-success rounded-full"></div>
                      {rec.impact}
                    </div>
                    {rec.location && (
                      <div className="flex items-center text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3 mr-1" />
                        {rec.location}
                      </div>
                    )}
                  </div>
                  
                  <Button className="w-full group" variant="default">
                    Start Action
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      
      <Card className="bg-gradient-primary text-white border-0 shadow-custom-lg">
        <CardContent className="pt-6 text-center">
          <Sparkles className="w-12 h-12 mx-auto mb-3 opacity-80" />
          <h3 className="text-lg font-semibold mb-2">AI Insights Coming Soon</h3>
          <p className="text-white/90 text-sm">
            Advanced personalization with local data and smart notifications
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default RegenAgent;