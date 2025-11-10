-- Create products table
CREATE TABLE public.products (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  image_url TEXT NOT NULL,
  category TEXT NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access (no auth required for browsing products)
CREATE POLICY "Products are viewable by everyone" 
ON public.products 
FOR SELECT 
USING (true);

-- Insert dummy products
INSERT INTO public.products (name, description, price, image_url, category, stock) VALUES
('SoarPro Headphones', 'Premium wireless headphones with active noise cancellation and 30-hour battery life', 299.99, 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop', 'Audio', 50),
('CloudBook Laptop', 'Ultra-thin laptop with stunning 4K display and all-day battery', 1499.99, 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=600&fit=crop', 'Computers', 25),
('SkyWatch Smart', 'Advanced smartwatch with health tracking and GPS navigation', 399.99, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=600&fit=crop', 'Wearables', 100),
('AeroPhone X', 'Next-gen smartphone with triple camera system and 5G connectivity', 899.99, 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop', 'Phones', 75),
('GlideTablet Pro', 'Professional tablet with precision stylus for creators', 799.99, 'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=800&h=600&fit=crop', 'Tablets', 40),
('SonicBuds Elite', 'True wireless earbuds with studio-quality sound', 179.99, 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&h=600&fit=crop', 'Audio', 150),
('VisionCam 4K', 'Professional camera with advanced AI features', 1299.99, 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&h=600&fit=crop', 'Cameras', 30),
('PowerBank Ultra', 'High-capacity portable charger with fast charging', 59.99, 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=600&fit=crop', 'Accessories', 200);