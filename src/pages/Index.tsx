
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CustomerDashboard } from "@/components/CustomerDashboard";
import { CollectorDashboard } from "@/components/CollectorDashboard";

const Index = () => {
  const [userRole, setUserRole] = useState<'guest' | 'customer' | 'collector'>('guest');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (role: 'customer' | 'collector') => {
    setUserRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setUserRole('guest');
    setIsLoggedIn(false);
  };

  if (userRole === 'customer' && isLoggedIn) {
    return <CustomerDashboard onLogout={handleLogout} />;
  }

  if (userRole === 'collector' && isLoggedIn) {
    return <CollectorDashboard onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <div className="container mx-auto px-6 py-16">
        <HeroSection onLogin={handleLogin} />
        
        {/* How It Works Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Bagaimana Cara Kerjanya?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proses sederhana dalam 4 langkah untuk menghubungkan pelanggan dengan pengepul
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Buat Permintaan",
                description: "Pelanggan membuat permintaan pickup dengan detail barang dan lokasi",
                icon: "📝",
                color: "from-green-500 to-green-600"
              },
              {
                step: "2", 
                title: "Tampil di Peta",
                description: "Permintaan muncul di peta untuk pengepul sesuai tier langganan",
                icon: "🗺️",
                color: "from-emerald-500 to-emerald-600"
              },
              {
                step: "3",
                title: "Negosiasi",
                description: "Pengepul menghubungi pelanggan untuk negosiasi harga dan jadwal",
                icon: "📞",
                color: "from-teal-500 to-teal-600"
              },
              {
                step: "4",
                title: "Pickup & Bayar",
                description: "Pengepul datang, timbang barang, dan bayar langsung ke pelanggan",
                icon: "💰",
                color: "from-green-600 to-emerald-600"
              }
            ].map((item) => (
              <Card key={item.step} className="group text-center hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="pb-6">
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-500">{item.icon}</div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl shadow-lg`}>
                    {item.step}
                  </div>
                  <CardTitle className="text-xl text-gray-800">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscription Tiers */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Paket Langganan Pengepul
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pilih paket yang sesuai dengan skala bisnis Anda. Mulai dengan trial gratis 30 hari!
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                tier: "Pengepul Kecil",
                price: "Gratis",
                priceNote: "Selamanya",
                weight: "1-5 kg",
                radius: "0-1 km",
                gradient: "from-gray-500 to-gray-600",
                popular: false,
                features: ["Akses basic", "Support email", "1 km radius"]
              },
              {
                tier: "Pengepul Sedang",
                price: "Rp 50.000",
                priceNote: "/bulan",
                weight: "5-50 kg", 
                radius: "0-5 km",
                gradient: "from-emerald-500 to-emerald-600",
                popular: true,
                features: ["Semua fitur basic", "Priority support", "5 km radius", "Analytics dasar"]
              },
              {
                tier: "Pengepul Besar",
                price: "Rp 100.000",
                priceNote: "/bulan",
                weight: "> 50 kg",
                radius: "0-10 km",
                gradient: "from-green-500 to-green-600",
                popular: false,
                features: ["Semua fitur premium", "24/7 support", "10 km radius", "Advanced analytics", "Export data"]
              }
            ].map((plan) => (
              <Card key={plan.tier} className={`relative border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ${plan.popular ? 'scale-105 ring-2 ring-emerald-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-4 py-2 text-sm font-semibold">
                      Paling Populer
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{plan.tier}</CardTitle>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.priceNote}</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Batas Berat:</span>
                      <Badge variant="secondary" className="font-semibold">{plan.weight}</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-600">Radius Akses:</span>
                      <Badge variant="secondary" className="font-semibold">{plan.radius}</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-xl transition-all duration-300 py-6 text-lg font-semibold`}>
                    {plan.popular ? 'Mulai Trial Gratis' : 'Pilih Paket'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-gray-700">Trial 30 hari tier Pengepul Besar untuk registrasi baru</span>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Fitur Unggulan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Platform lengkap dengan teknologi terdepan untuk pengalaman terbaik
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Peta Interaktif",
                description: "Visualisasi pickup dengan marker color-coded berdasarkan berat dan jarak real-time",
                icon: "🗺️",
                gradient: "from-emerald-500 to-teal-500"
              },
              {
                title: "Filter Otomatis",
                description: "Pickup difilter otomatis sesuai tier langganan dan radius operasional",
                icon: "🔍",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Riwayat Transaksi",
                description: "Pencatatan lengkap semua transaksi dengan laporan harian dan bulanan",
                icon: "📊",
                gradient: "from-teal-500 to-green-500"
              },
              {
                title: "Notifikasi Real-time",
                description: "Update langsung saat ada pickup baru atau perubahan status penting",
                icon: "🔔",
                gradient: "from-green-600 to-emerald-600"
              },
              {
                title: "Rating & Review",
                description: "Sistem rating untuk membangun kepercayaan dan reputasi antar pengguna",
                icon: "⭐",
                gradient: "from-emerald-600 to-teal-600"
              },
              {
                title: "Export Laporan",
                description: "Export data transaksi ke CSV/Excel untuk keperluan analisis bisnis",
                icon: "📋",
                gradient: "from-teal-600 to-green-600"
              }
            ].map((feature) => (
              <Card key={feature.title} className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
                <CardHeader className="pb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl text-gray-800 text-center">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-center">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
