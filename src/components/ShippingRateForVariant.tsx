import { Package } from 'lucide-react';
import {
  mondialRelayRates,
  findRateForWeight,
  shopifyWeightToGrams,
} from './ShippingRates';

interface Props {
  weight?: number | null;
  weightUnit?: string | null;
}

// Poids emballage (carton standard) ajouté au poids brut produit Shopify
const PACKAGING_GRAMS = 100;

const ShippingRateForVariant = ({ weight, weightUnit }: Props) => {
  const productGrams = shopifyWeightToGrams(weight, weightUnit);
  const grams = productGrams != null ? productGrams + PACKAGING_GRAMS : null;
  const mr = grams != null ? findRateForWeight(grams, mondialRelayRates) : null;

  // Fallback : pas de poids renseigné → prix "à partir de"
  if (grams == null) {
    return (
      <div className="text-[11px]">
        <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
          <Package className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <div>
            <p className="font-semibold text-foreground">Mondial Relay</p>
            <p className="text-muted-foreground">3-5 j · dès 4,00 €</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="text-[11px]">
        <div className="flex items-center gap-2 bg-secondary/40 rounded-lg px-3 py-2">
          <Package className="w-3.5 h-3.5 text-accent flex-shrink-0" />
          <div className="min-w-0">
            <p className="font-semibold text-foreground">Mondial Relay</p>
            <p className="text-muted-foreground">
              3-5 j ·{' '}
              <span className="font-bold text-foreground">{mr?.price ?? 'sur devis'}</span>
              {' '}·{' '}
              <span className="font-semibold text-accent">offert dès 50 €</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingRateForVariant;
