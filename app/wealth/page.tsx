"use client"
import Image from 'next/image';
import { Briefcase, TrendingUp, DollarSign, Users, Shield, Landmark, Menu, X, ChartBar, Building, BookOpen, Clock, LifeBuoy, LineChart, PieChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function WealthManagement() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('performance');
  
  // Demo performance data for interactive chart
  const performanceData = [
    { year: '2020', portfolio: 8.2, benchmark: 5.6 },
    { year: '2021', portfolio: 14.7, benchmark: 11.2 },
    { year: '2022', portfolio: -2.8, benchmark: -5.3 },
    { year: '2023', portfolio: 15.9, benchmark: 12.8 },
    { year: '2024', portfolio: 10.6, benchmark: 7.5 },
  ];
  
  // Asset allocation data for interactive pie chart
  const assetAllocation = [
    { name: 'Equities', value: 45, color: '#3B82F6' },
    { name: 'Fixed Income', value: 30, color: '#10B981' },
    { name: 'Real Estate', value: 15, color: '#F59E0B' },
    { name: 'Alternatives', value: 10, color: '#8B5CF6' },
  ];

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
              <a href="/business" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Business</a>
              <a href="/wealth" className="text-blue-600 border-b-2 border-blue-600 px-3 py-2 font-medium">Wealth</a>
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
              <a href="/wealth" className="bg-blue-50 text-blue-600 block px-3 py-2 rounded-md font-medium">Wealth</a>
              <a href="/about" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">About</a>
              <a href="#" className="bg-blue-600 text-white block px-3 py-2 rounded-md font-medium">Sign In</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative h-[600px] lg:h-[700px]">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/menteam.jpg"
            alt="Professional financial advisor consulting with clients"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/70 z-10" />

        {/* Text content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-lg"
            >
              <span className="block text-blue-200 text-lg font-medium mb-2">Wealth Management</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Your legacy, expertly managed
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Personalized wealth strategies designed to protect and grow your assets across generations with a team of dedicated advisors.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 shadow-lg transition-all duration-300"
                >
                  Schedule Consultation
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="px-6 py-3 border border-blue-200 text-base font-medium rounded-md text-blue-100 hover:bg-blue-800/30 md:py-4 md:text-lg md:px-8 transition-all duration-300"
                >
                  Explore Solutions
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Client Journey Section with Parallax Effect */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Your Journey</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              A personalized approach to wealth
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              We believe in a carefully crafted financial journey that evolves with your life&apos;s changing priorities.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-100"></div>

            {/* Journey Steps */}
            <div className="space-y-20 relative">
              {/* Step 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:grid lg:grid-cols-2 lg:gap-8 items-center"
              >
                <div className="lg:text-right">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Discovery & Assessment</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    We begin by understanding your financial goals, risk tolerance, time horizon, and unique circumstances through comprehensive discussions and analysis.
                  </p>
                  <div className="mt-6">
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-500 flex items-center lg:justify-end">
                      Learn about our process <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:pl-10">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/wealth-discovery.jpg"
                      alt="Financial advisor meeting with clients"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:grid lg:grid-cols-2 lg:gap-8 items-center"
              >
                <div className="order-last lg:order-first lg:pr-10">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/wealth-strategy.jpg"
                      alt="Financial strategy planning session"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <ChartBar className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Strategy Development</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    Our team of experts crafts a comprehensive wealth strategy aligned with your goals, incorporating investment management, tax planning, and estate considerations.
                  </p>
                  <div className="mt-6">
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-500 flex items-center">
                      Explore our strategies <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:grid lg:grid-cols-2 lg:gap-8 items-center"
              >
                <div className="lg:text-right">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <TrendingUp className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Implementation & Management</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    We execute your personalized strategy with precision, continuously monitoring performance and making tactical adjustments as market conditions evolve.
                  </p>
                  <div className="mt-6">
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-500 flex items-center lg:justify-end">
                      See our approach <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 lg:pl-10">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/wealth-implementation.jpg"
                      alt="Portfolio management dashboard"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Step 4 */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:grid lg:grid-cols-2 lg:gap-8 items-center"
              >
                <div className="order-last lg:order-first lg:pr-10">
                  <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src="/images/wealth-review.jpg"
                      alt="Client review meeting"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Ongoing Review & Evolution</h3>
                  <p className="mt-3 text-lg text-gray-500">
                    Life changes, and so should your financial strategy. We conduct regular reviews to ensure alignment with your evolving goals and adapt to new opportunities.
                  </p>
                  <div className="mt-6">
                    <a href="#" className="text-blue-600 font-medium hover:text-blue-500 flex items-center">
                      Our commitment <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Wealth Solutions */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Wealth Solutions</h2>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive wealth management tailored to your needs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our suite of wealth solutions addresses every aspect of your financial life with sophisticated strategies and personalized service.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <Briefcase className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Investment Management</h3>
                <p className="text-gray-600 mb-5">
                  Our disciplined investment approach is designed to build and preserve wealth through diversified portfolios tailored to your risk profile and financial goals.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Customized portfolio construction</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Active & passive strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">ESG & impact investing options</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn more <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                y: -10, 
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <BookOpen className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Estate Planning</h3>
                <p className="text-gray-600 mb-5">
                  Preserve your legacy and ensure your assets are distributed according to your wishes with comprehensive estate planning strategies.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Trust formation & administration</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Wealth transfer strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Philanthropic planning</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn more <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tax Strategy & Planning</h3>
                <p className="text-gray-600 mb-5">
                  Optimize your tax position and minimize liabilities through sophisticated tax planning integrated with your overall wealth strategy.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Tax-efficient investing</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Income & capital gains planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Estate tax minimization</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn more <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Private Banking</h3>
                <p className="text-gray-600 mb-5">
                  Exclusive banking services tailored to high-net-worth individuals, providing personalized solutions and premium benefits.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Dedicated private banker</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Specialized lending solutions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Concierge banking services</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn more <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Risk Management</h3>
                <p className="text-gray-600 mb-5">
                  Protect your wealth and secure your family&apos;s future with comprehensive risk management and insurance solutions.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Life insurance strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Asset protection planning</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Liability coverage assessment</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn more <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100"
            >
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-5">
                  <LifeBuoy className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retirement Planning</h3>
                <p className="text-gray-600 mb-5">
                  Create a roadmap for financial independence with customized retirement planning that ensures your lifestyle is preserved.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Income distribution strategies</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Tax-efficient withdrawals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-blue-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="ml-2 text-gray-600">Long-term care considerations</span>
                  </li>
                </ul>
                <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                  Learn more <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Interactive Wealth Portal Section */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">Digital Experience</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Your wealth at your fingertips
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Our state-of-the-art wealth portal provides real-time insights into your portfolio performance, comprehensive reporting, and secure communication with your advisory team.
              </p>

              {/* Tabs */}
              <div className="mt-8">
                <div className="border-b border-gray-200">
                  <nav className="flex space-x-8">
                    <button
                      onClick={() => setActiveTab('performance')}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'performance'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Performance Tracking
                    </button>
                    <button
                      onClick={() => setActiveTab('allocation')}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'allocation'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Asset Allocation
                    </button>
                    <button
                      onClick={() => setActiveTab('documents')}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === 'documents'
                          ? 'border-blue-500 text-blue-600'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Documents & Reports
                    </button>
                  </nav>
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                  {activeTab === 'performance' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Track Your Investments</h3>
                      <p className="text-gray-600 mb-4">
                        Monitor performance against benchmarks, analyze returns by time period, and visualize growth trends with intuitive charts and dashboards.
                      </p>
                      <div className="flex flex-wrap space-x-4">
                        <div className="flex items-center text-sm mt-2">
                          <span className="h-4 w-4 bg-blue-600 rounded-full mr-2"></span>
                          <span className="text-gray-700">Your Portfolio</span>
                        </div>
                        <div className="flex items-center text-sm mt-2">
                          <span className="h-4 w-4 bg-gray-400 rounded-full mr-2"></span>
                          <span className="text-gray-700">Benchmark</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'allocation' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Asset Allocation Visualization</h3>
                      <p className="text-gray-600 mb-4">
                        View your current asset allocation across major investment categories, track portfolio diversification, and see detailed breakdowns by asset class.
                      </p>
                      <div className="flex flex-wrap space-x-2 mt-4">
                        {assetAllocation.map((asset) => (
                          <div key={asset.name} className="flex items-center text-sm mt-2 mr-4">
                            <span 
                              className="h-4 w-4 rounded-full mr-2" 
                              style={{ backgroundColor: asset.color }}
                            ></span>
                            <span className="text-gray-700">{asset.name}: {asset.value}%</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {activeTab === 'documents' && (
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Secure Document Center</h3>
                      <p className="text-gray-600 mb-4">
                        Access your statements, tax documents, investment reports, and financial plans in one secure location with end-to-end encryption.
                      </p>
                      <ul className="mt-4 space-y-3">
                        <li className="flex items-center text-gray-700">
                          <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Quarterly Performance Reports
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Tax Statements
                        </li>
                        <li className="flex items-center text-gray-700">
                          <svg className="h-5 w-5 text-blue-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Financial Plans & Projections
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Take a Tour
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden shadow-xl"
              >
                {activeTab === 'performance' && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Portfolio Performance</h4>
                    <div className="h-64 w-full">
                      {/* Placeholder for performance chart */}
                      <div className="h-full w-full bg-gray-100 rounded-lg relative">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <LineChart className="h-12 w-12 text-blue-400 opacity-50" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 h-2/3">
                          {/* Simple chart visualization */}
                          <div className="flex h-full items-end space-x-8 px-8">
                            {performanceData.map((data, index) => (
                              <div key={index} className="flex-1 flex items-end space-x-1 h-full">
                                <div 
                                  className="w-3 bg-blue-500 rounded-t" 
                                  style={{ height: `${data.portfolio * 3}%` }}
                                ></div>
                                <div 
                                  className="w-3 bg-gray-400 rounded-t" 
                                  style={{ height: `${data.benchmark * 3}%` }}
                                ></div>
                              </div>
                            ))}
                          </div>
                          <div className="flex justify-between px-4 mt-4">
                            {performanceData.map((data, index) => (
                              <div key={index} className="text-xs text-gray-500">{data.year}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-gray-500">
                      <p className="mb-2">5-year historical performance (%) vs. benchmark</p>
                    </div>
                  </div>
                )}

                {activeTab === 'allocation' && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Current Asset Allocation</h4>
                    <div className="h-64 w-full">
                      {/* Placeholder for allocation pie chart */}
                      <div className="h-full w-full rounded-lg relative flex items-center justify-center">
                        <PieChart className="h-12 w-12 text-blue-400 opacity-50 absolute" />
                        <div className="h-56 w-56 rounded-full border-8 border-blue-500 relative">
                          <div className="absolute h-56 w-56 rounded-full overflow-hidden">
                            {/* Simplified pie chart visualization */}
                            <div 
                              className="absolute bg-blue-500" 
                              style={{
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 50% 100%)'
                              }}
                            ></div>
                            <div 
                              className="absolute bg-green-500" 
                              style={{
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                clipPath: 'polygon(50% 50%, 50% 0%, 0% 0%, 0% 50%)'
                              }}
                            ></div>
                            <div 
                              className="absolute bg-yellow-500" 
                              style={{
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                clipPath: 'polygon(50% 50%, 0% 50%, 0% 80%)'
                              }}
                            ></div>
                            <div 
                              className="absolute bg-purple-500" 
                              style={{
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                clipPath: 'polygon(50% 50%, 0% 80%, 0% 100%, 50% 100%)'
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'documents' && (
                  <div className="bg-white p-6 rounded-xl border border-gray-200">
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Recent Documents</h4>
                    <div className="space-y-4">
                      <div className="p-4 border border-gray-200 rounded-lg flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="ml-4 flex-1">
                          <h5 className="text-sm font-medium text-gray-900">Q1 2025 Portfolio Review</h5>
                          <p className="text-xs text-gray-500">PDF · Apr 15, 2025</p>
                        </div>
                        <button className="ml-4 flex-shrink-0 text-blue-600 hover:text-blue-500">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-lg flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="ml-4 flex-1">
                          <h5 className="text-sm font-medium text-gray-900">2024 Tax Statement</h5>
                          <p className="text-xs text-gray-500">PDF · Feb 10, 2025</p>
                        </div>
                        <button className="ml-4 flex-shrink-0 text-blue-600 hover:text-blue-500">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>

                      <div className="p-4 border border-gray-200 rounded-lg flex items-center">
                        <div className="h-10 w-10 flex-shrink-0 bg-blue-100 rounded-lg flex items-center justify-center">
                          <svg className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="ml-4 flex-1">
                          <h5 className="text-sm font-medium text-gray-900">Estate Plan Summary</h5>
                          <p className="text-xs text-gray-500">PDF · Mar 22, 2025</p>
                        </div>
                        <button className="ml-4 flex-shrink-0 text-blue-600 hover:text-blue-500">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </div>


{/* Advisory Team Section */}
<div className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:text-center mb-16">
      <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Expertise</h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Meet your dedicated advisory team
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
        Our wealth management experts bring decades of experience and a personalized approach to every relationship.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {[
        {
          name: "Sarah Johnson",
          title: "Senior Wealth Advisor",
          image: "/images/advisor-1.jpg",
          bio: "Over 20 years of experience in investment management and financial planning for high-net-worth clients.",
        },
        {
          name: "Michael Rodriguez",
          title: "Chief Investment Officer",
          image: "/images/advisor-2.jpg",
          bio: "Former Wall Street analyst with expertise in global markets, alternative investments, and portfolio construction.",
        },
        {
          name: "Emily Chen",
          title: "Financial Planner",
          image: "/images/advisor-3.jpg",
          bio: "Certified Financial Planner with a passion for helping clients reach long-term financial goals with smart strategies.",
        },
        {
          name: "James Osei",
          title: "Client Relationship Manager",
          image: "/images/advisor-4.jpg",
          bio: "Dedicated to delivering personalized service and building lasting relationships with our valued clients.",
        },
      ].map((advisor, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white rounded-xl overflow-hidden shadow-md"
        >
          <div className="aspect-w-3 aspect-h-4">
            <Image
              src={advisor.image}
              alt={advisor.title}
              width={300}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="px-6 py-8">
            <h3 className="text-lg font-medium text-gray-900">{advisor.name}</h3>
            <p className="text-sm text-blue-600 mt-1">{advisor.title}</p>
            <p className="mt-4 text-base text-gray-500">{advisor.bio}</p>
            <div className="mt-6 flex space-x-3">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Email</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>


</div>
  )
}