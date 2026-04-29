import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Minus, Plus, Trash2, ExternalLink, Loader2, Lock, Truck, ShieldCheck } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import { useAuth } from "@/hooks/useAuth";

const FREE_SHIPPING_THRESHOLD = 50;
const DEFAULT_SHIPPING = 4.1; // Mondial Relay entry tier (indicatif, calcul réel via Shopify)

export const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items, isLoading, isSyncing, updateQuantity, removeItem, getCheckoutUrl, syncCart } = useCartStore();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (parseFloat(item.price.amount) * item.quantity), 0);

  const subtotal = totalPrice;
  const shipping = subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : DEFAULT_SHIPPING;
  const grandTotal = subtotal + shipping;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progressPct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  useEffect(() => { if (isOpen) syncCart(); }, [isOpen, syncCart]);

  const handleCheckout = () => {
    if (!user) {
      toast.info('Connectez-vous pour finaliser votre commande', {
        description: 'Créez un compte ou connectez-vous en quelques secondes.',
      });
      setIsOpen(false);
      navigate('/auth?redirect=checkout');
      return;
    }
    const checkoutUrl = getCheckoutUrl();
    if (checkoutUrl) {
      window.open(checkoutUrl, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="relative">
          <ShoppingCart className="w-5 h-5 text-foreground" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg flex flex-col h-full">
        <SheetHeader className="flex-shrink-0">
          <SheetTitle className="font-display">Panier</SheetTitle>
          <SheetDescription>
            {totalItems === 0 ? "Votre panier est vide" : `${totalItems} article${totalItems !== 1 ? 's' : ''}`}
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col flex-1 pt-6 min-h-0">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Votre panier est vide</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto pr-2 min-h-0">
                <div className="space-y-4">
                  {items.map((item) => {
                    const colorOpt = item.selectedOptions?.find(
                      (o) => o.name.toLowerCase().includes('couleur') || o.name.toLowerCase().includes('color')
                    );
                    return (
                    <div key={`${item.variantId}-${(item.attributes || []).map(a=>a.value).join('|')}`} className="flex gap-4 p-2">
                      <div className="w-16 h-16 bg-card rounded-lg overflow-hidden flex-shrink-0">
                        {item.product.node.images?.edges?.[0]?.node && (
                          <img src={item.product.node.images.edges[0].node.url} alt={`${item.product.node.title} — accessoire Thermomix`} className="w-full h-full object-contain p-1" loading="lazy" width="64" height="64" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-display font-medium text-sm line-clamp-2">{item.product.node.title}</h4>
                        {(colorOpt || (item.attributes && item.attributes.length > 0)) && (
                          <div className="mt-0.5 space-y-0.5">
                            {colorOpt && (
                              <p className="text-[11px] text-muted-foreground">Couleur : <span className="text-foreground font-medium">{colorOpt.value}</span></p>
                            )}
                            {item.attributes?.filter(a => !a.key.startsWith('_')).map((a) => (
                              <p key={a.key} className="text-[11px] text-muted-foreground truncate">
                                {a.key} : <span className="text-foreground font-medium">« {a.value} »</span>
                              </p>
                            ))}
                          </div>
                        )}
                        <p className="font-semibold text-sm mt-1">{parseFloat(item.price.amount).toFixed(2)} €</p>
                      </div>
                      <div className="flex flex-col items-end gap-2 flex-shrink-0">
                        <Button variant="ghost" size="icon" className="h-6 w-6" onClick={() => removeItem(item.variantId)}>
                          <Trash2 className="h-3 w-3" />
                        </Button>
                        <div className="flex items-center gap-1">
                          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity - 1)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button variant="outline" size="icon" className="h-6 w-6" onClick={() => updateQuantity(item.variantId, item.quantity + 1)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex-shrink-0 space-y-3 pt-4 border-t">
                {/* Free shipping progress */}
                <div className="rounded-lg bg-accent/5 border border-accent/15 p-3">
                  {remainingForFreeShipping > 0 ? (
                    <p className="text-xs text-foreground/80">
                      Plus que <span className="font-semibold text-accent">{remainingForFreeShipping.toFixed(2)} €</span> pour la livraison offerte 🎉
                    </p>
                  ) : (
                    <p className="text-xs font-semibold text-accent">🎉 Livraison offerte débloquée !</p>
                  )}
                  <div className="mt-2 h-1.5 rounded-full bg-accent/15 overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${progressPct}%` }}
                    />
                  </div>
                </div>

                {/* Price breakdown */}
                <div className="space-y-1.5 text-sm">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Sous-total</span>
                    <span>{subtotal.toFixed(2)} €</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Livraison Mondial Relay (3-5j)</span>
                    <span>{shipping === 0 ? <span className="text-accent font-semibold">Offerte</span> : `dès ${shipping.toFixed(2)} €`}</span>
                  </div>
                  <p className="text-[10px] text-muted-foreground/80 -mt-1">Tarif final calculé au paiement</p>
                  <div className="flex justify-between items-center pt-2 border-t border-border/60">
                    <span className="text-lg font-display font-semibold">Total</span>
                    <span className="text-xl font-display font-bold">{grandTotal.toFixed(2)} €</span>
                  </div>
                </div>

                <Button onClick={handleCheckout} className="w-full bg-primary text-primary-foreground hover:opacity-90 min-h-[52px]" size="lg" disabled={items.length === 0 || isLoading || isSyncing || authLoading}>
                  {isLoading || isSyncing || authLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : !user ? (
                    <><Lock className="w-4 h-4 mr-2" />Se connecter pour commander</>
                  ) : (
                    <><Lock className="w-4 h-4 mr-2" />Passer commande — {grandTotal.toFixed(2)} €</>
                  )}
                </Button>
                {!user && !authLoading && (
                  <p className="text-[11px] text-center text-muted-foreground -mt-1">
                    La création d'un compte est requise pour finaliser votre commande.
                  </p>
                )}

                {/* Reassurance bar */}
                <div className="grid grid-cols-3 gap-2 pt-1">
                  <div className="flex flex-col items-center text-center gap-1">
                    <Lock className="w-4 h-4 text-accent" />
                    <span className="text-[10px] leading-tight text-muted-foreground">Paiement<br/>sécurisé</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <Truck className="w-4 h-4 text-accent" />
                    <span className="text-[10px] leading-tight text-muted-foreground">Expédition<br/>rapide</span>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-accent" />
                    <span className="text-[10px] leading-tight text-muted-foreground">Garantie<br/>14 jours</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
