import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "@/hooks/use-toast";
import { 
  Bike, 
  Utensils, 
  Recycle, 
  ShoppingBag, 
  Car, 
  Lightbulb, 
  Plus,
  Check
} from "lucide-react";

interface Action {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  name: string;
  description: string;
  impact: string;
  category: string;
  points: number;
  color: string;
}

const ActionLogger = () => {
  const [loggedActions, setLoggedActions] = useState<string[]>([]);

  const availableActions: Action[] = [
    {
      id: "bike-commute",
      icon: Bike,
      name: "Bike to Work",
      description: "Cycled instead of driving",
      impact: "2.3 kg CO₂ saved",
      category: "Transport",
      points: 15,
      color: "bg-primary"
    },
    {
      id: "plant-meal",
      icon: Utensils,
      name: "Plant-Based Meal",
      description: "Chose a vegetarian option",
      impact: "1.8 kg CO₂ saved",
      category: "Food",
      points: 10,
      color: "bg-leaf"
    },
    {
      id: "recycle",
      icon: Recycle,
      name: "Recycle Items",
      description: "Properly sorted waste",
      impact: "0.5 kg waste diverted",
      category: "Waste",
      points: 8,
      color: "bg-earth"
    },
    {
      id: "reusable-bag",
      icon: ShoppingBag,
      name: "Reusable Shopping Bag",
      description: "Used eco-friendly bags",
      impact: "Plastic bags avoided",
      category: "Consumption",
      points: 5,
      color: "bg-success"
    },
    {
      id: "public-transport",
      icon: Car,
      name: "Public Transport",
      description: "Used bus/train instead of car",
      impact: "1.5 kg CO₂ saved",
      category: "Transport",
      points: 12,
      color: "bg-water"
    },
    {
      id: "energy-save",
      icon: Lightbulb,
      name: "Energy Conservation",
      description: "Turned off unused lights",
      impact: "0.3 kWh saved",
      category: "Energy",
      points: 6,
      color: "bg-warning"
    }
  ];

  const handleLogAction = (action: Action) => {
    if (loggedActions.includes(action.id)) return;
    
    setLoggedActions(prev => [...prev, action.id]);
    
    toast({
      title: "Action Logged! 🌱",
      description: `+${action.points} points earned! ${action.impact}`,
    });
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Log Your Actions</h2>
        <p className="text-muted-foreground">Track your sustainable choices and earn points</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {availableActions.map((action, index) => {
          const IconComponent = action.icon;
          const isLogged = loggedActions.includes(action.id);
          
          return (
            <Card 
              key={action.id}
              className={`relative overflow-hidden border transition-all duration-300 hover:shadow-custom-md animate-fade-in ${
                isLogged ? 'bg-success/5 border-success/30' : 'hover:-translate-y-1'
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${action.color} text-white`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-semibold">
                        {action.name}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {action.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-primary font-bold text-sm">
                      +{action.points}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-2">
                  {action.description}
                </p>
                <p className="text-xs text-success font-medium mb-3">
                  {action.impact}
                </p>
                <Button
                  onClick={() => handleLogAction(action)}
                  disabled={isLogged}
                  variant={isLogged ? "secondary" : "default"}
                  size="sm"
                  className="w-full transition-all duration-200"
                >
                  {isLogged ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Logged
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 mr-2" />
                      Log Action
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ActionLogger;