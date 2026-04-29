/**
 * Détection de la compatibilité Thermomix d'un produit Shopify.
 * Utilise prioritairement les tags Shopify (tm5, tm6, tm7, compatible-tmX),
 * avec un fallback sur le titre / la description.
 */

import type { ShopifyProduct } from './shopify';

export type TMModel = 'tm5' | 'tm6' | 'tm7';

const TAG_PATTERNS: Record<TMModel, RegExp> = {
  tm5: /^(tm5|compatible-tm5)$/i,
  tm6: /^(tm6|compatible-tm6)$/i,
  tm7: /^(tm7|compatible-tm7)$/i,
};

const TEXT_PATTERNS: Record<TMModel, RegExp> = {
  tm5: /\btm\s*5\b/i,
  tm6: /\btm\s*6\b/i,
  tm7: /\btm\s*7\b/i,
};

export function getCompatibility(product: ShopifyProduct): TMModel[] {
  const tags = product.node.tags || [];
  const found = new Set<TMModel>();

  // 1. Tags Shopify (source de vérité)
  for (const tag of tags) {
    (Object.keys(TAG_PATTERNS) as TMModel[]).forEach(model => {
      if (TAG_PATTERNS[model].test(tag.trim())) found.add(model);
    });
  }

  // 2. Fallback : titre + description si aucun tag
  if (found.size === 0) {
    const text = `${product.node.title} ${product.node.description || ''}`;
    (Object.keys(TEXT_PATTERNS) as TMModel[]).forEach(model => {
      if (TEXT_PATTERNS[model].test(text)) found.add(model);
    });
  }

  return Array.from(found).sort();
}

export function isCompatibleWith(product: ShopifyProduct, model: TMModel): boolean {
  return getCompatibility(product).includes(model);
}

export function filterByCompatibility(products: ShopifyProduct[], model: TMModel): ShopifyProduct[] {
  return products.filter(p => isCompatibleWith(p, model));
}

export function formatCompatibilityLabel(models: TMModel[]): string {
  if (models.length === 0) return '';
  if (models.length === 1) return `Compatible ${models[0].toUpperCase()}`;
  return `Compatible ${models.map(m => m.toUpperCase()).join(' / ')}`;
}
