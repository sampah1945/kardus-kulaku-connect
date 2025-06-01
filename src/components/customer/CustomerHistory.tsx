
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const CustomerHistory = () => {
  const [filterPeriod, setFilterPeriod] = useState("all");
  
  const history = [
    {
      id: 1,
      date: "2024-05-25",
      items: "Kaleng Bekas",
      estimatedWeight: "3 kg",
      actualWeight: "3.2 kg",
      pricePaid: 25000,
      collectorName: "CV Recycle Pro",
      collectorRating: 4.8,
      customerRating: 5,
      location: "Jl. Gatot Subroto No. 789"
    },
    {
      id: 2,
      date: "2024-05-20",
      items: "Botol Plastik PET",
      estimatedWeight: "6 kg",
      actualWeight: "5.8 kg",
      pricePaid: 18000,
      collectorName: "Pengepul Maju",
      collectorRating: 4.5,
      customerRating: 4,
      location: "Jl. Sudirman No. 123"
    },
    {
      id: 3,
      date: "2024-05-15",
      items: "Kardus & Kertas",
      estimatedWeight: "8 kg",
      actualWeight: "8.5 kg",
      pricePaid: 34000,
      collectorName: "Pengepul Jaya",
      collectorRating: 4.9,
      customerRating: 5,
      location: "Jl. Thamrin No. 456"
    },
    {
      id: 4,
      date: "2024-05-10",
      items: "Besi & Logam",
      estimatedWeight: "12 kg",
      actualWeight: "11.8 kg",
      pricePaid: 95000,
      collectorName: "PT Logam Sejahtera",
      collectorRating: 4.7,
      customerRating: 4,
      location: "Jl. HR Rasuna Said No. 100"
    }
  ];

  const totalTransactions = history.length;
  const totalWeight = history.reduce((sum, item) => sum + parseFloat(item.actualWeight), 0);
  const totalEarnings = history.reduce((sum, item) => sum + item.pricePaid, 0);
  const averagePrice = totalWeight > 0 ? totalEarnings / totalWeight : 0;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ⭐
      </span>
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Riwayat Transaksi</h1>
        <Select value={filterPeriod} onValueChange={setFilterPeriod}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="30days">30 Hari</SelectItem>
            <SelectItem value="7days">7 Hari</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-blue-600">{totalTransactions}</div>
            <div className="text-sm text-gray-500">Total Transaksi</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-green-600">{totalWeight.toFixed(1)} kg</div>
            <div className="text-sm text-gray-500">Total Berat</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-orange-600">Rp {totalEarnings.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Pendapatan</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">Rp {Math.round(averagePrice).toLocaleString()}</div>
            <div className="text-sm text-gray-500">Rata-rata/kg</div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction History */}
      <div className="space-y-4">
        {history.map((transaction) => (
          <Card key={transaction.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{transaction.items}</CardTitle>
                  <CardDescription className="flex items-center gap-2 mt-1">
                    📅 {transaction.date} • 📍 {transaction.location}
                  </CardDescription>
                </div>
                <Badge className="bg-green-100 text-green-800">
                  Rp {transaction.pricePaid.toLocaleString()}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Estimasi Berat:</span>
                  <div className="font-medium">{transaction.estimatedWeight}</div>
                </div>
                <div>
                  <span className="text-gray-500">Berat Aktual:</span>
                  <div className="font-medium">{transaction.actualWeight}</div>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-gray-700">Pengepul: {transaction.collectorName}</span>
                  <div className="flex items-center gap-1">
                    {renderStars(Math.floor(transaction.collectorRating))}
                    <span className="text-sm text-gray-500 ml-1">({transaction.collectorRating})</span>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Rating Anda: {renderStars(transaction.customerRating)}
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Lihat Detail
                </Button>
                <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                  Pesan Lagi
                </Button>
                <Button variant="outline" size="sm" className="text-green-600 border-green-200 hover:bg-green-50">
                  Download Nota
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Export and Analytics */}
      <Card>
        <CardHeader>
          <CardTitle>Laporan & Analisis</CardTitle>
          <CardDescription>
            Export data transaksi Anda untuk keperluan pribadi
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="text-green-600 border-green-200 hover:bg-green-50">
              📊 Export Excel
            </Button>
            <Button variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
              📄 Export PDF
            </Button>
          </div>
          <Button variant="outline" className="w-full text-purple-600 border-purple-200 hover:bg-purple-50">
            📈 Lihat Analisis Penjualan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
