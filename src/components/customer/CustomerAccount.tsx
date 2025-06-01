
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const CustomerAccount = () => {
  const userProfile = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "0812-3456-7890",
    address: "Jl. Sudirman No. 123, Jakarta Pusat",
    joinDate: "Januari 2024",
    totalPickups: 12,
    rating: 4.8,
    verified: true
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Akun Saya</h1>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-4">
            <Avatar className="w-16 h-16">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback className="bg-gradient-to-br from-green-500 to-emerald-600 text-white text-xl">
                {userProfile.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <CardTitle className="flex items-center gap-2">
                {userProfile.name}
                {userProfile.verified && (
                  <Badge className="bg-green-100 text-green-800">✓ Terverifikasi</Badge>
                )}
              </CardTitle>
              <CardDescription className="space-y-1">
                <div>📧 {userProfile.email}</div>
                <div>📱 {userProfile.phone}</div>
                <div>📍 {userProfile.address}</div>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600">
            Edit Profil
          </Button>
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card>
        <CardHeader>
          <CardTitle>Statistik Saya</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-emerald-600">{userProfile.totalPickups}</div>
              <div className="text-sm text-gray-500">Total Pickup</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-600">{userProfile.rating}</div>
              <div className="text-sm text-gray-500">Rating</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">{userProfile.joinDate}</div>
              <div className="text-sm text-gray-500">Bergabung</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Menu Options */}
      <div className="space-y-3">
        {[
          { icon: "👤", title: "Edit Profil", description: "Ubah informasi pribadi Anda", action: "edit" },
          { icon: "🔒", title: "Keamanan", description: "Ganti password dan pengaturan keamanan", action: "security" },
          { icon: "🔔", title: "Notifikasi", description: "Kelola pengaturan notifikasi", action: "notifications" },
          { icon: "📍", title: "Alamat Tersimpan", description: "Kelola alamat pickup favorit", action: "addresses" },
          { icon: "⭐", title: "Rating & Review", description: "Lihat rating yang Anda berikan", action: "ratings" },
          { icon: "💬", title: "Bantuan & Dukungan", description: "FAQ dan hubungi customer service", action: "support" },
          { icon: "📋", title: "Syarat & Ketentuan", description: "Baca syarat dan ketentuan layanan", action: "terms" },
          { icon: "🔐", title: "Kebijakan Privasi", description: "Pelajari bagaimana kami melindungi data Anda", action: "privacy" }
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

      {/* App Info */}
      <Card>
        <CardHeader>
          <CardTitle>Tentang Aplikasi</CardTitle>
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
          <Button variant="outline" className="w-full text-red-600 border-red-200 hover:bg-red-50">
            Logout
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
