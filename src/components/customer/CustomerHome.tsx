
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const CustomerHome = () => {
  const recentPickups = [
    { id: 1, status: "pending", weight: "5 kg", items: "Kardus & Kertas", date: "2024-06-01" },
    { id: 2, status: "taken", weight: "8 kg", items: "Botol Plastik", date: "2024-05-28" },
    { id: 3, status: "completed", weight: "3 kg", items: "Kaleng Bekas", date: "2024-05-25" }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'taken': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'pending': return 'Menunggu';
      case 'taken': return 'Diambil';
      case 'completed': return 'Selesai';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <CardHeader>
          <CardTitle className="text-2xl">Selamat Datang! 👋</CardTitle>
          <CardDescription className="text-green-100">
            Siap untuk menjual barang bekas Anda?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="bg-white text-green-600 hover:bg-gray-100 font-semibold">
            + Buat Permintaan Pickup Baru
          </Button>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">12</div>
            <div className="text-sm text-gray-500">Total Pickup</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">45 kg</div>
            <div className="text-sm text-gray-500">Total Berat</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">Rp 230K</div>
            <div className="text-sm text-gray-500">Total Earning</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Pickups */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Pickup Terbaru</span>
            <Button variant="outline" size="sm">Lihat Semua</Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {recentPickups.map((pickup) => (
            <div key={pickup.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex-1">
                <div className="font-medium">{pickup.items}</div>
                <div className="text-sm text-gray-500">{pickup.weight} • {pickup.date}</div>
              </div>
              <Badge className={getStatusColor(pickup.status)}>
                {getStatusText(pickup.status)}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* How to Use */}
      <Card>
        <CardHeader>
          <CardTitle>💡 Tips Menggunakan KardusKulaku</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">1</div>
            <div className="flex-1">
              <div className="font-medium">Foto yang Jelas</div>
              <div className="text-sm text-gray-500">Upload foto barang untuk estimasi harga yang lebih akurat</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">2</div>
            <div className="flex-1">
              <div className="font-medium">Estimasi Berat</div>
              <div className="text-sm text-gray-500">Timbang atau estimasi berat untuk menarik pengepul yang tepat</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm font-bold">3</div>
            <div className="flex-1">
              <div className="font-medium">Jadwal Fleksibel</div>
              <div className="text-sm text-gray-500">Berikan beberapa opsi waktu untuk memudahkan pengepul</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
