
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Subscription = () => {
  const currentSubscription = {
    tier: "Pengepul Besar",
    status: "trial",
    startDate: "2024-05-01",
    endDate: "2024-06-01",
    daysLeft: 25,
    price: "Rp 100.000/bulan",
    weightLimit: "> 50 kg",
    radiusLimit: "0-10 km"
  };

  const subscriptionTiers = [
    {
      tier: "Pengepul Kecil",
      price: "Gratis",
      weightLimit: "1-5 kg",
      radiusLimit: "0-1 km",
      features: [
        "Akses pickup ringan",
        "Radius terbatas 1 km",
        "Laporan dasar",
        "Dukungan email"
      ],
      current: false,
      color: "border-gray-300"
    },
    {
      tier: "Pengepul Sedang", 
      price: "Rp 50.000/bulan",
      weightLimit: "5-50 kg",
      radiusLimit: "0-5 km",
      features: [
        "Akses pickup ringan & sedang",
        "Radius 5 km",
        "Laporan lengkap",
        "Dukungan prioritas",
        "Export data"
      ],
      current: false,
      color: "border-blue-500"
    },
    {
      tier: "Pengepul Besar",
      price: "Rp 100.000/bulan", 
      weightLimit: "> 50 kg",
      radiusLimit: "0-10 km",
      features: [
        "Akses semua pickup",
        "Radius maksimal 10 km",
        "Analisis bisnis",
        "Dukungan 24/7",
        "Priority listing",
        "API access"
      ],
      current: true,
      color: "border-green-500"
    }
  ];

  const usageStats = {
    pickupsThisMonth: 15,
    pickupLimit: 100,
    dataUsage: 2.3,
    dataLimit: 10
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Langganan Saya</h1>

      {/* Current Subscription Status */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-600 text-white">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl">{currentSubscription.tier}</CardTitle>
              <CardDescription className="text-green-100">
                {currentSubscription.weightLimit} • {currentSubscription.radiusLimit}
              </CardDescription>
            </div>
            <Badge className="bg-white text-green-600 font-semibold">
              TRIAL
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span>Masa Trial</span>
                <span className="font-semibold">{currentSubscription.daysLeft} hari tersisa</span>
              </div>
              <Progress 
                value={(currentSubscription.daysLeft / 30) * 100} 
                className="h-2 bg-white/20"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-green-100">Mulai:</span>
                <div className="font-medium">{currentSubscription.startDate}</div>
              </div>
              <div>
                <span className="text-green-100">Berakhir:</span>
                <div className="font-medium">{currentSubscription.endDate}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trial Warning */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">⚠️</div>
            <div className="flex-1">
              <div className="font-medium text-orange-800">Trial Akan Berakhir</div>
              <div className="text-sm text-orange-700 mt-1">
                Setelah trial berakhir, akun Anda akan downgrade ke tier Pengepul Kecil. 
                Upgrade sekarang untuk tetap mengakses fitur lengkap.
              </div>
              <Button className="mt-3 bg-orange-500 hover:bg-orange-600 text-white">
                Upgrade Sekarang
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Statistics */}
      <Card>
        <CardHeader>
          <CardTitle>Statistik Penggunaan</CardTitle>
          <CardDescription>Penggunaan layanan bulan ini</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span>Pickup Diambil</span>
              <span className="font-semibold">{usageStats.pickupsThisMonth}/{usageStats.pickupLimit}</span>
            </div>
            <Progress 
              value={(usageStats.pickupsThisMonth / usageStats.pickupLimit) * 100} 
              className="h-2"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-2">
              <span>Data Transfer</span>
              <span className="font-semibold">{usageStats.dataUsage}/{usageStats.dataLimit} GB</span>
            </div>
            <Progress 
              value={(usageStats.dataUsage / usageStats.dataLimit) * 100} 
              className="h-2"
            />
          </div>
        </CardContent>
      </Card>

      {/* Available Plans */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Paket Langganan</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {subscriptionTiers.map((plan) => (
            <Card key={plan.tier} className={`relative ${plan.color} border-2 ${plan.current ? 'ring-2 ring-green-500 ring-offset-2' : ''}`}>
              {plan.current && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-500">
                  Paket Saat Ini
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.tier}</CardTitle>
                <CardDescription className="text-2xl font-bold text-gray-800">
                  {plan.price}
                </CardDescription>
                <CardDescription>
                  {plan.weightLimit} • {plan.radiusLimit}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                {!plan.current ? (
                  <Button 
                    className="w-full" 
                    variant={plan.tier === "Pengepul Kecil" ? "outline" : "default"}
                  >
                    {plan.tier === "Pengepul Kecil" ? "Downgrade" : "Upgrade"}
                  </Button>
                ) : (
                  <Button className="w-full bg-green-500 hover:bg-green-600" disabled>
                    Paket Aktif
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <CardTitle>Riwayat Pembayaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <div className="text-gray-400 text-4xl mb-4">💳</div>
            <CardTitle className="text-gray-600 mb-2">Belum Ada Pembayaran</CardTitle>
            <CardDescription>
              Anda sedang dalam masa trial. Riwayat pembayaran akan muncul setelah upgrade.
            </CardDescription>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardHeader>
          <CardTitle>Pertanyaan Umum</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <div className="font-medium mb-1">Apakah saya bisa downgrade kapan saja?</div>
            <div className="text-sm text-gray-600">
              Ya, Anda bisa downgrade di akhir periode billing. Fitur akan disesuaikan dengan tier baru.
            </div>
          </div>
          <div>
            <div className="font-medium mb-1">Bagaimana jika saya melewati batas pickup?</div>
            <div className="text-sm text-gray-600">
              Akses akan dibatasi sesuai tier. Anda perlu upgrade untuk akses lebih luas.
            </div>
          </div>
          <div>
            <div className="font-medium mb-1">Apakah ada kontrak minimal?</div>
            <div className="text-sm text-gray-600">
              Tidak ada kontrak minimal. Anda bisa berhenti berlangganan kapan saja.
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
