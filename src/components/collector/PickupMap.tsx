
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const PickupMap = () => {
  const [viewMode, setViewMode] = useState('map');
  const [filterWeight, setFilterWeight] = useState('all');
  const [filterRadius, setFilterRadius] = useState('all');

  const mockPickups = [
    {
      id: 1,
      items: "Kardus & Kertas",
      weight: "5 kg",
      category: "light",
      location: "Jl. Sudirman No. 123",
      distance: "0.8 km",
      estimatedValue: "Rp 20.000",
      urgency: "normal",
      time: "2 jam lalu",
      customerRating: 4.8
    },
    {
      id: 2,
      items: "Botol Plastik PET",
      weight: "8 kg",
      category: "medium",
      location: "Jl. Thamrin No. 456",
      distance: "1.2 km",
      estimatedValue: "Rp 24.000",
      urgency: "urgent",
      time: "5 jam lalu",
      customerRating: 4.5
    },
    {
      id: 3,
      items: "Besi & Logam",
      weight: "25 kg",
      category: "heavy",
      location: "Jl. Gatot Subroto No. 789",
      distance: "2.1 km",
      estimatedValue: "Rp 200.000",
      urgency: "normal",
      time: "1 hari lalu",
      customerRating: 4.9
    }
  ];

  const getWeightColor = (category: string) => {
    switch (category) {
      case 'light': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'heavy': return 'bg-red-100 text-red-800';
      case 'very-heavy': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'border-l-red-500 animate-pulse';
      case 'normal': return 'border-l-blue-500';
      default: return 'border-l-gray-500';
    }
  };

  const PickupCard = ({ pickup }: { pickup: any }) => (
    <Card className={`mb-4 border-l-4 ${getUrgencyColor(pickup.urgency)} hover:shadow-lg transition-all duration-300`}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {pickup.items}
              <Badge className={getWeightColor(pickup.category)}>
                {pickup.weight}
              </Badge>
              {pickup.urgency === 'urgent' && (
                <Badge className="bg-red-100 text-red-800 animate-pulse">
                  🔥 Urgent
                </Badge>
              )}
            </CardTitle>
            <CardDescription className="mt-1 space-y-1">
              <div>📍 {pickup.location}</div>
              <div className="flex items-center gap-3 text-sm">
                <span>📏 {pickup.distance}</span>
                <span>💰 {pickup.estimatedValue}</span>
                <span>⏰ {pickup.time}</span>
              </div>
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Rating Pelanggan:</span>
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">⭐</span>
            <span className="font-medium">{pickup.customerRating}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button size="sm" className="flex-1 bg-gradient-to-r from-green-500 to-blue-600">
            Ambil Order
          </Button>
          <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
            Lihat Detail
          </Button>
          <Button variant="outline" size="sm" className="text-green-600 border-green-200">
            Hubungi
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4">
      {/* Header with Subscription Info */}
      <Card className="bg-gradient-to-r from-blue-500 to-green-600 text-white">
        <CardHeader className="pb-3">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Peta Pickup</CardTitle>
              <CardDescription className="text-blue-100">
                Tier: Pengepul Besar • Radius: 10 km • Berat: Semua
              </CardDescription>
            </div>
            <Badge className="bg-white text-blue-600">
              Trial: 25 hari tersisa
            </Badge>
          </div>
        </CardHeader>
      </Card>

      {/* Filter Controls */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Filter & Kontrol</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Berat</label>
              <Select value={filterWeight} onValueChange={setFilterWeight}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih berat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Berat</SelectItem>
                  <SelectItem value="light">Ringan (0-5kg)</SelectItem>
                  <SelectItem value="medium">Sedang (5-15kg)</SelectItem>
                  <SelectItem value="heavy">Berat (15-50kg)</SelectItem>
                  <SelectItem value="very-heavy">Sangat Berat (>50kg)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">Radius</label>
              <Select value={filterRadius} onValueChange={setFilterRadius}>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih radius" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua (10km)</SelectItem>
                  <SelectItem value="1km">1 km</SelectItem>
                  <SelectItem value="3km">3 km</SelectItem>
                  <SelectItem value="5km">5 km</SelectItem>
                  <SelectItem value="10km">10 km</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant={viewMode === 'map' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setViewMode('map')}
              className="flex-1"
            >
              🗺️ Peta
            </Button>
            <Button 
              variant={viewMode === 'list' ? 'default' : 'outline'} 
              size="sm" 
              onClick={() => setViewMode('list')}
              className="flex-1"
            >
              📋 List
            </Button>
            <Button variant="outline" size="sm" className="text-orange-600 border-orange-200">
              🔥 Heatmap
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Map/List View */}
      <Tabs value={viewMode} onValueChange={setViewMode}>
        <TabsContent value="map" className="mt-4">
          <Card className="h-64 bg-gradient-to-br from-green-100 to-blue-100">
            <CardContent className="h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <CardTitle className="text-gray-600 mb-2">Peta Interaktif</CardTitle>
                <CardDescription>
                  Peta dengan marker pickup akan ditampilkan di sini
                </CardDescription>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                  <Badge className="bg-green-100 text-green-800">🟢 Ringan (0-5kg)</Badge>
                  <Badge className="bg-yellow-100 text-yellow-800">🟡 Sedang (5-15kg)</Badge>
                  <Badge className="bg-red-100 text-red-800">🔴 Berat (15-50kg)</Badge>
                  <Badge className="bg-purple-100 text-purple-800">🟣 Sangat Berat (>50kg)</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="list" className="mt-4">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Pickup Tersedia ({mockPickups.length})</h3>
              <Button variant="outline" size="sm">
                🔄 Refresh
              </Button>
            </div>
            
            {mockPickups.map(pickup => (
              <PickupCard key={pickup.id} pickup={pickup} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{mockPickups.length}</div>
            <div className="text-sm text-gray-500">Pickup Tersedia</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">2.1 km</div>
            <div className="text-sm text-gray-500">Rata-rata Jarak</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">Rp 81K</div>
            <div className="text-sm text-gray-500">Estimasi Nilai</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
