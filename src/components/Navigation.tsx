import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Plus, 
  BarChart3, 
  Users, 
  Sparkles,
  User 
} from "lucide-react";

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "actions", icon: Plus, label: "Actions" },
    { id: "impact", icon: BarChart3, label: "Impact" },
    { id: "community", icon: Users, label: "Community" },
    { id: "agent", icon: Sparkles, label: "Agent" }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border/50 px-4 py-2 z-50">
      <div className="flex justify-around items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center space-y-1 h-auto py-2 px-3 transition-all duration-200 ${
                isActive 
                  ? 'text-primary bg-primary/10' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <IconComponent className={`w-5 h-5 ${isActive ? 'animate-pulse-success' : ''}`} />
              <span className="text-xs font-medium">{item.label}</span>
              {isActive && (
                <div className="w-1 h-1 bg-primary rounded-full animate-grow"></div>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Navigation;