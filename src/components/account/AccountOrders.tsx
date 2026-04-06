import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Package } from 'lucide-react';

const statusLabels: Record<string, { label: string; color: string }> = {
  pending: { label: 'En attente', color: 'bg-yellow-100 text-yellow-800' },
  processing: { label: 'En cours', color: 'bg-blue-100 text-blue-800' },
  shipped: { label: 'Expédiée', color: 'bg-purple-100 text-purple-800' },
  delivered: { label: 'Livrée', color: 'bg-green-100 text-green-800' },
  cancelled: { label: 'Annulée', color: 'bg-red-100 text-red-800' },
};

const AccountOrders = ({ userId }: { userId: string }) => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      const { data } = await supabase
        .from('orders')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });
      setOrders(data || []);
      setLoading(false);
    };
    fetchOrders();
  }, [userId]);

  if (loading) return <div className="flex justify-center py-8"><Loader2 className="animate-spin w-6 h-6" /></div>;

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
        <h3 className="font-semibold text-lg mb-2">Aucune commande</h3>
        <p className="text-muted-foreground text-sm">Vos commandes apparaîtront ici après votre premier achat.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold mb-4">Mes commandes</h2>
      {orders.map(order => {
        const status = statusLabels[order.status] || { label: order.status, color: 'bg-muted text-muted-foreground' };
        return (
          <div key={order.id} className="border border-border rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Commande #{order.order_number}</span>
              <span className={`text-xs px-2 py-1 rounded-full font-medium ${status.color}`}>{status.label}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>{new Date(order.created_at).toLocaleDateString('fr-FR')}</span>
              <span className="font-semibold text-foreground">{Number(order.total).toFixed(2)} {order.currency}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AccountOrders;
