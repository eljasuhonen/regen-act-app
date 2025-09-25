import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Share2, Leaf } from "lucide-react";

interface CommunityPost {
  id: string;
  user: {
    name: string;
    avatar: string;
    level: number;
  };
  action: string;
  description: string;
  impact: string;
  timeAgo: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  category: string;
  image?: string;
}

const CommunityFeed = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([
    {
      id: "1",
      user: {
        name: "Emma K.",
        avatar: "",
        level: 12
      },
      action: "Completed 7-day plant-based challenge",
      description: "Just finished a week of delicious plant-based meals! My favorite was the lentil curry 🌱",
      impact: "12.6 kg CO₂ saved this week",
      timeAgo: "2 hours ago",
      likes: 24,
      comments: 8,
      isLiked: false,
      category: "Food"
    },
    {
      id: "2",
      user: {
        name: "Mikael R.",
        avatar: "",
        level: 8
      },
      action: "Cycled to work for 30 days straight",
      description: "Finally hit my monthly cycling goal! The morning rides have become my favorite part of the day.",
      impact: "69 kg CO₂ saved this month",
      timeAgo: "5 hours ago",
      likes: 42,
      comments: 12,
      isLiked: true,
      category: "Transport"
    },
    {
      id: "3",
      user: {
        name: "Sara L.",
        avatar: "",
        level: 15
      },
      action: "Zero waste grocery shopping",
      description: "Brought my own containers and bags to the farmer's market. Zero plastic packaging!",
      impact: "2.1 kg waste prevented",
      timeAgo: "1 day ago",
      likes: 18,
      comments: 5,
      isLiked: false,
      category: "Waste"
    }
  ]);

  const handleLike = (postId: string) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1
            }
          : post
      )
    );
  };

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Food: "bg-leaf",
      Transport: "bg-primary",
      Waste: "bg-earth",
      Energy: "bg-warning"
    };
    return colors[category] || "bg-primary";
  };

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">Community</h2>
        <p className="text-muted-foreground">Get inspired by others' sustainable actions</p>
      </div>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card 
            key={post.id}
            className="border-border/50 shadow-custom-sm hover:shadow-custom-md transition-all duration-300 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-10 h-10">
                    <AvatarImage src={post.user.avatar} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {post.user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-sm">{post.user.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        Level {post.user.level}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{post.timeAgo}</p>
                  </div>
                </div>
                <Badge className={`${getCategoryColor(post.category)} text-white`}>
                  {post.category}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-foreground mb-1">{post.action}</h4>
                  <p className="text-sm text-muted-foreground">{post.description}</p>
                </div>
                
                <div className="flex items-center space-x-2 p-2 bg-success/10 rounded-lg">
                  <Leaf className="w-4 h-4 text-success" />
                  <span className="text-sm font-medium text-success">{post.impact}</span>
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t border-border/50">
                  <div className="flex items-center space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleLike(post.id)}
                      className={`h-8 px-2 ${post.isLiked ? 'text-red-500' : 'text-muted-foreground'}`}
                    >
                      <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? 'fill-current' : ''}`} />
                      {post.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.comments}
                    </Button>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 px-2 text-muted-foreground">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityFeed;