
import { Button } from "@/components/ui/button";

interface NavigationProps {
  userRole: 'customer' | 'collector';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

export const Navigation = ({ userRole, activeTab, onTabChange, onLogout }: NavigationProps) => {
  const customerTabs = [
    { id: 'home', label: 'Beranda', icon: '🏠' },
    { id: 'pickups', label: 'Pickup Saya', icon: '📦' },
    { id: 'notifications', label: 'Notifikasi', icon: '🔔' },
    { id: 'history', label: 'Riwayat', icon: '📋' },
    { id: 'account', label: 'Akun', icon: '👤' }
  ];

  const collectorTabs = [
    { id: 'map', label: 'Peta Pickup', icon: '🗺️' },
    { id: 'active', label: 'Pickup Aktif', icon: '🔄' },
    { id: 'transactions', label: 'Transaksi', icon: '💰' },
    { id: 'subscription', label: 'Langganan', icon: '📊' },
    { id: 'account', label: 'Akun', icon: '👤' }
  ];

  const tabs = userRole === 'customer' ? customerTabs : collectorTabs;

  return (
    <>
      {/* Top Header */}
      <div className="bg-white shadow-sm border-b p-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
            K
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">KardusKulaku</h1>
            <p className="text-sm text-gray-500 capitalize">{userRole}</p>
          </div>
        </div>
        <Button variant="outline" onClick={onLogout} className="text-red-600 border-red-200 hover:bg-red-50">
          Logout
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
        <div className="grid grid-cols-5 h-16">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center space-y-1 transition-all duration-200 ${
                activeTab === tab.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
