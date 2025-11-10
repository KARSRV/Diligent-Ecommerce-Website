import { X, Plus, Minus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

export const Cart = () => {
  const { items, removeFromCart, updateQuantity, totalPrice, isOpen, toggleCart, clearCart } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent className="glass w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold text-gradient">Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-8 flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="glass-card p-4 flex gap-4">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.name}</h4>
                    <p className="text-sm text-primary font-bold mb-2">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">{item.quantity}</span>
                      <Button
                        size="icon"
                        variant="outline"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 ml-auto text-destructive"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="glass-card p-4">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total:</span>
                <span className="text-primary text-2xl">${totalPrice.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full gradient-primary glow" size="lg">
              Checkout
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
