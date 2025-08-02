import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Package, ArrowRight, Home } from 'lucide-react';

export default function OrderSuccess() {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          {/* Success Icon */}
          <div className="mb-6">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Order Successful!</h1>
            <p className="text-gray-600">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Package className="h-5 w-5 text-blue-600" />
              <span className="font-medium text-gray-900">Order Number</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-4">#{orderNumber}</p>
            <p className="text-sm text-gray-600">
              You will receive an email confirmation shortly with tracking details.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              to="/products"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg flex items-center justify-center space-x-2"
            >
              <span>Continue Shopping</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            <Link
              to="/"
              className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <Home className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="font-semibold text-gray-900 mb-3">What's Next?</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Order confirmation email sent
              </p>
              <p className="flex items-center">
                <Package className="h-4 w-4 text-blue-500 mr-2" />
                Processing within 24 hours
              </p>
              <p className="flex items-center">
                <ArrowRight className="h-4 w-4 text-orange-500 mr-2" />
                Shipping notification with tracking
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}