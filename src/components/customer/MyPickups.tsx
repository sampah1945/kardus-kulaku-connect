
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const MyPickups = () => {
  const [pickups] = useState([
    {
      id: 1,
      status: "pending",
      items: "Kardus & Kertas Bekas",
      weight: "5 kg",
      location: "Jl. Sudirman No. 123, Jakarta",
      date: "2024-06-01",
      time: "09:00 - 12:00",
      photo: "/placeholder.svg",
      notes: "Kondisi baik, sudah dipisahkan"
    },
    {
      id: 2,
      status: "taken",
      items: "Botol Plastik",
      weight: "8 kg",
      location: "Jl. Thamrin No. 456, Jakarta",
      date: "2024-05-28",
      time: "14:00 - 17:00",
      photo: "/placeholder.svg",
      collectorName: "Pengepul Jaya",
      collectorPhone: "0812-3456-7890"
    },
    {
      id: 3,
      status: "completed",
      items: "Kaleng Bekas",
      weight: "3 kg",
      actualWeight: "3.2 kg",
      location: "Jl. Gatot Subroto No. 789, Jakarta",
      date: "2024-05-25",
      time: "10:00 - 13:00",
      photo: "/placeholder.svg",
      collectorName: "CV Recycle Pro",
      pricePaid: "Rp 25.000"
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'taken': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Menunggu Pengepul';
      case 'taken': return 'Diambil Pengepul';
      case 'completed': return 'Selesai';
      default: return status;
    }
  };

  const pendingPickups = pickups.filter(p => p.status === 'pending');
  const activePickups = pickups.filter(p => p.status === 'taken');
  const completedPickups = pickups.filter(p => p.status === 'completed');

  const PickupCard = ({ pickup }: { pickup: any }) => (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {pickup.items}
              <Badge className={getStatusColor(pickup.status)}>
                {getStatusText(pickup.status)}
              </Badge>
            </CardTitle>
            <CardDescription className="mt-1">
              📍 {pickup.location}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Estimasi Berat:</span>
            <div className="font-medium">{pickup.weight}</div>
          </div>
          <div>
            <span className="text-gray-500">Jadwal:</span>
            <div className="font-medium">{pickup.date}</div>
            <div className="text-xs text-gray-400">{pickup.time}</div>
          </div>
        </div>

        {pickup.status === 'taken' && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-sm font-medium text-blue-800">Kontak Pengepul:</div>
            <div className="text-sm text-blue-600">{pickup.collectorName}</div>
            <div className="text-sm text-blue-600">{pickup.collectorPhone}</div>
          </div>
        )}

        {pickup.status === 'completed' && (
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <span className="text-gray-500">Berat Aktual:</span>
                <div className="font-medium text-green-700">{pickup.actualWeight}</div>
              </div>
              <div>
                <span className="text-gray-500">Dibayar:</span>
                <div className="font-medium text-green-700">{pickup.pricePaid}</div>
              </div>
            </div>
            <div className="mt-2 text-xs text-gray-500">Pengepul: {pickup.collectorName}</div>
          </div>
        )}

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Lihat Detail
          </Button>
          {pickup.status === 'pending' && (
            <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
              Batalkan
            </Button>
          )}
          {pickup.status === 'completed' && (
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              Beri Rating
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pickup Saya</h1>
        <Button className="bg-gradient-to-r from-green-500 to-blue-600">
          + Buat Pickup Baru
        </Button>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pending" className="relative">
            Menunggu
            {pendingPickups.length > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs">
                {pendingPickups.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="active" className="relative">
            Aktif
            {activePickups.length > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs">
                {activePickups.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="completed">Selesai</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-4">
          {pendingPickups.length > 0 ? (
            pendingPickups.map(pickup => <PickupCard key={pickup.id} pickup={pickup} />)
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <div className="text-gray-400 text-4xl mb-4">📦</div>
                <CardTitle className="text-gray-600 mb-2">Tidak Ada Pickup Menunggu</CardTitle>
                <CardDescription>Buat permintaan pickup baru untuk mulai menjual barang bekas Anda</CardDescription>
                <Button className="mt-4 bg-gradient-to-r from-green-500 to-blue-600">
                  Buat Pickup Baru
                </Button>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="active" className="mt-4">
          {activePickups.length > 0 ? (
            activePickups.map(pickup => <PickupCard key={pickup.id} pickup={pickup} />)
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <div className="text-gray-400 text-4xl mb-4">🔄</div>
                <CardTitle className="text-gray-600 mb-2">Tidak Ada Pickup Aktif</CardTitle>
                <CardDescription>Pickup aktif akan muncul di sini ketika pengepul mengambil pesanan Anda</CardDescription>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          {completedPickups.length > 0 ? (
            completedPickups.map(pickup => <PickupCard key={pickup.id} pickup={pickup} />)
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <div className="text-gray-400 text-4xl mb-4">✅</div>
                <CardTitle className="text-gray-600 mb-2">Belum Ada Pickup Selesai</CardTitle>
                <CardDescription>Riwayat pickup yang sudah selesai akan muncul di sini</CardDescription>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};
