import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 gradient-primary opacity-10" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Welcome{" "}
            <span className="text-gradient">Explore SoarLabs</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150">
            Experience premium technology products with our cutting-edge liquid glass interface.
            Discover innovation that elevates your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button
              size="lg"
              className="gradient-primary glow group"
              onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Products
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="glass">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
