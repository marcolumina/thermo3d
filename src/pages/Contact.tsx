import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import TopBanner from '@/components/TopBanner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message envoyé !', { description: 'Nous vous répondrons dans les plus brefs délais.' });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Contact — Thermo3D | Accessoire Thermomix imprimé en 3D</title>
        <meta name="description" content="Contactez Thermo3D pour toute question sur nos accessoires Thermomix : support varoma, rangement TM6 TM5. Réponse sous 24-48h." />
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Nom</label>
                  <Input
                    required
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
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Sujet de votre message"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Votre message..."
                  rows={5}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                />
              </div>
              <Button type="submit" className="rounded-full gap-2">
                <Send className="w-4 h-4" />
                Envoyer le message
              </Button>
            </form>

            <div className="space-y-8">
              <div>
                <h3 className="font-display font-bold text-lg mb-4">Nos coordonnées</h3>
                <ul className="space-y-4">
                  {[
                    { icon: Mail, label: 'contact@thermo3d.fr' },
                    { icon: Phone, label: '06 00 00 00 00' },
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
                <h4 className="font-display font-semibold text-sm mb-2">Délai de réponse</h4>
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
