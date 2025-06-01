
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, Check, Zap } from "lucide-react";

interface HeroSectionProps {
  onLogin: (role: 'customer' | 'collector') => void;
}

export const HeroSection = ({ onLogin }: HeroSectionProps) => {
  return (
    <div className="text-center space-y-12">
      {/* Hero Content */}
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Package size={40} strokeWidth={2} />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
          KardusKulaku
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Platform digital yang menghubungkan penjual barang bekas dengan pengepul profesional. 
          <span className="text-green-600 font-medium"> Mudah, cepat, dan transparan.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-6">
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>100% Gratis untuk Pelanggan</span>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Trial 30 Hari untuk Pengepul</span>
          </div>
        </div>
      </div>

      {/* CTA Cards */}
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto mt-16">
        <Card className="group relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white" 
              onClick={() => onLogin('customer')}>
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
              <Package className="text-green-600" size={32} />
            </div>
            <CardTitle className="text-2xl text-gray-900 mb-3">Saya Pelanggan</CardTitle>
            <CardDescription className="text-gray-600">
              Jual barang bekas Anda dengan mudah dan dapatkan harga terbaik
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4 mb-8">
              {[
                "Gratis membuat permintaan pickup",
                "Terhubung dengan pengepul terpercaya", 
                "Pembayaran langsung di tempat",
                "Tracking status real-time"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-700">
                  <Check size={16} className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base font-medium rounded-lg">
              Mulai Jual Barang Bekas
            </Button>
          </CardContent>
        </Card>

        <Card className="group relative overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white"
              onClick={() => onLogin('collector')}>
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 mx-auto mb-6 bg-green-50 rounded-2xl flex items-center justify-center group-hover:bg-green-100 transition-colors duration-300">
              <Truck className="text-green-600" size={32} />
            </div>
            <CardTitle className="text-2xl text-gray-900 mb-3">Saya Pengepul</CardTitle>
            <CardDescription className="text-gray-600">
              Dapatkan suplai barang bekas secara efisien dan kelola bisnis Anda
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="space-y-4 mb-8">
              {[
                "Trial 30 hari tier Pengepul Besar",
                "Akses peta pickup interaktif",
                "Filter sesuai kapasitas & radius", 
                "Laporan transaksi lengkap"
              ].map((feature, index) => (
                <div key={index} className="flex items-center justify-center gap-3 text-gray-700">
                  <Check size={16} className="text-green-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base font-medium rounded-lg">
              Mulai Mengepul Sekarang
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
