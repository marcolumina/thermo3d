import { Truck, Package } from 'lucide-react';

// Tarif unique Mondial Relay France métropolitaine
export const MONDIAL_RELAY_FLAT_RATE = 5.99;
export const MONDIAL_RELAY_FLAT_RATE_LABEL = '5,99 €';

// Grille "tarif unique" — toujours 5,99 € quel que soit le poids
export const mondialRelayRates = [
  { maxG: Infinity, weight: 'Toute commande (France métropolitaine)', price: MONDIAL_RELAY_FLAT_RATE_LABEL },
];

// Grille Colissimo Domicile sans signature (France métropolitaine)
export const colissimoRates = [
  { maxG: 250, weight: "Jusqu'à 250 g", price: '5,15 €' },
  { maxG: 500, weight: '250 g – 500 g', price: '6,75 €' },
  { maxG: 750, weight: '500 g – 750 g', price: '8,15 €' },
  { maxG: 1000, weight: '750 g – 1 kg', price: '8,75 €' },
  { maxG: 2000, weight: '1 – 2 kg', price: '9,55 €' },
  { maxG: 5000, weight: '2 – 5 kg', price: '12,80 €' },
  { maxG: 10000, weight: '5 – 10 kg', price: '18,55 €' },
  { maxG: 15000, weight: '10 – 15 kg', price: '23,90 €' },
  { maxG: 30000, weight: '15 – 30 kg', price: '30,40 €' },
];

// Convertit weight + weightUnit Shopify en grammes
export function shopifyWeightToGrams(
  weight?: number | null,
  unit?: string | null
): number | null {
  if (weight == null || !Number.isFinite(weight) || weight <= 0) return null;
  switch (unit) {
    case 'KILOGRAMS': return weight * 1000;
    case 'GRAMS': return weight;
    case 'POUNDS': return weight * 453.592;
    case 'OUNCES': return weight * 28.3495;
    default: return weight; // par défaut on suppose grammes
  }
}

// Trouve le palier correspondant (ou null si hors grille)
export function findRateForWeight(
  grams: number,
  rates: { maxG: number; weight: string; price: string }[]
) {
  return rates.find((r) => grams <= r.maxG) || null;
}

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
