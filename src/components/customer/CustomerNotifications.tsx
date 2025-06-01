
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const CustomerNotifications = () => {
  const notifications = [
    {
      id: 1,
      type: "pickup_taken",
      title: "Pickup Anda Diambil",
      message: "Pengepul Jaya telah mengambil pickup kardus & kertas bekas Anda",
      time: "2 jam lalu",
      read: false,
      action: "Lihat Detail"
    },
    {
      id: 2,
      type: "pickup_completed",
      title: "Pickup Selesai",
      message: "Transaksi kaleng bekas telah selesai. Anda menerima Rp 25.000",
      time: "1 hari lalu",
      read: false,
      action: "Beri Rating"
    },
    {
      id: 3,
      type: "pickup_interest",
      title: "Ada Pengepul Tertarik",
      message: "2 pengepul tertarik dengan pickup botol plastik Anda",
      time: "2 hari lalu",
      read: true,
      action: "Lihat Pickup"
    },
    {
      id: 4,
      type: "tips",
      title: "💡 Tips Menjual",
      message: "Pisahkan jenis barang untuk mendapat harga terbaik",
      time: "3 hari lalu",
      read: true,
      action: null
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'pickup_taken': return '🚛';
      case 'pickup_completed': return '✅';
      case 'pickup_interest': return '👀';
      case 'tips': return '💡';
      default: return '📢';
    }
  };

  const getNotificationColor = (type: string) => {
    switch (type) {
      case 'pickup_taken': return 'border-l-blue-500';
      case 'pickup_completed': return 'border-l-green-500';
      case 'pickup_interest': return 'border-l-orange-500';
      case 'tips': return 'border-l-purple-500';
      default: return 'border-l-gray-500';
    }
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          Notifikasi
          {unreadCount > 0 && (
            <Badge className="bg-red-500 text-white">
              {unreadCount} baru
            </Badge>
          )}
        </h1>
        <Button variant="outline" size="sm">
          Tandai Semua Dibaca
        </Button>
      </div>

      {notifications.length > 0 ? (
        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`border-l-4 ${getNotificationColor(notification.type)} ${
                !notification.read ? 'bg-blue-50/50' : ''
              } hover:shadow-md transition-shadow`}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{getNotificationIcon(notification.type)}</span>
                    <div className="flex-1">
                      <CardTitle className="text-base flex items-center gap-2">
                        {notification.title}
                        {!notification.read && (
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        )}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-600 mt-1">
                        {notification.message}
                      </CardDescription>
                    </div>
                  </div>
                  <span className="text-xs text-gray-400">{notification.time}</span>
                </div>
              </CardHeader>
              {notification.action && (
                <CardContent className="pt-0">
                  <Button variant="outline" size="sm" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                    {notification.action}
                  </Button>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center py-8">
          <CardContent>
            <div className="text-gray-400 text-4xl mb-4">🔔</div>
            <CardTitle className="text-gray-600 mb-2">Tidak Ada Notifikasi</CardTitle>
            <CardDescription>
              Notifikasi tentang pickup Anda akan muncul di sini
            </CardDescription>
          </CardContent>
        </Card>
      )}

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Pengaturan Notifikasi</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Pickup diambil pengepul</span>
            <Badge variant="secondary">Aktif</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Pickup selesai</span>
            <Badge variant="secondary">Aktif</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Tips & promosi</span>
            <Badge variant="secondary">Aktif</Badge>
          </div>
          <Button variant="outline" size="sm" className="w-full mt-4">
            Kelola Pengaturan
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
