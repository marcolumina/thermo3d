import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_COLLECTION_PRODUCTS_QUERY, type ShopifyProduct } from '@/lib/shopify';

/**
 * Fetch products from a Shopify collection by handle.
 * Common handles to try for "Nos meilleures ventes":
 * - 'nos-meilleures-ventes'
 * - 'meilleures-ventes'
 * - 'best-sellers'
 */
export function useShopifyCollection(handle: string, first = 12) {
  return useQuery({
    queryKey: ['shopify-collection', handle, first],
    queryFn: async (): Promise<ShopifyProduct[]> => {
      const data = await storefrontApiRequest(STOREFRONT_COLLECTION_PRODUCTS_QUERY, { handle, first });
      const edges = data?.data?.collectionByHandle?.products?.edges;
      return edges || [];
    },
  });
}
