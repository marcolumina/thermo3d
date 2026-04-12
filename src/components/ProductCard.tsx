import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { ShoppingCart, Loader2, Star } from 'lucide-react';

interface ProductCardProps {
  product: ShopifyProduct;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: ProductCardProps) => {
  const { node } = product;
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const image = node.images.edges[0]?.node;
  const secondImage = node.images.edges[1]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const priceNum = parseFloat(price.amount);
  const fakeOriginalPrice = (priceNum / 0.8).toFixed(2);

  const title = node.title.toLowerCase();
  const isPack = title.includes('pack') || node.tags?.map(t => t.toLowerCase()).includes('pack');
  const badge = isPack ? 'BESTSELLER' : null;

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
    <Link
      to={`/product/${node.handle}`}
      className="group block bg-card rounded-2xl overflow-hidden border border-border/50 hover:shadow-premium-lg transition-all duration-300"
    >
      {/* Image container */}
      <div className="relative aspect-square overflow-hidden bg-secondary/40">
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="bg-accent text-accent-foreground text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-md">
              {badge}
            </span>
          </div>
        )}

        {image ? (
          <>
            <img
              src={image.url}
              alt={image.altText || `${node.title} — accessoire Thermomix`}
              className={`w-full h-full object-contain p-2 transition-opacity duration-500 ${secondImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'} transition-transform`}
              loading="lazy"
              width="400"
              height="400"
            />
            {secondImage && (
              <img
                src={secondImage.url}
                alt={secondImage.altText || node.title}
                className="absolute inset-0 w-full h-full object-contain p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
                width="400"
                height="400"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm">
            Image à venir
          </div>
        )}

        <button
          onClick={handleAddToCart}
          disabled={isLoading || !variant}
          className="absolute bottom-3 left-3 right-3 bg-accent text-accent-foreground py-2.5 rounded-lg text-xs font-semibold flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 disabled:opacity-50"
          aria-label={`Ajouter ${node.title} au panier`}
        >
          {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><ShoppingCart className="w-3.5 h-3.5" /> + Ajouter au panier</>}
        </button>
      </div>

      {/* Info */}
      <div className="p-4">
        <div className="flex items-center gap-0.5 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-3 h-3 fill-accent text-accent" />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">(4,8)</span>
        </div>

        <h3 className="font-display font-semibold text-sm text-foreground group-hover:text-accent transition-colors duration-200 line-clamp-2 leading-snug">
          {node.title}
        </h3>

        <div className="flex items-center gap-2 mt-3">
          <span className="text-sm text-muted-foreground">Offre</span>
          <span className="font-bold text-base text-foreground">
            {priceNum.toFixed(2)} €
          </span>
          <span className="text-xs text-muted-foreground line-through">
            {fakeOriginalPrice} €
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
