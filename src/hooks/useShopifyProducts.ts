import { useQuery } from '@tanstack/react-query';
import { storefrontApiRequest, STOREFRONT_PRODUCTS_QUERY, type ShopifyProduct } from '@/lib/shopify';

export function useShopifyProducts(first = 20) {
  return useQuery({
    queryKey: ['shopify-products', first],
    queryFn: async (): Promise<ShopifyProduct[]> => {
      const data = await storefrontApiRequest(STOREFRONT_PRODUCTS_QUERY, { first });
      const edges: ShopifyProduct[] = data?.data?.products?.edges || [];
      // Masquer les produits réservés à la commande sur validation (non listés dans le catalogue)
      const HIDDEN_HANDLES = new Set(['cache-ecran-thermomix-personnalise-sur-mesure']);
      const HIDDEN_TAGS = new Set(['hidden', 'sur-mesure']);
      return edges.filter((e) => {
        if (HIDDEN_HANDLES.has(e.node.handle)) return false;
        const tags = (e.node as any).tags as string[] | undefined;
        if (tags?.some((t) => HIDDEN_TAGS.has(t.toLowerCase()))) return false;
        return true;
      });
    },
  });
}
