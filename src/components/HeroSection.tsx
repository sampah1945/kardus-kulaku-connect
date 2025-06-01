
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HeroSectionProps {
  onLogin: (role: 'customer' | 'collector') => void;
}

export const HeroSection = ({ onLogin }: HeroSectionProps) => {
  return (
    <div className="text-center space-y-8">
      {/* Logo and Title */}
      <div className="space-y-4">
        <div className="flex justify-center">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            K
          </div>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
          KardusKulaku
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Platform digital yang menghubungkan penjual barang bekas dengan pengepul profesional. 
          Mudah, cepat, dan transparan.
        </p>
      </div>

      {/* CTA Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-12">
        <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 cursor-pointer group" 
              onClick={() => onLogin('customer')}>
          <CardHeader className="text-center">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">👤</div>
            <CardTitle className="text-2xl text-green-700">Saya Pelanggan</CardTitle>
            <CardDescription className="text-lg">
              Jual barang bekas Anda dengan mudah
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✅ Gratis membuat permintaan pickup</li>
              <li>✅ Terhubung dengan pengepul terpercaya</li>
              <li>✅ Pembayaran langsung di tempat</li>
              <li>✅ Tracking status real-time</li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700">
              Mulai Jual Barang Bekas
            </Button>
          </CardContent>
        </Card>

        <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 cursor-pointer group"
              onClick={() => onLogin('collector')}>
          <CardHeader className="text-center">
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🚛</div>
            <CardTitle className="text-2xl text-blue-700">Saya Pengepul</CardTitle>
            <CardDescription className="text-lg">
              Dapatkan suplai barang bekas secara efisien
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <ul className="space-y-2 text-sm text-gray-600 mb-6">
              <li>✅ Trial 30 hari tier Pengepul Besar</li>
              <li>✅ Akses peta pickup interaktif</li>
              <li>✅ Filter sesuai kapasitas & radius</li>
              <li>✅ Laporan transaksi lengkap</li>
            </ul>
            <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
              Mulai Mengepul Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
