import { useQuery } from '@tanstack/react-query';
import {
  storefrontApiRequest,
  STOREFRONT_COLLECTIONS_QUERY,
  STOREFRONT_COLLECTION_BY_HANDLE_QUERY,
  type ShopifyCollection,
  type ShopifyProduct,
} from '@/lib/shopify';

// Collections internes Shopify à masquer côté site
const HIDDEN_HANDLES = new Set(['frontpage']);

export function useShopifyCollections(first = 50) {
  return useQuery({
    queryKey: ['shopify-collections', first],
    queryFn: async (): Promise<ShopifyCollection[]> => {
      const data = await storefrontApiRequest(STOREFRONT_COLLECTIONS_QUERY, { first });
      const edges = data?.data?.collections?.edges || [];
      return edges
        .map((e: { node: ShopifyCollection }) => e.node)
        .filter((c: ShopifyCollection) => !HIDDEN_HANDLES.has(c.handle));
    },
    staleTime: 5 * 60 * 1000,
  });
}

export function useShopifyCollection(handle: string | undefined) {
  return useQuery({
    queryKey: ['shopify-collection', handle],
    enabled: !!handle,
    queryFn: async (): Promise<{
      collection: ShopifyCollection;
      products: ShopifyProduct[];
    } | null> => {
      const data = await storefrontApiRequest(STOREFRONT_COLLECTION_BY_HANDLE_QUERY, {
        handle,
        first: 50,
      });
      const c = data?.data?.collectionByHandle;
      if (!c) return null;
      return {
        collection: {
          id: c.id,
          handle: c.handle,
          title: c.title,
          description: c.description,
          image: c.image,
        },
        products: c.products.edges as ShopifyProduct[],
      };
    },
  });
}
