import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [website, setWebsite] = useState(''); // honeypot
  const [submitting, setSubmitting] = useState(false);
  const renderedAt = useRef<number>(Date.now());

  useEffect(() => {
    renderedAt.current = Date.now();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('contact', {
        body: {
          ...formData,
          website,
          elapsedMs: Date.now() - renderedAt.current,
        },
      });
      if (error) throw error;
      toast.success('Message envoyé !', { description: 'Nous vous répondrons sous 24-48h.' });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setWebsite('');
    } catch (err) {
      console.error(err);
      toast.error('Erreur', { description: 'Impossible d’envoyer le message. Réessayez.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contactez Thermo3D | Accessoires Thermomix — Support client</title>
        <meta name="description" content="Contactez Thermo3D pour toute question sur nos accessoires Thermomix imprimés en 3D. Réponse sous 24-48h. Support, rangement, organisation cuisine." />
        <link rel="canonical" href="https://thermo3d.fr/contact" />
        <meta property="og:title" content="Contact — Thermo3D" />
        <meta property="og:description" content="Une question sur nos accessoires Thermomix ? Contactez-nous, réponse sous 24-48h." />
        <meta property="og:url" content="https://thermo3d.fr/contact" />
      </Helmet>

      <TopBanner />
      <Header />

      <main className="flex-1">
        <section className="bg-muted/50 py-16">
          <div className="container mx-auto px-6">
            <h1 className="font-display font-extrabold text-3xl md:text-4xl text-foreground">Contactez Thermo3D</h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-md">Une question sur nos accessoires Thermomix ? N'hésitez pas à nous écrire.</p>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <h2 className="font-display font-bold text-lg text-foreground mb-2">Envoyez-nous un message</h2>

              {/* Honeypot field — invisible to users, attractive to bots */}
              <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
                <label>
                  Ne pas remplir
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </label>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nom</label>
                  <Input
                    required
                    maxLength={100}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <Input
                    type="email"
                    required
                    maxLength={255}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Sujet</label>
                <Input
                  required
                  maxLength={150}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  minLength={5}
                  maxLength={2000}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Votre message..."
                  rows={5}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </div>
              <Button type="submit" disabled={submitting} className="rounded-full gap-2">
                {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                {submitting ? 'Envoi…' : 'Envoyer le message'}
              </Button>
            </form>

            <div className="space-y-8">
              <div>
                <h2 className="font-display font-bold text-lg mb-4">Nos coordonnées</h2>
                <ul className="space-y-4">
                  {[
                    { icon: Mail, label: 'contacthermo3d@gmail.com' },
                    { icon: Phone, label: '06 72 27 59 17' },
                    { icon: MapPin, label: 'France' },
                  ].map((item) => (
                    <li key={item.label} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-primary" />
                      </div>
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display font-semibold text-sm mb-2">Délai de réponse</h3>
                <p className="text-sm text-muted-foreground">Nous répondons généralement sous 24 à 48h ouvrées.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
