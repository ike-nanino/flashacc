'use client'

import { useState } from 'react';

import {
 Landmark, Menu, X,
} from 'lucide-react';

function HomeNav() {
     const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-20">
                <div className="flex items-center">
                  <div className="flex-shrink-0 flex items-center">
                    <div className="h-10 w-10 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Landmark className="h-6 w-6 text-white" />
                    </div>
                    <span className="ml-3 text-xl font-bold text-gray-900">NexusBank</span>
                  </div>
                </div>
    
                {/* Desktop menu */}
                <div className="hidden md:flex items-center space-x-8">
                  <a href="/personal" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Personal</a>
                  <a href="business" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Business</a>
                  <a href="/wealth" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Wealth</a>
                  <a href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">About</a>
                  <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300">Sign In</a>
                </div>
    
                {/* Mobile menu button */}
                <div className="md:hidden flex items-center">
                  <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-gray-900 hover:text-blue-600 focus:outline-none"
                  >
                    {mobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </button>
                </div>
              </div>
            </div>
    
            {/* Mobile menu */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-gray-200">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <a href="/personal" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Personal</a>
                  <a href="/business" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Business</a>
                  <a href="/wealth" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Wealth</a>
                  <a href="/about" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">About</a>
                  <a href="#" className="bg-blue-600 text-white block px-3 py-2 rounded-md font-medium">Sign In</a>
                </div>
              </div>
            )}
          </nav>
  )
}

export default HomeNav