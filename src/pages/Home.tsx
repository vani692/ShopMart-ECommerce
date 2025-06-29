import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Shield, RefreshCw, Headphones } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 8);
  const dealsProducts = products.filter(p => p.originalPrice).slice(0, 4);

  return (
    <div className="min-h-screen bg-slate-50">
      <Hero />

      {/* Today's Deals */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Today's Deals</h2>
            <Link to="/products" className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors">
              See all deals
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dealsProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'Electronics', image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', link: '/products?category=electronics' },
              { name: 'Fashion', image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', link: '/products?category=fashion' },
              { name: 'Home & Garden', image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', link: '/products?category=home' },
              { name: 'Health', image: 'https://images.pexels.com/photos/4047074/pexels-photo-4047074.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', link: '/products?category=health' },
              { name: 'Food & Grocery', image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', link: '/products?category=food' },
              { name: 'Sports', image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop', link: '/products?category=wearables' },
            ].map((category) => (
              <Link
                key={category.name}
                to={category.link}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 text-center group"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-24 object-cover rounded mb-3 group-hover:scale-105 transition-transform"
                />
                <h3 className="font-semibold text-sm text-slate-900">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
            <Link to="/products" className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors">
              See more
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <Truck className="w-12 h-12 text-cyan-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Free Shipping</h3>
              <p className="text-sm text-slate-600">Free shipping on orders over $25</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Secure Payment</h3>
              <p className="text-sm text-slate-600">Your payment information is safe</p>
            </div>
            <div className="text-center">
              <RefreshCw className="w-12 h-12 text-violet-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">Easy Returns</h3>
              <p className="text-sm text-slate-600">30-day return policy</p>
            </div>
            <div className="text-center">
              <Headphones className="w-12 h-12 text-rose-600 mx-auto mb-3" />
              <h3 className="font-semibold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-sm text-slate-600">Customer support anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-slate-300 mb-8">
            Get the latest deals and new product announcements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;