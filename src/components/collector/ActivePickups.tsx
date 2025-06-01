
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ActivePickups = () => {
  const activePickups = [
    {
      id: 1,
      items: "Kardus & Kertas",
      weight: "5 kg",
      location: "Jl. Sudirman No. 123, Jakarta",
      customerName: "Siti Aminah",
      customerPhone: "0812-3456-7890",
      scheduledTime: "10:00 - 12:00",
      takenAt: "2 jam lalu",
      estimatedValue: "Rp 20.000",
      status: "on_way"
    },
    {
      id: 2,
      items: "Botol Plastik PET",
      weight: "8 kg",
      location: "Jl. Thamrin No. 456, Jakarta",
      customerName: "Budi Santoso",
      customerPhone: "0813-7890-1234",
      scheduledTime: "14:00 - 16:00",
      takenAt: "1 hari lalu",
      estimatedValue: "Rp 24.000",
      status: "arrived"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on_way': return 'bg-blue-100 text-blue-800';
      case 'arrived': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'on_way': return 'Dalam Perjalanan';
      case 'arrived': return 'Sudah Tiba';
      case 'completed': return 'Selesai';
      default: return 'Diambil';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pickup Aktif</h1>
        <Button variant="outline" className="text-blue-600 border-blue-200">
          🗺️ Lihat di Peta
        </Button>
      </div>

      {activePickups.length > 0 ? (
        <div className="space-y-4">
          {activePickups.map((pickup) => (
            <Card key={pickup.id} className="border-l-4 border-l-blue-500 hover:shadow-lg transition-shadow">
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
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    {pickup.estimatedValue}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500">Estimasi Berat:</span>
                    <div className="font-medium">{pickup.weight}</div>
                  </div>
                  <div>
                    <span className="text-gray-500">Jadwal:</span>
                    <div className="font-medium">{pickup.scheduledTime}</div>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm font-medium text-blue-800 mb-1">Kontak Pelanggan:</div>
                  <div className="text-sm text-blue-700">{pickup.customerName}</div>
                  <div className="text-sm text-blue-600 flex items-center gap-2">
                    📞 {pickup.customerPhone}
                    <Button size="sm" className="h-6 text-xs bg-green-500 hover:bg-green-600">
                      WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex gap-2">
                  {pickup.status === 'on_way' && (
                    <>
                      <Button size="sm" className="flex-1 bg-green-500 hover:bg-green-600">
                        ✓ Sudah Tiba
                      </Button>
                      <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
                        📍 Navigasi
                      </Button>
                    </>
                  )}
                  {pickup.status === 'arrived' && (
                    <>
                      <Button size="sm" className="flex-1 bg-gradient-to-r from-green-500 to-blue-600">
                        💰 Catat Transaksi
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 border-red-200">
                        ❌ Batal
                      </Button>
                    </>
                  )}
                </div>

                <div className="text-xs text-gray-500 text-center">
                  Diambil {pickup.takenAt}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <div className="text-gray-400 text-6xl mb-4">🚛</div>
            <CardTitle className="text-gray-600 mb-2">Tidak Ada Pickup Aktif</CardTitle>
            <CardDescription className="mb-6">
              Pickup yang sudah Anda ambil akan muncul di sini
            </CardDescription>
            <Button className="bg-gradient-to-r from-green-500 to-blue-600">
              🗺️ Cari Pickup Baru
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Aksi Cepat</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
            📞 Call Center
          </Button>
          <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
            🆘 Bantuan Darurat
          </Button>
          <Button variant="outline" className="text-orange-600 border-orange-200 hover:bg-orange-50">
            📋 Checklist Pickup
          </Button>
          <Button variant="outline" className="text-purple-600 border-purple-200 hover:bg-purple-50">
            📊 Panduan Timbang
          </Button>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">💡 Tips Pickup</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-sm font-bold">1</div>
            <div className="flex-1">
              <div className="font-medium">Konfirmasi Kedatangan</div>
              <div className="text-sm text-gray-500">Hubungi pelanggan 15 menit sebelum tiba</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-sm font-bold">2</div>
            <div className="flex-1">
              <div className="font-medium">Timbang Akurat</div>
              <div className="text-sm text-gray-500">Gunakan timbangan yang sudah dikalibrasi</div>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-sm font-bold">3</div>
            <div className="flex-1">
              <div className="font-medium">Pembayaran Langsung</div>
              <div className="text-sm text-gray-500">Bayar sesuai kesepakatan di tempat</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
