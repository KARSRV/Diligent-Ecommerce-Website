import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  stock: number;
}

export const ProductCard = ({ id, name, description, price, image_url, stock }: ProductCardProps) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({ id, name, price, image_url });
  };

  return (
    <Card
      className="glass-card overflow-hidden cursor-pointer group hover:scale-105 transition-all duration-300 hover:glow"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image_url}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 text-foreground">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-primary">${price.toFixed(2)}</span>
          <Button
            size="sm"
            className="gradient-primary"
            onClick={handleAddToCart}
            disabled={stock === 0}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
        {stock < 10 && stock > 0 && (
          <p className="text-xs text-destructive mt-2">Only {stock} left!</p>
        )}
        {stock === 0 && (
          <p className="text-xs text-destructive mt-2">Out of stock</p>
        )}
      </div>
    </Card>
  );
};
