
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        <HeroSection onLogin={handleLogin} />
        
        {/* How It Works Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Bagaimana Cara Kerjanya?
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Buat Permintaan",
                description: "Pelanggan membuat permintaan pickup dengan detail barang",
                icon: "📝"
              },
              {
                step: "2", 
                title: "Tampil di Peta",
                description: "Permintaan muncul di peta untuk pengepul sesuai tier",
                icon: "🗺️"
              },
              {
                step: "3",
                title: "Negosiasi",
                description: "Pengepul menghubungi pelanggan untuk negosiasi",
                icon: "📞"
              },
              {
                step: "4",
                title: "Pickup & Bayar",
                description: "Pengepul datang, timbang, dan bayar langsung",
                icon: "💰"
              }
            ].map((item) => (
              <Card key={item.step} className="text-center hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="text-4xl mb-2">{item.icon}</div>
                  <Badge variant="outline" className="w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2">
                    {item.step}
                  </Badge>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Subscription Tiers */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Paket Langganan Pengepul
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                tier: "Pengepul Kecil",
                price: "Gratis",
                weight: "1-5 kg",
                radius: "0-1 km",
                color: "border-gray-300",
                popular: false
              },
              {
                tier: "Pengepul Sedang",
                price: "Rp 50.000/bulan",
                weight: "5-50 kg", 
                radius: "0-5 km",
                color: "border-blue-500",
                popular: true
              },
              {
                tier: "Pengepul Besar",
                price: "Rp 100.000/bulan",
                weight: "> 50 kg",
                radius: "0-10 km",
                color: "border-green-500",
                popular: false
              }
            ].map((plan) => (
              <Card key={plan.tier} className={`relative ${plan.color} border-2 hover:shadow-xl transition-all duration-300`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-green-500">
                    Populer
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{plan.tier}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-gray-800">{plan.price}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span>Batas Berat:</span>
                    <Badge variant="secondary">{plan.weight}</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Radius Akses:</span>
                    <Badge variant="secondary">{plan.radius}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-6 text-gray-600">
            <strong>Trial:</strong> 30 hari tier Pengepul Besar untuk registrasi baru
          </p>
        </section>

        {/* Features Grid */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Fitur Unggulan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Peta Interaktif",
                description: "Visualisasi pickup dengan marker color-coded berdasarkan berat",
                icon: "🗺️"
              },
              {
                title: "Filter Otomatis",
                description: "Pickup difilter otomatis sesuai tier dan radius pengepul",
                icon: "🔍"
              },
              {
                title: "Riwayat Transaksi",
                description: "Pencatatan lengkap semua transaksi dengan laporan harian/bulanan",
                icon: "📊"
              },
              {
                title: "Notifikasi Real-time",
                description: "Update langsung saat ada pickup baru atau perubahan status",
                icon: "🔔"
              },
              {
                title: "Rating & Review",
                description: "Sistem rating untuk membangun kepercayaan antar pengguna",
                icon: "⭐"
              },
              {
                title: "Export Laporan",
                description: "Export data transaksi ke CSV/Excel untuk keperluan bisnis",
                icon: "📋"
              }
            ].map((feature) => (
              <Card key={feature.title} className="hover:shadow-lg transition-all duration-300 group">
                <CardHeader>
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
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
