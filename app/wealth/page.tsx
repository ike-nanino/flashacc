'use client'
import Image from 'next/image';
import { PieChart, Target, Clock, Landmark, Menu, X, } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

 function WealthManagement() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
       
       
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




      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/20 z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/images/menteam.jpg"
            alt="Financial advisor with client"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="relative z-20 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-lg">
              <span className="block text-blue-200 text-lg font-medium mb-2">Wealth Management</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Build and preserve your wealth
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Our expert advisors create personalized strategies to help you achieve your financial goals and secure your legacy.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 shadow-lg"
                >
                  Start Investing
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-blue-200 text-base font-medium rounded-md text-blue-100 hover:bg-blue-800/30 md:py-4 md:text-lg md:px-8"
                >
                  Meet Our Advisors
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Services */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Investment Services</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Comprehensive wealth solutions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our team of experienced professionals develops personalized strategies that align with your goals and risk tolerance.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <PieChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Portfolio Management</h3>
              <p className="text-gray-600 mb-4">
                Our expert portfolio managers create diversified investment strategies tailored to your financial goals and risk tolerance.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Personalized investment strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Diversified asset allocation</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Regular portfolio rebalancing</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <Clock className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retirement Planning</h3>
              <p className="text-gray-600 mb-4">
                Plan for the retirement you deserve with strategies designed to grow and protect your wealth for the long term.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">401(k) and IRA strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Income distribution planning</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Social Security optimization</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Planning</h3>
              <p className="text-gray-600 mb-4">
                Preserve your legacy and ensure your wealth is transferred according to your wishes with comprehensive estate planning.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Trust creation and management</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Wealth transfer strategies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-500">Tax-efficient distribution planning</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Investment Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Approach</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A disciplined investment process
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We follow a systematic approach to help you build, preserve, and transfer your wealth effectively.
            </p>
          </div>

          <div className="mt-16">
            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-12 top-0 h-full w-0.5 bg-blue-200 hidden md:block"></div>
              
              <div className="space-y-16">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center z-10 relative">
                        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">1</div>
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
                      <p className="mt-2 text-lg text-gray-500">
                        We begin by understanding your financial situation, goals, risk tolerance, and time horizon. This forms the foundation of your personalized wealth strategy.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center z-10 relative">
                        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">2</div>
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900">Strategy Development</h3>
                      <p className="mt-2 text-lg text-gray-500">
                        Our team develops a comprehensive wealth strategy tailored to your specific needs, incorporating investment, tax, and estate planning considerations.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center z-10 relative">
                        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">3</div>
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900">Implementation</h3>
                      <p className="mt-2 text-lg text-gray-500">
                        We execute your wealth strategy with precision, selecting appropriate investment vehicles and asset allocations to optimize your portfolio.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 relative">
                      <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center z-10 relative">
                        <div className="h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-2xl">4</div>
                      </div>
                    </div>
                    <div className="ml-8">
                      <h3 className="text-xl font-bold text-gray-900">Monitoring & Adjustment</h3>
                      <p className="mt-2 text-lg text-gray-500">
                        We continuously monitor your portfolio&apos;s performance and make adjustments as needed to keep you on track toward your financial goals.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to build your financial future?</span>
            <span className="block text-blue-200">Schedule a consultation with our wealth advisors.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Get Started
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              >
                Meet Our Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WealthManagement