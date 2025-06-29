import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, ShoppingCart, Heart, Truck, Shield, RefreshCw, ChevronDown } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Product not found</h2>
          <Link to="/products" className="text-cyan-600 hover:text-cyan-800 font-semibold transition-colors">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  const images = product.images || [product.image];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-slate-600 mb-6">
          <Link to="/" className="hover:text-cyan-600 transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-cyan-600 transition-colors">Products</Link>
          <span>/</span>
          <span className="text-slate-900">{product.category}</span>
          <span>/</span>
          <span className="text-slate-900 font-semibold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square bg-white rounded-lg border border-slate-200 overflow-hidden">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="flex space-x-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-16 rounded border-2 overflow-hidden transition-colors ${
                      selectedImage === index
                        ? 'border-cyan-500'
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Badge */}
            <div>
              {product.badge && (
                <div className="inline-block bg-emerald-600 text-white text-xs px-2 py-1 rounded mb-2">
                  {product.badge}
                </div>
              )}
              <h1 className="text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <p className="text-cyan-600 hover:text-cyan-800 cursor-pointer transition-colors">
                Visit the {product.category} Store
              </p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? 'text-amber-400 fill-current'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-cyan-600 hover:text-cyan-800 cursor-pointer transition-colors">
                {product.reviews} ratings
              </span>
            </div>

            {/* Price */}
            <div className="border-t border-slate-200 pt-6">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-emerald-600">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg text-slate-500 line-through">
                      ${product.originalPrice}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded text-sm font-semibold">
                      Save ${product.originalPrice - product.price}
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-slate-600 mt-1">
                FREE Returns & FREE Delivery
              </p>
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-lg mb-2">About this item</h3>
              <p className="text-slate-700 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            {product.features && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Key Features</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="border border-slate-200 rounded-lg p-6 bg-white">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-semibold">Quantity:</span>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="border border-slate-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-4 rounded-lg font-semibold text-lg transition-colors">
                  Buy Now
                </button>

                <div className="flex items-center justify-center space-x-4 text-sm">
                  <button className="flex items-center space-x-1 text-cyan-600 hover:text-cyan-800 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Add to Wish List</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Truck className="w-5 h-5 text-emerald-600" />
                <span className="text-sm">FREE delivery by tomorrow</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-cyan-600" />
                <span className="text-sm">Secure transaction</span>
              </div>
              <div className="flex items-center space-x-3">
                <RefreshCw className="w-5 h-5 text-violet-600" />
                <span className="text-sm">Easy returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-12">
          <Link
            to="/products"
            className="inline-flex items-center text-cyan-600 hover:text-cyan-800 font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;