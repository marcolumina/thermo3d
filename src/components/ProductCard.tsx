import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { useCartStore } from '@/stores/cartStore';
import type { ShopifyProduct } from '@/lib/shopify';
import { Loader2, Plus, Settings2 } from 'lucide-react';

interface ProductCardProps {
  product: ShopifyProduct;
  featured?: boolean;
}

/* Produits nécessitant une personnalisation obligatoire (texte gravé) */
function needsCustomization(handle: string): boolean {
  return /cache-ecran|cache-écran/i.test(handle);
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { node } = product;
  const navigate = useNavigate();
  const addItem = useCartStore(state => state.addItem);
  const isLoading = useCartStore(state => state.isLoading);
  const image = node.images.edges[0]?.node;
  const secondImage = node.images.edges[1]?.node;
  const variant = node.variants.edges[0]?.node;
  const price = node.priceRange.minVariantPrice;
  const priceNum = parseFloat(price.amount);

  // Si plusieurs variantes (couleur) ou personnalisation requise → rediriger vers la fiche
  const requiresChoice = node.variants.edges.length > 1 || needsCustomization(node.handle);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (requiresChoice) {
      navigate(`/product/${node.handle}`);
      return;
    }
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
      className="group block"
    >
      {/* Image carrée — élément principal */}
      <div className="relative aspect-square overflow-hidden rounded-xl bg-secondary/40">
        {image ? (
          <>
            <img
              src={image.url}
              alt={image.altText || `${node.title} — accessoire Thermomix`}
              className={`w-full h-full object-cover transition-opacity duration-500 ${secondImage ? 'group-hover:opacity-0' : 'group-hover:scale-105'} transition-transform duration-500`}
              loading="lazy"
              width="400"
              height="400"
            />
            {secondImage && (
              <img
                src={secondImage.url}
                alt={secondImage.altText || node.title}
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                loading="lazy"
                width="400"
                height="400"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xs">
            Image à venir
          </div>
        )}
      </div>

      {/* Infos minimalistes sous l'image */}
      <div className="pt-3 px-0.5">
        <h3 className="font-display font-medium text-[13px] md:text-sm text-foreground leading-snug line-clamp-2 min-h-[2.4em] group-hover:text-accent transition-colors">
          {node.title}
        </h3>

        <div className="mt-1.5 flex items-center justify-between gap-2">
          <span className="font-semibold text-sm md:text-base text-foreground">
            {priceNum.toFixed(2)} €
          </span>

          <button
            onClick={handleAddToCart}
            disabled={isLoading || !variant}
            className="btn-cart inline-flex items-center gap-1 text-[11px] md:text-xs font-semibold rounded-full px-3 py-1.5"
            aria-label={requiresChoice ? `Choisir options pour ${node.title}` : `Ajouter ${node.title} au panier`}
          >
            {isLoading ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : requiresChoice ? (
              <>
                <Settings2 className="w-3 h-3" strokeWidth={2.5} /> Choisir
              </>
            ) : (
              <>
                <Plus className="w-3 h-3" strokeWidth={2.5} /> Ajouter
              </>
            )}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
