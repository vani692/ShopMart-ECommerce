import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingCart, ArrowLeft, Truck, Shield } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, removeFromCart, updateQuantity } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <ShoppingCart className="w-24 h-24 text-slate-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
          <p className="text-slate-600 mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded font-semibold transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Shopping Cart</h1>
          <p className="text-slate-600">
            {state.itemCount} {state.itemCount === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
                <div className="flex items-start space-x-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/product/${item.id}`}
                      className="font-semibold text-slate-900 hover:text-cyan-600 text-lg transition-colors"
                    >
                      {item.name}
                    </Link>
                    <p className="text-sm text-slate-600 mt-1">{item.category}</p>
                    <p className="text-emerald-600 text-sm mt-1">In Stock</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Eligible for FREE Shipping
                    </p>
                    
                    <div className="flex items-center space-x-4 mt-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-slate-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-slate-100 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 border-x border-slate-300 min-w-[60px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-slate-100 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-cyan-600 hover:text-cyan-800 text-sm font-semibold transition-colors"
                      >
                        Delete
                      </button>

                      {/* Save for Later */}
                      <button className="text-cyan-600 hover:text-cyan-800 text-sm font-semibold transition-colors">
                        Save for later
                      </button>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-right">
                    <div className="text-xl font-bold text-slate-900">
                      ${item.price}
                    </div>
                    {item.originalPrice && (
                      <div className="text-sm text-slate-500 line-through">
                        ${item.originalPrice}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                to="/products"
                className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 sticky top-6">
              <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal ({state.itemCount} items)</span>
                  <span className="font-semibold">${state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Shipping</span>
                  <span className="font-semibold text-emerald-600">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Tax</span>
                  <span className="font-semibold">${(state.total * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-xl font-bold text-slate-900">Total</span>
                    <span className="text-xl font-bold text-emerald-600">
                      ${(state.total * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded font-semibold text-lg transition-colors mb-4">
                Proceed to Checkout
              </button>

              <div className="text-center text-sm text-slate-600 mb-4">
                <Shield className="w-4 h-4 inline mr-1" />
                Secure checkout with SSL encryption
              </div>

              {/* Prime Benefits */}
              <div className="border-t border-slate-200 pt-4">
                <div className="flex items-center space-x-2 text-sm text-cyan-600 mb-2">
                  <Truck className="w-4 h-4" />
                  <span>FREE One-Day Delivery</span>
                </div>
                <p className="text-xs text-slate-600">
                  Join Prime for fast, free delivery on millions of items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;