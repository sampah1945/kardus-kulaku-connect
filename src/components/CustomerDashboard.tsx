
import { useState } from "react";
import { Navigation } from "./Navigation";
import { CustomerHome } from "./customer/CustomerHome";
import { MyPickups } from "./customer/MyPickups";
import { CustomerNotifications } from "./customer/CustomerNotifications";
import { CustomerHistory } from "./customer/CustomerHistory";
import { CustomerAccount } from "./customer/CustomerAccount";

interface CustomerDashboardProps {
  onLogout: () => void;
}

export const CustomerDashboard = ({ onLogout }: CustomerDashboardProps) => {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <CustomerHome />;
      case 'pickups':
        return <MyPickups />;
      case 'notifications':
        return <CustomerNotifications />;
      case 'history':
        return <CustomerHistory />;
      case 'account':
        return <CustomerAccount />;
      default:
        return <CustomerHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Navigation 
        userRole="customer" 
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
