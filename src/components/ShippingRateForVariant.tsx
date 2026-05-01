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
      <div className="flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-xl px-4 py-3">
        <Package className="w-4 h-4 text-accent flex-shrink-0" />
        <p className="text-xs text-foreground">
          📍 <strong>Livraison Mondial Relay dès 4,00 €</strong> — offerte dès 50 €
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-accent/5 border border-accent/20 rounded-xl px-4 py-3">
      <Package className="w-4 h-4 text-accent flex-shrink-0" />
      <p className="text-xs text-foreground">
        📍 <strong>Livraison Mondial Relay {mr?.price ?? 'sur devis'}</strong> — offerte dès 50 €
      </p>
    </div>
  );
};

export default ShippingRateForVariant;
