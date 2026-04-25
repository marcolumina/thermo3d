import { Truck, Package } from 'lucide-react';

export const mondialRelayRates = [
  { weight: "Jusqu'à 500 g", price: '4,00 €' },
  { weight: '500 g – 1 kg', price: '4,60 €' },
  { weight: '1 – 2 kg', price: '5,30 €' },
  { weight: '2 – 3 kg', price: '6,30 €' },
  { weight: '3 – 5 kg', price: '7,40 €' },
  { weight: '5 – 7 kg', price: '9,30 €' },
  { weight: '7 – 10 kg', price: '11,30 €' },
  { weight: '10 – 15 kg', price: '14,90 €' },
  { weight: '15 – 20 kg', price: '17,50 €' },
  { weight: '20 – 30 kg', price: '22,90 €' },
];

// Grille Colissimo Domicile sans signature (France métropolitaine, tarifs publics La Poste)
export const colissimoRates = [
  { weight: "Jusqu'à 250 g", price: '5,15 €' },
  { weight: '250 g – 500 g', price: '6,75 €' },
  { weight: '500 g – 750 g', price: '8,15 €' },
  { weight: '750 g – 1 kg', price: '8,75 €' },
  { weight: '1 – 2 kg', price: '9,55 €' },
  { weight: '2 – 5 kg', price: '12,80 €' },
  { weight: '5 – 10 kg', price: '18,55 €' },
  { weight: '10 – 15 kg', price: '23,90 €' },
  { weight: '15 – 30 kg', price: '30,40 €' },
];

interface ShippingRatesProps {
  compact?: boolean;
}

const RateTable = ({
  title,
  icon: Icon,
  delay,
  rates,
  compact,
}: {
  title: string;
  icon: typeof Truck;
  delay: string;
  rates: { weight: string; price: string }[];
  compact?: boolean;
}) => (
  <div className="bg-card border border-border rounded-xl overflow-hidden">
    <div className="flex items-center gap-2 px-4 py-3 bg-secondary/40 border-b border-border">
      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
        <Icon className="w-4 h-4 text-accent" />
      </div>
      <div>
        <h3 className="font-display font-semibold text-sm text-foreground">{title}</h3>
        <p className="text-[11px] text-muted-foreground">{delay}</p>
      </div>
    </div>
    <ul className={`divide-y divide-border ${compact ? 'text-xs' : 'text-sm'}`}>
      {rates.map((r) => (
        <li key={r.weight} className="flex justify-between items-center px-4 py-2">
          <span className="text-muted-foreground">{r.weight}</span>
          <span className="font-semibold text-foreground">{r.price}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ShippingRates = ({ compact = false }: ShippingRatesProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <RateTable
        title="Mondial Relay"
        icon={Package}
        delay="Point relais · 3-5 jours ouvrés"
        rates={mondialRelayRates}
        compact={compact}
      />
      <RateTable
        title="Colissimo Domicile"
        icon={Truck}
        delay="À domicile · 2-3 jours ouvrés"
        rates={colissimoRates}
        compact={compact}
      />
    </div>
  );
};

export default ShippingRates;
