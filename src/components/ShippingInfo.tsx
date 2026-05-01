import { Truck, Clock, MapPin, Gift } from 'lucide-react';

const shippingOptions = [
  {
    icon: MapPin,
    title: 'Mondial Relay',
    delay: '3-5 jours ouvrés',
    price: 'dès 4,10 €',
    freeFrom: 'Offerte dès 50€',
  },
  {
    icon: Truck,
    title: 'Colissimo',
    delay: '2-3 jours ouvrés',
    price: 'dès 5,15 €',
    freeFrom: 'Offerte dès 50€',
  },
];

const ShippingInfo = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-foreground mb-3">
            Livraison rapide depuis la Corse 🇫🇷
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Tous nos accessoires sont expédiés sous 48h depuis notre atelier en Corse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
          {shippingOptions.map((opt) => (
            <div key={opt.title} className="bg-card border border-border rounded-xl p-5 flex gap-4 items-start">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <opt.icon className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-sm text-foreground">{opt.title}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <Clock className="w-3 h-3 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">{opt.delay}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-bold text-foreground">{opt.price}</span>
                  <span className="text-[10px] font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                    {opt.freeFrom}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Gift className="w-4 h-4 text-accent" />
            Livraison offerte dès 50€
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-accent" />
            Expédié sous 48h
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-accent" />
            Suivi de colis inclus
          </span>
        </div>
      </div>
    </section>
  );
};

export default ShippingInfo;
