
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
      <div className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 p-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-lg">
            K
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-800">KardusKulaku</h1>
            <p className="text-sm text-gray-500 capitalize">{userRole === 'customer' ? 'Pelanggan' : 'Pengepul'}</p>
          </div>
        </div>
        <Button variant="outline" onClick={onLogout} className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-colors">
          Logout
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-100 shadow-2xl z-50">
        <div className="grid grid-cols-5 h-18">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center space-y-1 p-3 transition-all duration-300 ${
                activeTab === tab.id
                  ? 'text-blue-600 bg-blue-50/80 relative'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50/80'
              }`}
            >
              {activeTab === tab.id && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-blue-600 rounded-full"></div>
              )}
              <span className="text-xl">{tab.icon}</span>
              <span className="text-xs font-medium leading-tight text-center">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
