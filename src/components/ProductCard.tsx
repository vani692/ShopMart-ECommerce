import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  return (
    <div className="bg-white border border-slate-200 rounded-lg hover:shadow-lg transition-shadow duration-200 overflow-hidden group">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square bg-slate-50 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
            loading="lazy"
          />
        </div>
        
        <div className="p-4">
          {/* Badge */}
          {product.badge && (
            <div className="inline-block bg-emerald-600 text-white text-xs px-2 py-1 rounded mb-2">
              {product.badge}
            </div>
          )}

          {/* Title */}
          <h3 className="font-medium text-slate-900 text-sm mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center space-x-1 mb-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-amber-400 fill-current'
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-cyan-600 hover:text-cyan-800 transition-colors">
              ({product.reviews})
            </span>
          </div>

          {/* Price */}
          <div className="mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-slate-900">
                ${product.price}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-500 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>
            {product.originalPrice && (
              <div className="text-xs text-emerald-700">
                Save ${product.originalPrice - product.price} ({Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%)
              </div>
            )}
          </div>

          {/* Shipping */}
          <div className="text-xs text-slate-600 mb-3">
            FREE delivery by tomorrow
          </div>
        </div>
      </Link>

      {/* Add to Cart Button */}
      <div className="px-4 pb-4">
        <button
          onClick={handleAddToCart}
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-2 px-4 rounded font-semibold text-sm transition-colors flex items-center justify-center space-x-2"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;