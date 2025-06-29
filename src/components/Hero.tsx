import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Main banner */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            <strong>Mega Sale:</strong> Save up to 70% on electronics, fashion, and more. 
            <Link to="/products" className="underline ml-2 hover:text-cyan-200 transition-colors">Shop now</Link>
          </p>
        </div>
      </div>

      {/* Hero section */}
      <div className="relative bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main hero card */}
            <div className="lg:col-span-3 bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="relative h-96 bg-gradient-to-r from-cyan-500 to-blue-600">
                <img
                  src="https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                  alt="Featured Products"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-start p-8">
                  <div className="text-white max-w-md">
                    <h1 className="text-4xl font-bold mb-4">Electronics Sale</h1>
                    <p className="text-xl mb-6">Up to 50% off on premium headphones, speakers, and more</p>
                    <Link
                      to="/products?category=electronics"
                      className="inline-flex items-center bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded font-semibold transition-colors"
                    >
                      Shop Electronics
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Side cards */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg mb-3">Sign in for the best experience</h3>
                <Link
                  to="/auth"
                  className="block w-full bg-cyan-500 hover:bg-cyan-600 text-white text-center py-2 rounded font-semibold transition-colors"
                >
                  Sign in securely
                </Link>
              </div>

              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg mb-3">Shop deals in Fashion</h3>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Fashion" className="w-full h-20 object-cover rounded" />
                  <img src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" alt="Fashion" className="w-full h-20 object-cover rounded" />
                </div>
                <Link to="/products?category=fashion" className="text-cyan-600 hover:text-cyan-800 text-sm font-semibold transition-colors">
                  See more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features bar */}
      <div className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-6 h-6 text-cyan-600" />
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-sm text-slate-600">On orders over $25</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-6 h-6 text-emerald-600" />
              <div>
                <div className="font-semibold">Secure Shopping</div>
                <div className="text-sm text-slate-600">Your privacy protected</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Star className="w-6 h-6 text-amber-500" />
              <div>
                <div className="font-semibold">Millions of Products</div>
                <div className="text-sm text-slate-600">Fast delivery worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;