import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Back to top */}
      <div className="bg-slate-700 hover:bg-slate-600 transition-colors">
        <button
          onClick={scrollToTop}
          className="w-full py-4 text-center text-sm font-semibold flex items-center justify-center space-x-2"
        >
          <span>Back to top</span>
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Get to Know Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-cyan-300">Get to Know Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-cyan-300 transition-colors">About ShopMart</Link></li>
              <li><Link to="/careers" className="hover:text-cyan-300 transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-cyan-300 transition-colors">Press Releases</Link></li>
              <li><Link to="/investor" className="hover:text-cyan-300 transition-colors">Investor Relations</Link></li>
              <li><Link to="/devices" className="hover:text-cyan-300 transition-colors">ShopMart Devices</Link></li>
            </ul>
          </div>

          {/* Make Money with Us */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-emerald-300">Make Money with Us</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sell" className="hover:text-emerald-300 transition-colors">Sell products on ShopMart</Link></li>
              <li><Link to="/business" className="hover:text-emerald-300 transition-colors">Sell on ShopMart Business</Link></li>
              <li><Link to="/apps" className="hover:text-emerald-300 transition-colors">Sell apps on ShopMart</Link></li>
              <li><Link to="/affiliate" className="hover:text-emerald-300 transition-colors">Become an Affiliate</Link></li>
              <li><Link to="/advertise" className="hover:text-emerald-300 transition-colors">Advertise Your Products</Link></li>
            </ul>
          </div>

          {/* ShopMart Payment Products */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-violet-300">ShopMart Payment Products</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/business-card" className="hover:text-violet-300 transition-colors">ShopMart Business Card</Link></li>
              <li><Link to="/rewards" className="hover:text-violet-300 transition-colors">Shop with Points</Link></li>
              <li><Link to="/reload" className="hover:text-violet-300 transition-colors">Reload Your Balance</Link></li>
              <li><Link to="/currency" className="hover:text-violet-300 transition-colors">ShopMart Currency Converter</Link></li>
            </ul>
          </div>

          {/* Let Us Help You */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-rose-300">Let Us Help You</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/account" className="hover:text-rose-300 transition-colors">Your Account</Link></li>
              <li><Link to="/orders" className="hover:text-rose-300 transition-colors">Your Orders</Link></li>
              <li><Link to="/shipping" className="hover:text-rose-300 transition-colors">Shipping Rates & Policies</Link></li>
              <li><Link to="/returns" className="hover:text-rose-300 transition-colors">Returns & Replacements</Link></li>
              <li><Link to="/help" className="hover:text-rose-300 transition-colors">Help</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg text-white font-bold text-xl">
                ShopMart
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <select className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-white">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                </select>
                <select className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-white">
                  <option>$ USD</option>
                  <option>€ EUR</option>
                  <option>£ GBP</option>
                </select>
                <select className="bg-slate-800 border border-slate-600 rounded px-2 py-1 text-white">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </div>
          </div>

          {/* Copyright and links */}
          <div className="mt-8 pt-8 border-t border-slate-700 text-center">
            <div className="flex flex-wrap justify-center space-x-6 text-xs text-slate-400 mb-4">
              <Link to="/conditions" className="hover:text-slate-300 transition-colors">Conditions of Use</Link>
              <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Notice</Link>
              <Link to="/interest-ads" className="hover:text-slate-300 transition-colors">Interest-Based Ads</Link>
            </div>
            <p className="text-xs text-slate-400">
              © 2025 ShopMart.com, Inc. or its affiliates
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;