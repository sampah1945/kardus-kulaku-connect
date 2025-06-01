
import { useState } from "react";
import { Navigation } from "./Navigation";
import { PickupMap } from "./collector/PickupMap";
import { ActivePickups } from "./collector/ActivePickups";
import { Transactions } from "./collector/Transactions";
import { Subscription } from "./collector/Subscription";
import { CollectorAccount } from "./collector/CollectorAccount";

interface CollectorDashboardProps {
  onLogout: () => void;
}

export const CollectorDashboard = ({ onLogout }: CollectorDashboardProps) => {
  const [activeTab, setActiveTab] = useState('map');

  const renderContent = () => {
    switch (activeTab) {
      case 'map':
        return <PickupMap />;
      case 'active':
        return <ActivePickups />;
      case 'transactions':
        return <Transactions />;
      case 'subscription':
        return <Subscription />;
      case 'account':
        return <CollectorAccount />;
      default:
        return <PickupMap />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Navigation 
        userRole="collector" 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        onLogout={onLogout} 
      />
      <div className="p-4">
        {renderContent()}
      </div>
    </div>
  );
};
