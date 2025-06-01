
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CollectorAccount = () => {
  const collectorProfile = {
    businessName: "CV Recycle Pro",
    ownerName: "Ahmad Suryanto",
    email: "ahmad@recyclepro.com",
    phone: "0812-3456-7890",
    address: "Jl. Industri No. 45, Surabaya",
    joinDate: "Januari 2024",
    totalPickups: 156,
    totalRevenue: 12500000,
    currentTier: "Pengepul Besar",
    rating: 4.8,
    verified: true
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Akun Pengepul</h1>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-green-600 text-white text-xl">
                {collectorProfile.businessName.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                {collectorProfile.businessName}
                {collectorProfile.verified && (
                  <Badge className="bg-blue-100 text-blue-800">✓ Terverifikasi</Badge>
                )}
              </CardTitle>
              <CardDescription className="space-y-1">
                <div>👤 {collectorProfile.ownerName}</div>
                <div>📧 {collectorProfile.email}</div>
                <div>📱 {collectorProfile.phone}</div>
                <div>📍 {collectorProfile.address}</div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-gradient-to-r from-blue-500 to-green-600">
            Edit Profil Bisnis
          </Button>
        </CardContent>
      </Card>

      {/* Current Subscription */}
      <Card>
        <CardHeader>
          <CardTitle>Langganan Aktif</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Tier Saat Ini:</span>
            <Badge className="bg-green-100 text-green-800">{collectorProfile.currentTier}</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>Berlaku Hingga:</span>
            <span className="text-sm text-gray-500">31 Juli 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Status:</span>
            <Badge className="bg-green-100 text-green-800">Aktif</Badge>
          </div>
          <Button variant="outline" className="w-full text-blue-600 border-blue-200 hover:bg-blue-50">
            Kelola Langganan
          </Button>
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card>
        <CardHeader>
          <CardTitle>Statistik Bisnis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{collectorProfile.totalPickups}</div>
              <div className="text-sm text-gray-500">Total Pickup</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">Rp {(collectorProfile.totalRevenue / 1000000).toFixed(1)}M</div>
              <div className="text-sm text-gray-500">Total Transaksi</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">{collectorProfile.rating}</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{collectorProfile.joinDate}</div>
              <div className="text-sm text-gray-500">Bergabung</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Menu Options */}
      <div className="space-y-3">
        {[
          { icon: "🏢", title: "Profil Bisnis", description: "Ubah informasi perusahaan dan kontak", action: "business" },
          { icon: "📊", title: "Langganan & Billing", description: "Kelola paket dan riwayat pembayaran", action: "subscription" },
          { icon: "🔔", title: "Notifikasi", description: "Pengaturan alert pickup dan transaksi", action: "notifications" },
          { icon: "📍", title: "Area Operasional", description: "Atur lokasi dan radius kerja", action: "areas" },
          { icon: "⭐", title: "Rating & Ulasan", description: "Lihat feedback dari pelanggan", action: "reviews" },
          { icon: "💰", title: "Laporan Keuangan", description: "Export dan analisis pendapatan", action: "finance" },
          { icon: "👥", title: "Tim & Staff", description: "Kelola akses tim collector", action: "team" },
          { icon: "🔧", title: "Pengaturan Aplikasi", description: "Preferensi dan konfigurasi", action: "settings" }
        ].map((item) => (
          <Card key={item.action} className="hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex items-center space-x-4 p-4">
              <div className="text-2xl">{item.icon}</div>
              <div className="flex-1">
                <div className="font-medium">{item.title}</div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
              <div className="text-gray-400">→</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* App Info & Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Aplikasi & Dukungan</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Versi Aplikasi</span>
            <Badge variant="secondary">2.1.0</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>Mode</span>
            <Badge className="bg-blue-100 text-blue-800">Collector Pro</Badge>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
              💬 Chat Support
            </Button>
            <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              📖 Panduan
            </Button>
          </div>
          <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
