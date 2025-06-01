
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CollectorAccount = () => {
  const collectorProfile = {
    businessName: "CV Recycle Jaya",
    ownerName: "Budi Santoso",
    email: "budi@recyclejaya.com",
    phone: "0812-3456-7890",
    officeAddress: "Jl. Industri No. 123, Jakarta Barat",
    baseLocation: "Jakarta Barat",
    joinDate: "Januari 2024",
    subscription: "Pengepul Besar (Trial)",
    totalPickups: 45,
    rating: 4.8,
    completionRate: 98,
    verified: true,
    npwp: "12.345.678.9-012.000"
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Akun Pengepul</h1>

      {/* Business Profile Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-br from-green-500 to-blue-600 text-white text-xl">
                {collectorProfile.businessName.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                {collectorProfile.businessName}
                {collectorProfile.verified && (
                  <Badge className="bg-green-100 text-green-800">✓ Terverifikasi</Badge>
                )}
              </CardTitle>
              <CardDescription className="space-y-1">
                <div>👤 {collectorProfile.ownerName}</div>
                <div>📧 {collectorProfile.email}</div>
                <div>📱 {collectorProfile.phone}</div>
                <div>📍 {collectorProfile.officeAddress}</div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
            <div>
              <span className="text-gray-500">Wilayah Operasi:</span>
              <div className="font-medium">{collectorProfile.baseLocation}</div>
            </div>
            <div>
              <span className="text-gray-500">NPWP:</span>
              <div className="font-medium">{collectorProfile.npwp}</div>
            </div>
          </div>
          <Button className="w-full bg-gradient-to-r from-green-500 to-blue-600">
            Edit Profil Bisnis
          </Button>
        </CardContent>
      </Card>

      {/* Performance Stats */}
      <Card>
        <CardHeader>
          <CardTitle>Performa Bisnis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">{collectorProfile.totalPickups}</div>
              <div className="text-sm text-gray-500">Total Pickup</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">{collectorProfile.rating}</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{collectorProfile.completionRate}%</div>
              <div className="text-sm text-gray-500">Completion Rate</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">{collectorProfile.joinDate}</div>
              <div className="text-sm text-gray-500">Bergabung</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Current Subscription */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Langganan Aktif</span>
            <Badge className="bg-green-100 text-green-800">
              {collectorProfile.subscription}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Batas Berat:</span>
              <div className="font-medium">> 50 kg</div>
            </div>
            <div>
              <span className="text-gray-500">Radius Akses:</span>
              <div className="font-medium">0-10 km</div>
            </div>
          </div>
          <Button variant="outline" className="w-full text-blue-600 border-blue-200">
            Kelola Langganan
          </Button>
        </CardContent>
      </Card>

      {/* Menu Options */}
      <div className="space-y-3">
        {[
          { icon: "🏢", title: "Profil Bisnis", description: "Edit informasi perusahaan dan kontak", action: "business" },
          { icon: "📍", title: "Lokasi Operasi", description: "Update wilayah dan alamat kantor/gudang", action: "location" },
          { icon: "🔒", title: "Keamanan", description: "Ganti password dan pengaturan keamanan", action: "security" },
          { icon: "🔔", title: "Notifikasi", description: "Kelola pengaturan notifikasi pickup", action: "notifications" },
          { icon: "⭐", title: "Rating & Review", description: "Lihat rating dari pelanggan", action: "ratings" },
          { icon: "📊", title: "Analisis Bisnis", description: "Dashboard performa dan insights", action: "analytics" },
          { icon: "💳", title: "Pembayaran & Billing", description: "Kelola metode pembayaran langganan", action: "billing" },
          { icon: "🛠️", title: "Pengaturan Aplikasi", description: "Preferensi tampilan dan notifikasi", action: "settings" },
          { icon: "💬", title: "Bantuan & Dukungan", description: "FAQ dan hubungi customer service", action: "support" },
          { icon: "📋", title: "Dokumen Legal", description: "Syarat ketentuan dan kontrak", action: "legal" }
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

      {/* Business Verification */}
      <Card className="border-l-4 border-l-green-500">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            ✅ Status Verifikasi
            <Badge className="bg-green-100 text-green-800">Terverifikasi</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Identitas Pemilik</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>NPWP Perusahaan</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Alamat Usaha</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Rekening Bank</span>
            </div>
          </div>
          <div className="text-xs text-gray-500">
            Akun Anda telah diverifikasi pada 15 Januari 2024
          </div>
        </CardContent>
      </Card>

      {/* App Info and Logout */}
      <Card>
        <CardHeader>
          <CardTitle>Informasi Aplikasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between items-center">
            <span>Versi Aplikasi</span>
            <Badge variant="secondary">1.0.0</Badge>
          </div>
          <div className="flex justify-between items-center">
            <span>Terakhir Update</span>
            <span className="text-sm text-gray-500">1 Juni 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Server Status</span>
            <Badge className="bg-green-100 text-green-800">Online</Badge>
          </div>
          <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
