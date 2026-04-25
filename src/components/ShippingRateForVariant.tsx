import { Truck, Package, Info } from 'lucide-react';
import {
  mondialRelayRates,
  colissimoRates,
  findRateForWeight,
  shopifyWeightToGrams,
} from './ShippingRates';

interface Props {
  weight?: number | null;
  weightUnit?: string | null;
}

// Poids emballage (carton standard) ajouté au poids brut produit Shopify
const PACKAGING_GRAMS = 100;

const formatGrams = (g: number) =>
  g >= 1000 ? `${(g / 1000).toFixed(g % 1000 === 0 ? 0 : 2)} kg` : `${Math.round(g)} g`;

const ShippingRateForVariant = ({ weight, weightUnit }: Props) => {
  const productGrams = shopifyWeightToGrams(weight, weightUnit);
  const grams = productGrams != null ? productGrams + PACKAGING_GRAMS : null;
  const mr = grams != null ? findRateForWeight(grams, mondialRelayRates) : null;
  const co = grams != null ? findRateForWeight(grams, colissimoRates) : null;

  // Fallback : pas de poids renseigné → prix "à partir de"
  if (grams == null) {
    return (
      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
          <Package className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">Mondial Relay</p>
            <p className="text-muted-foreground">3-5 j · dès 4,00 €</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
          <Truck className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">Colissimo</p>
            <p className="text-muted-foreground">2-3 j · dès 5,49 €</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2 text-[11px]">
        <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
          <Package className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold text-foreground">Mondial Relay</p>
            <p className="text-muted-foreground">
              3-5 j ·{' '}
              <span className="font-bold text-foreground">{mr?.price ?? 'sur devis'}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
          <Truck className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold text-foreground">Colissimo</p>
            <p className="text-muted-foreground">
              2-3 j ·{' '}
              <span className="font-bold text-foreground">{co?.price ?? 'sur devis'}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingRateForVariant;
