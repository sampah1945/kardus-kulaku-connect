
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const PickupMap = () => {
  const [viewMode, setViewMode] = useState<'map' | 'list'>('map');
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock data untuk pickup requests
  const pickupRequests = [
    {
      id: 1,
      customerName: "Siti Nurhaliza",
      phone: "0812-3456-7890",
      address: "Jl. Mangga No. 15, Surabaya",
      itemType: "Kardus & Kertas",
      estimatedWeight: "8 kg",
      estimatedValue: "Rp 32.000 - 40.000",
      timePosted: "2 jam lalu",
      urgent: false,
      category: "medium",
      distance: "2.3 km"
    },
    {
      id: 2,
      customerName: "Budi Santoso",
      phone: "0813-9876-5432",
      address: "Jl. Kenari No. 88, Surabaya",
      itemType: "Botol Plastik PET",
      estimatedWeight: "12 kg",
      estimatedValue: "Rp 36.000 - 48.000",
      timePosted: "5 jam lalu",
      urgent: true,
      category: "medium",
      distance: "1.8 km"
    },
    {
      id: 3,
      customerName: "Maya Sari",
      phone: "0811-2233-4455",
      address: "Jl. Melati No. 42, Surabaya",
      itemType: "Kaleng Bekas",
      estimatedWeight: "6 kg",
      estimatedValue: "Rp 48.000 - 60.000",
      timePosted: "1 hari lalu",
      urgent: false,
      category: "medium",
      distance: "3.1 km"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'light': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'heavy': return 'bg-red-100 text-red-800';
      case 'very_heavy': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header dengan toggle view dan filter */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Peta Pickup</h1>
        <div className="flex gap-2">
          <Button
            variant={viewMode === 'map' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('map')}
          >
            🗺️ Peta
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
          >
            📋 List
          </Button>
        </div>
      </div>

      {/* Filter controls */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Semua Pickup', count: 12 },
              { id: 'available', label: 'Tersedia', count: 8 },
              { id: 'urgent', label: 'Urgent', count: 3 },
              { id: 'high_value', label: 'Nilai Tinggi', count: 5 },
              { id: 'nearby', label: 'Terdekat', count: 6 }
            ].map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedFilter(filter.id)}
                className="text-xs"
              >
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Map atau List View */}
      {viewMode === 'map' ? (
        <Card className="h-96">
          <CardContent className="p-6 h-full flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
            <div className="text-center space-y-4">
              <div className="text-6xl">🗺️</div>
              <div className="text-xl font-semibold text-gray-700">Peta Interaktif</div>
              <div className="text-gray-500">
                Peta dengan marker pickup akan ditampilkan di sini
              </div>
              <div className="text-sm text-gray-400">
                *Integrasi dengan Leaflet.js atau Google Maps
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {pickupRequests.map((pickup) => (
            <Card key={pickup.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      {pickup.customerName}
                      {pickup.urgent && (
                        <Badge className="bg-red-100 text-red-800 animate-pulse">🚨 URGENT</Badge>
                      )}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      📍 {pickup.address} • 📏 {pickup.distance}
                    </CardDescription>
                  </div>
                  <Badge className={getCategoryColor(pickup.category)}>
                    {pickup.estimatedWeight}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Jenis Barang:</span>
                    <div className="font-medium">{pickup.itemType}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Estimasi Nilai:</span>
                    <div className="font-medium text-green-600">{pickup.estimatedValue}</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">📱 {pickup.phone}</span>
                    <span className="text-gray-500">⏰ {pickup.timePosted}</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 text-blue-600 border-blue-200 hover:bg-blue-50">
                    👁️ Detail
                  </Button>
                  <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                    📞 Hubungi
                  </Button>
                  <Button size="sm" className="bg-gradient-to-r from-blue-500 to-green-600">
                    ✋ Ambil
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Summary stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">12</div>
            <div className="text-sm text-gray-500">Pickup Tersedia</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">3</div>
            <div className="text-sm text-gray-500">Dalam Radius</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">2.1 km</div>
            <div className="text-sm text-gray-500">Rata-rata Jarak</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
