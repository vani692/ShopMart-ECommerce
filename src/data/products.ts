import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    category: 'Electronics',
    description: 'Experience premium sound quality with these wireless headphones featuring active noise cancellation and 30-hour battery life.',
    features: ['Active Noise Cancellation', '30-hour Battery', 'Premium Sound Quality', 'Comfortable Fit'],
    rating: 4.8,
    reviews: 1247,
    inStock: true,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/393047/pexels-photo-393047.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    category: 'Wearables',
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring, GPS, and waterproof design.',
    features: ['Heart Rate Monitor', 'GPS Tracking', 'Waterproof', '7-day Battery Life'],
    rating: 4.6,
    reviews: 892,
    inStock: true,
    badge: 'New'
  },
  {
    id: '3',
    name: 'Luxury Leather Backpack',
    price: 159,
    image: 'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    images: [
      'https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    category: 'Fashion',
    description: 'Handcrafted leather backpack perfect for professionals and travelers. Features multiple compartments and premium materials.',
    features: ['Genuine Leather', 'Multiple Compartments', 'Laptop Sleeve', 'Water Resistant'],
    rating: 4.7,
    reviews: 543,
    inStock: true
  },
  {
    id: '4',
    name: 'Minimalist Desk Lamp',
    price: 89,
    originalPrice: 129,
    image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    images: [
      'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    category: 'Home',
    description: 'Modern LED desk lamp with adjustable brightness and color temperature. Perfect for any workspace.',
    features: ['LED Technology', 'Adjustable Brightness', 'Color Temperature Control', 'USB Charging'],
    rating: 4.5,
    reviews: 324,
    inStock: true
  },
  {
    id: '5',
    name: 'Organic Coffee Beans',
    price: 24,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    images: [
      'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
      'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    category: 'Food',
    description: 'Premium organic coffee beans sourced directly from sustainable farms. Rich, aromatic, and ethically sourced.',
    features: ['100% Organic', 'Fair Trade', 'Freshly Roasted', 'Single Origin'],
    rating: 4.9,
    reviews: 756,
    inStock: true,
    badge: 'Organic'
  },
  {
    id: '6',
    name: 'Wireless Charging Pad',
    price: 39,
    originalPrice: 59,
    image: 'https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    images: [
      'https://images.pexels.com/photos/4039921/pexels-photo-4039921.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    category: 'Electronics',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator.',
    features: ['Fast Charging', 'Qi Compatible', 'LED Indicator', 'Non-slip Base'],
    rating: 4.4,
    reviews: 429,
    inStock: true
  },
  {
    id: '7',
    name: 'Artisan Ceramic Mug',
    price: 18,
    image: 'https://images.pexels.com/photos/50676/coffee-mugs-t-brown-drink-50676.jpeg',
    images: [
      'https://images.pexels.com/photos/50676/coffee-mugs-t-brown-drink-50676.jpeg'
    ],
    category: 'Home',
    description: 'Handcrafted ceramic mug with unique glaze patterns. Perfect for your morning coffee or evening tea.',
    features: ['Handcrafted', 'Unique Design', 'Dishwasher Safe', 'Microwave Safe'],
    rating: 4.6,
    reviews: 187,
    inStock: true,
    badge: 'Handmade'
  },
  {
    id: '8',
    name: 'Plant-Based Protein Powder',
    price: 45,
    image: 'https://images.pexels.com/photos/4047074/pexels-photo-4047074.jpeg?auto=compress&cs=tinysrgb&w=500&h=500&fit=crop',
    images: [
      'https://images.pexels.com/photos/4047074/pexels-photo-4047074.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
    ],
    category: 'Health',
    description: 'Premium plant-based protein powder with complete amino acid profile. Perfect for fitness enthusiasts.',
    features: ['Plant-Based', 'Complete Protein', 'No Artificial Flavors', '25g Protein per Serving'],
    rating: 4.7,
    reviews: 634,
    inStock: true,
    badge: 'Vegan'
  }
];

export const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home',
  'Health',
  'Food',
  'Wearables'
];