
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const Transactions = () => {
  const [filterPeriod, setFilterPeriod] = useState("all");
  
  const transactions = [
    {
      id: 1,
      pickupId: "PKP-001",
      date: "2024-06-01",
      items: "Kardus & Kertas",
      estimatedWeight: "5 kg",
      actualWeight: "5.2 kg",
      pricePaid: 20800,
      customerName: "Siti Aminah",
      location: "Jl. Sudirman No. 123",
      method: "tunai",
      profit: 8000
    },
    {
      id: 2,
      pickupId: "PKP-002", 
      date: "2024-05-30",
      items: "Botol Plastik PET",
      estimatedWeight: "8 kg",
      actualWeight: "7.8 kg",
      pricePaid: 23400,
      customerName: "Budi Santoso",
      location: "Jl. Thamrin No. 456",
      method: "transfer",
      profit: 12000
    },
    {
      id: 3,
      pickupId: "PKP-003",
      date: "2024-05-28",
      items: "Besi & Logam",
      estimatedWeight: "12 kg",
      actualWeight: "11.5 kg",
      pricePaid: 92000,
      customerName: "Dewi Lestari",
      location: "Jl. HR Rasuna Said No. 100",
      method: "tunai",
      profit: 28000
    }
  ];

  const pendingTransactions = [
    {
      id: 4,
      pickupId: "PKP-004",
      items: "Kaleng Bekas",
      estimatedWeight: "3 kg",
      customerName: "Ahmad Fauzi",
      location: "Jl. Gatot Subroto No. 789",
      scheduledTime: "14:00 - 16:00",
      status: "arrived"
    }
  ];

  const totalTransactions = transactions.length;
  const totalWeight = transactions.reduce((sum, t) => sum + parseFloat(t.actualWeight), 0);
  const totalPaid = transactions.reduce((sum, t) => sum + t.pricePaid, 0);
  const totalProfit = transactions.reduce((sum, t) => sum + t.profit, 0);

  const getPaymentMethodIcon = (method: string) => {
    switch (method) {
      case 'tunai': return '💵';
      case 'transfer': return '🏦';
      case 'e_wallet': return '📱';
      default: return '💰';
    }
  };

  const TransactionCard = ({ transaction }: { transaction: any }) => (
    <Card className="mb-4 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {transaction.items}
              <Badge variant="outline" className="text-xs">
                {transaction.pickupId}
              </Badge>
            </CardTitle>
            <CardDescription className="mt-1">
              📅 {transaction.date} • 👤 {transaction.customerName}
            </CardDescription>
            <CardDescription className="text-xs text-gray-500">
              📍 {transaction.location}
            </CardDescription>
          </div>
          <div className="text-right">
            <Badge className="bg-green-100 text-green-800 mb-1">
              Rp {transaction.pricePaid.toLocaleString()}
            </Badge>
            <div className="text-xs text-gray-500">
              Profit: Rp {transaction.profit.toLocaleString()}
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <span className="text-gray-500">Estimasi:</span>
            <div className="font-medium">{transaction.estimatedWeight}</div>
          </div>
          <div>
            <span className="text-gray-500">Aktual:</span>
            <div className="font-medium">{transaction.actualWeight}</div>
          </div>
          <div>
            <span className="text-gray-500">Pembayaran:</span>
            <div className="font-medium flex items-center gap-1">
              {getPaymentMethodIcon(transaction.method)}
              <span className="capitalize">{transaction.method}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            Lihat Detail
          </Button>
          <Button variant="outline" size="sm" className="text-blue-600 border-blue-200">
            📋 Nota
          </Button>
          <Button variant="outline" size="sm" className="text-green-600 border-green-200">
            🔄 Repeat
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  const PendingTransactionCard = ({ transaction }: { transaction: any }) => (
    <Card className="mb-4 border-l-4 border-l-orange-500 hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {transaction.items}
              <Badge className="bg-orange-100 text-orange-800">
                Belum Dicatat
              </Badge>
            </CardTitle>
            <CardDescription className="mt-1">
              👤 {transaction.customerName} • ⏰ {transaction.scheduledTime}
            </CardDescription>
            <CardDescription className="text-xs text-gray-500">
              📍 {transaction.location}
            </CardDescription>
          </div>
          <Badge variant="outline">
            {transaction.pickupId}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
          💰 Catat Transaksi Sekarang
        </Button>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transaksi</h1>
        <Select value={filterPeriod} onValueChange={setFilterPeriod}>
          <SelectTrigger className="w-32">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Semua</SelectItem>
            <SelectItem value="today">Hari Ini</SelectItem>
            <SelectItem value="week">Minggu Ini</SelectItem>
            <SelectItem value="month">Bulan Ini</SelectItem>
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
            <div className="text-2xl font-bold text-orange-600">Rp {totalPaid.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Dibayar</div>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="pt-6">
            <div className="text-2xl font-bold text-purple-600">Rp {totalProfit.toLocaleString()}</div>
            <div className="text-sm text-gray-500">Total Profit</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="pending" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pending" className="relative">
            Perlu Dicatat
            {pendingTransactions.length > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs">
                {pendingTransactions.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="completed">Selesai</TabsTrigger>
        </TabsList>

        <TabsContent value="pending" className="mt-4">
          {pendingTransactions.length > 0 ? (
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                <div className="font-medium text-orange-800 mb-1">⚠️ Perhatian</div>
                <div className="text-sm text-orange-700">
                  Anda memiliki {pendingTransactions.length} pickup yang sudah selesai tetapi belum dicatat transaksinya
                </div>
              </div>
              {pendingTransactions.map(transaction => (
                <PendingTransactionCard key={transaction.id} transaction={transaction} />
              ))}
            </div>
          ) : (
            <Card className="text-center py-8">
              <CardContent>
                <div className="text-gray-400 text-4xl mb-4">✅</div>
                <CardTitle className="text-gray-600 mb-2">Semua Transaksi Tercatat</CardTitle>
                <CardDescription>
                  Tidak ada pickup yang perlu dicatat transaksinya
                </CardDescription>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="completed" className="mt-4">
          <div className="space-y-4">
            {transactions.map(transaction => (
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Export and Reports */}
      <Card>
        <CardHeader>
          <CardTitle>Laporan & Export</CardTitle>
          <CardDescription>
            Download laporan transaksi untuk keperluan bisnis Anda
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
            📈 Lihat Analisis Bisnis
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
