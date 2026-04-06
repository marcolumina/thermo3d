import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Save } from 'lucide-react';

interface ProfileData {
  first_name: string;
  last_name: string;
  phone: string;
  address: string;
  city: string;
  postal_code: string;
  country: string;
}

const AccountProfile = ({ userId }: { userId: string }) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    first_name: '', last_name: '', phone: '', address: '', city: '', postal_code: '', country: 'France',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();
      if (data && !error) {
        setProfile({
          first_name: data.first_name || '',
          last_name: data.last_name || '',
          phone: data.phone || '',
          address: data.address || '',
          city: data.city || '',
          postal_code: data.postal_code || '',
          country: data.country || 'France',
        });
      }
      setLoading(false);
    };
    fetchProfile();
  }, [userId]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const { error } = await supabase
      .from('profiles')
      .update(profile)
      .eq('user_id', userId);
    setSaving(false);
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
    } else {
      toast({ title: 'Profil mis à jour !' });
    }
  };

  if (loading) return <div className="flex justify-center py-8"><Loader2 className="animate-spin w-6 h-6" /></div>;

  return (
    <form onSubmit={handleSave} className="space-y-4 max-w-lg">
      <h2 className="text-lg font-semibold mb-4">Informations personnelles</h2>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Prénom</label>
          <Input value={profile.first_name} onChange={e => setProfile(p => ({ ...p, first_name: e.target.value }))} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Nom</label>
          <Input value={profile.last_name} onChange={e => setProfile(p => ({ ...p, last_name: e.target.value }))} />
        </div>
      </div>
      <div>
        <label className="text-sm text-muted-foreground mb-1 block">Téléphone</label>
        <Input value={profile.phone} onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))} />
      </div>
      <div>
        <label className="text-sm text-muted-foreground mb-1 block">Adresse</label>
        <Input value={profile.address} onChange={e => setProfile(p => ({ ...p, address: e.target.value }))} />
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Ville</label>
          <Input value={profile.city} onChange={e => setProfile(p => ({ ...p, city: e.target.value }))} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Code postal</label>
          <Input value={profile.postal_code} onChange={e => setProfile(p => ({ ...p, postal_code: e.target.value }))} />
        </div>
        <div>
          <label className="text-sm text-muted-foreground mb-1 block">Pays</label>
          <Input value={profile.country} onChange={e => setProfile(p => ({ ...p, country: e.target.value }))} />
        </div>
      </div>
      <Button type="submit" disabled={saving}>
        {saving ? <Loader2 className="animate-spin mr-2" /> : <Save className="mr-2 w-4 h-4" />} Enregistrer
      </Button>
    </form>
  );
};

export default AccountProfile;
