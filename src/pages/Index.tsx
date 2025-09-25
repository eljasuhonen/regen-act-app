import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import HomePage from "@/components/HomePage";
import ActionLogger from "@/components/ActionLogger";
import ImpactDashboard from "@/components/ImpactDashboard";
import CommunityFeed from "@/components/CommunityFeed";
import RegenAgent from "@/components/RegenAgent";

const Index = () => {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "actions":
        return <ActionLogger />;
      case "impact":
        return <ImpactDashboard />;
      case "community":
        return <CommunityFeed />;
      case "agent":
        return <RegenAgent />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="px-4 py-6 max-w-md mx-auto">
        {renderContent()}
      </main>
      
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
