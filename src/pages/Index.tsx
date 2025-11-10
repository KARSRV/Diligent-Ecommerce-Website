import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      <section id="products" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gradient">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our curated collection of premium technology products designed to enhance your digital lifestyle
            </p>
          </div>
          
          <ProductGrid />
        </div>
      </section>

      <section id="categories" className="py-16 sm:py-24 glass-card mx-4 sm:mx-6 lg:mx-8 rounded-3xl mb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">Shop by Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12">
            {["Audio", "Computers", "Wearables", "Phones", "Tablets", "Cameras", "Accessories"].map((category) => (
              <div key={category} className="glass p-6 rounded-2xl hover:scale-105 transition-transform cursor-pointer">
                <p className="font-semibold text-lg">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gradient">About SoarLabs</h2>
          <p className="text-lg text-muted-foreground mb-6">
            We're dedicated to bringing you the finest technology products with an unmatched shopping experience.
            Our liquid glass interface represents our commitment to innovation and elegance.
          </p>
          <p className="text-lg text-muted-foreground">
            Every product is carefully selected to ensure quality, performance, and style.
            Welcome to the future of online shopping.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
