
import { Button } from "@/components/ui/button";
import { Home, Package, Bell, FileText, User, Map, RotateCcw, DollarSign, BarChart3 } from "lucide-react";

interface NavigationProps {
  userRole: 'customer' | 'collector';
  activeTab: string;
  onTabChange: (tab: string) => void;
  onLogout: () => void;
}

export const Navigation = ({ userRole, activeTab, onTabChange, onLogout }: NavigationProps) => {
  const customerTabs = [
    { id: 'home', label: 'Beranda', icon: Home },
    { id: 'pickups', label: 'Pickup Saya', icon: Package },
    { id: 'notifications', label: 'Notifikasi', icon: Bell },
    { id: 'history', label: 'Riwayat', icon: FileText },
    { id: 'account', label: 'Akun', icon: User }
  ];

  const collectorTabs = [
    { id: 'map', label: 'Peta Pickup', icon: Map },
    { id: 'active', label: 'Pickup Aktif', icon: RotateCcw },
    { id: 'transactions', label: 'Transaksi', icon: DollarSign },
    { id: 'subscription', label: 'Langganan', icon: BarChart3 },
    { id: 'account', label: 'Akun', icon: User }
  ];

  const tabs = userRole === 'customer' ? customerTabs : collectorTabs;

  return (
    <>
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white">
            <Package size={24} />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">KardusKulaku</h1>
            <p className="text-sm text-gray-500 capitalize">{userRole === 'customer' ? 'Pelanggan' : 'Pengepul'}</p>
          </div>
        </div>
        <Button variant="outline" onClick={onLogout} className="text-gray-600 border-gray-300 hover:bg-gray-50">
          Logout
        </Button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-5 h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center space-y-1 p-2 transition-colors ${
                  activeTab === tab.id
                    ? 'text-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon size={20} strokeWidth={activeTab === tab.id ? 2.5 : 2} />
                <span className="text-xs font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
