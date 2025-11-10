import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Skeleton } from "@/components/ui/skeleton";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("products")
        .select("*")
        .eq("id", id)
        .single();
      
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Skeleton className="h-12 w-32 mb-8" />
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Skeleton className="aspect-square w-full rounded-2xl" />
            <div className="space-y-6">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-16 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-12 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Button
          variant="ghost"
          className="mb-8"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="glass-card overflow-hidden rounded-2xl animate-in fade-in slide-in-from-left duration-700">
            <img
              src={product.image_url}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
                {product.name}
              </h1>
              <p className="text-lg text-muted-foreground">{product.description}</p>
            </div>

            <div className="glass-card p-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg text-muted-foreground">Price:</span>
                <span className="text-4xl font-bold text-primary">
                  ${product.price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg text-muted-foreground">Category:</span>
                <span className="text-lg font-semibold">{product.category}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg text-muted-foreground">Stock:</span>
                <span className={`text-lg font-semibold ${product.stock < 10 ? 'text-destructive' : 'text-accent'}`}>
                  {product.stock > 0 ? `${product.stock} available` : "Out of stock"}
                </span>
              </div>
            </div>

            <Button
              size="lg"
              className="w-full gradient-primary glow text-lg h-14"
              onClick={() => addToCart(product)}
              disabled={product.stock === 0}
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
