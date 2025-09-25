import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Bell, Settings } from "lucide-react";
import regenactLogo from "@/assets/regenact-logo.png";

const Header = () => {
  return (
    <div className="bg-background border-b border-border/50 px-4 py-3 sticky top-0 z-40">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src={regenactLogo} 
            alt="RegenAct" 
            className="w-8 h-8 rounded-lg"
          />
          <div>
            <h1 className="text-lg font-bold text-foreground">RegenAct</h1>
            <p className="text-xs text-muted-foreground">Make every action count</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="relative">
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse-success"></div>
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="text-right">
              <div className="text-sm font-semibold text-foreground">Emma K.</div>
              <Badge variant="secondary" className="text-xs">
                Level 12
              </Badge>
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage src="" />
              <AvatarFallback className="bg-primary text-primary-foreground text-sm">
                EK
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;