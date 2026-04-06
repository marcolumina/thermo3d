import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, MapPin, Save } from 'lucide-react';

const AccountAddresses = ({ userId }: { userId: string }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [address, setAddress] = useState({ address: '', city: '', postal_code: '', country: 'France' });

  useEffect(() => {
    const fetch = async () => {
      const { data } = await supabase.from('profiles').select('address, city, postal_code, country').eq('user_id', userId).single();
      if (data) setAddress({ address: data.address || '', city: data.city || '', postal_code: data.postal_code || '', country: data.country || 'France' });
      setLoading(false);
    };
    fetch();
  }, [userId]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase.from('profiles').update(address).eq('user_id', userId);
    setSaving(false);
    if (error) toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    else toast({ title: 'Adresse mise à jour !' });
  };

  if (loading) return <div className="flex justify-center py-8"><Loader2 className="animate-spin w-6 h-6" /></div>;

  return (
    <form onSubmit={handleSave} className="space-y-4 max-w-lg">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2"><MapPin className="w-5 h-5" /> Adresse de livraison</h2>
      <div>
        <label className="text-sm text-muted-foreground mb-1 block">Adresse</label>
        <Input value={address.address} onChange={e => setAddress(a => ({ ...a, address: e.target.value }))} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Ville</label>
          <Input value={address.city} onChange={e => setAddress(a => ({ ...a, city: e.target.value }))} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Code postal</label>
          <Input value={address.postal_code} onChange={e => setAddress(a => ({ ...a, postal_code: e.target.value }))} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Pays</label>
          <Input value={address.country} onChange={e => setAddress(a => ({ ...a, country: e.target.value }))} />
        </div>
      </div>
      <Button type="submit" disabled={saving}>
        {saving ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2 w-4 h-4" />} Enregistrer
      </Button>
    </form>
  );
};

export default AccountAddresses;
