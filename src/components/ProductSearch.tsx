import { useRef, useEffect } from 'react';
import { useAppState } from '../context/CartContext';
import type { Product } from '../types';

// Mock data for favorite products. In a real app, you'd fetch this.
const favoriteProducts: Product[] = [
  { id: 'prod-1', sku: '12345', name: 'Espresso', price: 2.5 },
  { id: 'prod-2', sku: '67890', name: 'Latte', price: 3.5 },
  { id: 'prod-3', sku: '11223', name: 'Croissant', price: 2.75 },
  { id: 'prod-4', sku: '44556', name: 'Muffin', price: 3.0 },
];

export const ProductSearch = () => {
  const { dispatch } = useAppState();
  const barcodeInputRef = useRef<HTMLInputElement>(null);

  // Automatically focus the input field when the component loads
  useEffect(() => {
    barcodeInputRef.current?.focus();
  }, []);

  const handleAddToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      {/* Barcode/SKU Input */}
      <input
        ref={barcodeInputRef}
        type="text"
        placeholder="Scan Barcode or Enter SKU..."
        className="w-full p-4 text-lg border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Quick Favorites Grid */}
      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-600 mb-4">
          Quick Favorites
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favoriteProducts.map((product) => (
            <button
              key={product.id}
              onClick={() => handleAddToCart(product)}
              className="flex flex-col items-center justify-center p-4 h-32 text-center bg-gray-50 border-2 border-gray-200 rounded-lg hover:bg-blue-100 hover:border-blue-400 transition-colors"
            >
              <span className="text-lg font-semibold text-gray-800">
                {product.name}
              </span>
              <span className="text-gray-500">${product.price.toFixed(2)}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
