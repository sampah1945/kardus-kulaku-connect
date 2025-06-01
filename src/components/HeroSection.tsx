
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HeroSectionProps {
  onLogin: (role: 'customer' | 'collector') => void;
}

export const HeroSection = ({ onLogin }: HeroSectionProps) => {
  return (
    <div className="text-center space-y-12">
      {/* Hero Content */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            K
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text text-transparent leading-tight">
          KardusKulaku
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Platform digital yang menghubungkan penjual barang bekas dengan pengepul profesional. 
          <span className="text-green-600 font-semibold"> Mudah, cepat, dan transparan.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span>100% Gratis untuk Pelanggan</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
            <span>Trial 30 Hari untuk Pengepul</span>
          </div>
        </div>
      </div>

      {/* CTA Cards */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
        <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-green-50 to-emerald-100 hover:from-green-100 hover:to-emerald-200" 
              onClick={() => onLogin('customer')}>
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="text-center pb-6 relative z-10">
            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">🏠</div>
            <CardTitle className="text-3xl text-green-700 mb-3">Saya Pelanggan</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Jual barang bekas Anda dengan mudah dan dapatkan harga terbaik
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <div className="space-y-4 mb-8">
              {[
                "Gratis membuat permintaan pickup",
                "Terhubung dengan pengepul terpercaya", 
                "Pembayaran langsung di tempat",
                "Tracking status real-time"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Mulai Jual Barang Bekas
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer bg-gradient-to-br from-emerald-50 to-teal-100 hover:from-emerald-100 hover:to-teal-200"
              onClick={() => onLogin('collector')}>
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <CardHeader className="text-center pb-6 relative z-10">
            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">🚛</div>
            <CardTitle className="text-3xl text-emerald-700 mb-3">Saya Pengepul</CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Dapatkan suplai barang bekas secara efisien dan kelola bisnis Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center relative z-10">
            <div className="space-y-4 mb-8">
              {[
                "Trial 30 hari tier Pengepul Besar",
                "Akses peta pickup interaktif",
                "Filter sesuai kapasitas & radius", 
                "Laporan transaksi lengkap"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Mulai Mengepul Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
