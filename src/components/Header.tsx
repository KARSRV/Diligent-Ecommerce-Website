import { ShoppingCart, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { totalItems, toggleCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full gradient-primary glow" />
            <span className="text-xl sm:text-2xl font-bold text-gradient">SoarLabs</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-foreground hover:text-primary transition-colors">
              Products
            </a>
            <a href="#categories" className="text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              onClick={toggleCart}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="#products"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Products
            </a>
            <a
              href="#categories"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </a>
            <a
              href="#about"
              className="block text-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};
