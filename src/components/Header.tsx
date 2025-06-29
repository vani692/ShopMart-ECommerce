import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, MapPin, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { state } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-800 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Deliver to New York 10001</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <span>Customer Service</span>
            <span>Sell</span>
            <span>Registry</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center py-3 space-x-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 flex-shrink-0">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-lg text-white font-bold text-xl shadow-lg">
               ShopMart
            </div>
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-3xl">
            <div className="flex">
              <select className="bg-slate-200 text-slate-900 px-3 py-2 rounded-l border-r border-slate-300 text-sm">
                <option>All Departments</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home</option>
                <option>Health</option>
                <option>Food</option>
              </select>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search ShopMart"
                  className="w-full px-4 py-2 text-slate-900 focus:outline-none"
                />
              </div>
              <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-r transition-colors">
                <Search className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-6">
            {/* Language */}
            <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-300 transition-colors">
              <span className="text-sm">EN</span>
              <ChevronDown className="w-4 h-4" />
            </div>

            {/* Account */}
            {isAuthenticated ? (
              <div className="relative group">
                <div className="flex items-center space-x-1 cursor-pointer hover:text-cyan-300 transition-colors">
                  <div>
                    <div className="text-xs">Hello, {user?.name?.split(' ')[0]}</div>
                    <div className="text-sm font-bold flex items-center">
                      Account & Lists
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
                <div className="absolute right-0 top-full mt-1 w-64 bg-white text-slate-900 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 border-b border-slate-200">
                    <div className="font-bold">{user?.name}</div>
                    <div className="text-sm text-slate-600">{user?.email}</div>
                  </div>
                  <div className="p-2">
                    <Link to="/profile" className="block px-3 py-2 hover:bg-slate-100 rounded">Your Account</Link>
                    <Link to="/orders" className="block px-3 py-2 hover:bg-slate-100 rounded">Your Orders</Link>
                    <Link to="/wishlist" className="block px-3 py-2 hover:bg-slate-100 rounded">Your Wish List</Link>
                    <button onClick={logout} className="block w-full text-left px-3 py-2 hover:bg-slate-100 rounded">Sign Out</button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/auth" className="hover:text-cyan-300 transition-colors">
                <div className="text-xs">Hello, sign in</div>
                <div className="text-sm font-bold flex items-center">
                  Account & Lists
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </Link>
            )}

            {/* Orders */}
            <Link to="/orders" className="hover:text-cyan-300 transition-colors">
              <div className="text-xs">Returns</div>
              <div className="text-sm font-bold">& Orders</div>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="flex items-center hover:text-cyan-300 transition-colors relative">
              <div className="relative">
                <ShoppingCart className="w-8 h-8" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {state.itemCount}
                  </span>
                )}
              </div>
              <div className="ml-2">
                <div className="text-xs">Cart</div>
                <div className="text-sm font-bold">${state.total.toFixed(2)}</div>
              </div>
            </Link>

            {/* Mobile menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-6 py-2 text-sm">
            <Link to="/products" className="flex items-center space-x-1 hover:text-cyan-300 transition-colors font-bold">
              <Menu className="w-4 h-4" />
              <span>All</span>
            </Link>
            <Link to="/products?category=electronics" className="hover:text-cyan-300 transition-colors">Today's Deals</Link>
            <Link to="/products?category=electronics" className="hover:text-cyan-300 transition-colors">Electronics</Link>
            <Link to="/products?category=fashion" className="hover:text-cyan-300 transition-colors">Fashion</Link>
            <Link to="/products?category=home" className="hover:text-cyan-300 transition-colors">Home & Garden</Link>
            <Link to="/products?category=health" className="hover:text-cyan-300 transition-colors">Health & Personal Care</Link>
            <Link to="/products?category=food" className="hover:text-cyan-300 transition-colors">Grocery</Link>
            <Link to="/prime" className="hover:text-cyan-300 transition-colors">Prime</Link>
            <Link to="/gift-cards" className="hover:text-cyan-300 transition-colors">Gift Cards</Link>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <nav className="px-4 py-4 space-y-2">
            <Link to="/" className="block py-2 hover:text-cyan-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/products" className="block py-2 hover:text-cyan-300 transition-colors" onClick={() => setIsMenuOpen(false)}>All Products</Link>
            <Link to="/products?category=electronics" className="block py-2 hover:text-cyan-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Electronics</Link>
            <Link to="/products?category=fashion" className="block py-2 hover:text-cyan-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Fashion</Link>
            <Link to="/products?category=home" className="block py-2 hover:text-cyan-300 transition-colors" onClick={() => setIsMenuOpen(false)}>Home & Garden</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;