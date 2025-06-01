
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Package, Scale, DollarSign, Check, Camera, Clock, Star } from "lucide-react";

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
      <Card className="bg-green-600 text-white border-0">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
              <Package className="text-white" size={20} />
            </div>
            Selamat Datang!
          </CardTitle>
          <CardDescription className="text-green-100">
            Siap untuk menjual barang bekas Anda?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button className="bg-white text-green-600 hover:bg-gray-50 font-medium flex items-center gap-2">
            <Plus size={18} />
            Buat Permintaan Pickup Baru
          </Button>
        </CardContent>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <Card className="text-center border-gray-200">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Package className="text-green-600" size={20} />
            </div>
            <div className="text-2xl font-semibold text-gray-900">12</div>
            <div className="text-sm text-gray-500">Total Pickup</div>
          </CardContent>
        </Card>
        <Card className="text-center border-gray-200">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <Scale className="text-green-600" size={20} />
            </div>
            <div className="text-2xl font-semibold text-gray-900">45 kg</div>
            <div className="text-sm text-gray-500">Total Berat</div>
          </CardContent>
        </Card>
        <Card className="text-center border-gray-200">
          <CardContent className="pt-6">
            <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mx-auto mb-2">
              <DollarSign className="text-green-600" size={20} />
            </div>
            <div className="text-2xl font-semibold text-gray-900">Rp 230K</div>
            <div className="text-sm text-gray-500">Total Earning</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Pickups */}
      <Card className="border-gray-200">
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
                <div className="font-medium text-gray-900">{pickup.items}</div>
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
      <Card className="border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-50 rounded-lg flex items-center justify-center">
              <Star className="text-green-600" size={16} />
            </div>
            Tips Menggunakan KardusKulaku
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Camera className="text-green-600" size={16} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">Foto yang Jelas</div>
              <div className="text-sm text-gray-500">Upload foto barang untuk estimasi harga yang lebih akurat</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Scale className="text-green-600" size={16} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">Estimasi Berat</div>
              <div className="text-sm text-gray-500">Timbang atau estimasi berat untuk menarik pengepul yang tepat</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="text-green-600" size={16} />
            </div>
            <div className="flex-1">
              <div className="font-medium text-gray-900">Jadwal Fleksibel</div>
              <div className="text-sm text-gray-500">Berikan beberapa opsi waktu untuk memudahkan pengepul</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
