import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { ShoppingCart, Loader2 } from 'lucide-react';

interface ProductCardProps {
  product: ShopifyProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { node } = product;
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const image = node.images.edges[0]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!variant) return;
    await addItem({
      product,
      variantId: variant.id,
      variantTitle: variant.title,
      price: variant.price,
      quantity: 1,
      selectedOptions: variant.selectedOptions || [],
    });
    toast.success('Ajouté au panier ✓', { position: 'top-center' });
  };

  return (
    <Link to={`/product/${node.handle}`} className="group block">
      <div className="relative bg-secondary rounded-xl overflow-hidden aspect-square mb-4">
        {image ? (
          <img
            src={image.url}
            alt={image.altText || `${node.title} — accessoire Thermomix`}
            className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            width="400"
            height="400"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Pas d'image
          </div>
        )}
        <button
          onClick={handleAddToCart}
          disabled={isLoading || !variant}
          className="absolute bottom-3 right-3 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 disabled:opacity-50"
          aria-label={`Ajouter ${node.title} au panier`}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ShoppingCart className="w-4 h-4" />}
        </button>
      </div>
      <h3 className="font-semibold text-sm text-foreground group-hover:text-accent transition-colors line-clamp-2">{node.title}</h3>
      <p className="font-bold text-base mt-1 text-foreground">
        {parseFloat(price.amount).toFixed(2)} €
      </p>
    </Link>
  );
};

export default ProductCard;
