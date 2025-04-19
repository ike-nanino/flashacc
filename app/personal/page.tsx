"use client"
import Image from 'next/image';
import {
  Shield, CreditCard, PiggyBank, Gift, Landmark, Menu, X,
  ChevronRight, Smartphone, Clock, Wallet, ChartBar, MessageCircle, Award, Users, Lock,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

function Personal() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('checking');

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

        {/* Mobile menu - now inside the nav element for sticky behavior */}
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

      {/* Enhanced Hero Section with more prominent text */}
      <div className="relative h-[600px] lg:h-[700px]">
  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src="/images/menteam.jpg"
      alt="Person using mobile banking app"
      fill
      priority
      style={{ objectFit: 'cover' }}
    />
  </div>

  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black-900/70 z-10" />

  {/* Text content */}
  <div className="absolute inset-0 z-20 flex items-center">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg"
      >
        <span className="block text-blue-200 text-lg font-medium mb-2">Personal Banking</span>
        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          Banking that revolves around you
        </h1>
        <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
          Discover financial solutions designed for your unique lifestyle and goals, with the convenience of modern digital banking.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 shadow-lg transition-all duration-300"
          >
            Open Account
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="px-6 py-3 border border-blue-200 text-base font-medium rounded-md text-blue-100 hover:bg-blue-800/30 md:py-4 md:text-lg md:px-8 transition-all duration-300"
          >
            Compare Accounts
          </motion.a>
        </div>
      </motion.div>
    </div>
  </div>
</div>

      {/* Trust Badges Section */}
      <div className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">FDIC Insured</h3>
              <p className="mt-1 text-sm text-gray-500">Deposits insured up to $250,000</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <Lock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Bank-Level Security</h3>
              <p className="mt-1 text-sm text-gray-500">256-bit encryption protection</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Award Winning</h3>
              <p className="mt-1 text-sm text-gray-500">Best Digital Banking Experience 2025</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-3">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">5M+ Customers</h3>
              <p className="mt-1 text-sm text-gray-500">Trusted by millions nationwide</p>
            </div>
          </div>
        </div>
      </div>

      {/* Account Types with Interactive Tabs */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Account Options</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Banking tailored to your needs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Choose from our range of personal accounts designed to fit your lifestyle and financial goals.
            </p>
          </div>

          {/* Account Tabs Navigation */}
          <div className="mt-12 border-b border-gray-200">
            <div className="max-w-3xl mx-auto">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => setActiveTab('checking')}
                  className={`${activeTab === 'checking'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                >
                  Checking
                </button>
                <button
                  onClick={() => setActiveTab('savings')}
                  className={`${activeTab === 'savings'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                >
                  Savings
                </button>
                <button
                  onClick={() => setActiveTab('premium')}
                  className={`${activeTab === 'premium'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                >
                  Premium
                </button>
                <button
                  onClick={() => setActiveTab('student')}
                  className={`${activeTab === 'student'
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg`}
                >
                  Student
                </button>
              </nav>
            </div>
          </div>

          {/* Account Tab Content */}
          <div className="mt-12">
            {activeTab === 'checking' && (
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Everyday Checking</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our most popular account for daily banking needs with no minimum balance requirement and free online and mobile banking.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">No Monthly Fee</h4>
                        <p className="mt-1 text-gray-500">Maintain a $1,500 daily balance or set up a monthly direct deposit</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Free Debit Card</h4>
                        <p className="mt-1 text-gray-500">Contactless debit card with purchase rewards and cash back</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Overdraft Protection</h4>
                        <p className="mt-1 text-gray-500">Link to your savings account or line of credit for peace of mind</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Open Checking Account
                    </a>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">NexusBank</span>
                        <h4 className="text-xl font-bold text-gray-900 mt-1">Everyday Checking</h4>
                      </div>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                        <CreditCard className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Monthly Fee</span>
                        <span className="font-medium text-gray-900">$0*</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Minimum Opening</span>
                        <span className="font-medium text-gray-900">$25</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">ATM Fee</span>
                        <span className="font-medium text-gray-900">$0 in-network</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Online/Mobile Banking</span>
                        <span className="font-medium text-gray-900">Included</span>
                      </div>
                    </div>
                    <div className="bg-blue-600 rounded-lg p-4 text-white">
                      <p className="font-medium">Current Offer:</p>
                      <p className="text-lg font-bold">$250 welcome bonus</p>
                      <p className="text-sm mt-1 text-blue-100">When you open a new account with direct deposit</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'savings' && (
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">High-Yield Savings</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our competitive savings account helps your money grow faster with one of the highest APYs in the industry.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">4.50% APY</h4>
                        <p className="mt-1 text-gray-500">One of the highest rates available nationwide with no promotional periods</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">No Monthly Fees</h4>
                        <p className="mt-1 text-gray-500">No minimum balance requirements or monthly maintenance fees</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Goal-Based Savings</h4>
                        <p className="mt-1 text-gray-500">Create separate savings buckets for different financial goals</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Open Savings Account
                    </a>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-8 shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600">NexusBank</span>
                        <h4 className="text-xl font-bold text-gray-900 mt-1">High-Yield Savings</h4>
                      </div>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white">
                        <PiggyBank className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="mb-6">
                      <div className="flex flex-col items-center justify-center py-4">
                        <span className="text-sm text-gray-500">Annual Percentage Yield</span>
                        <span className="text-5xl font-bold text-emerald-600 mt-1">4.50%</span>
                        <span className="text-xs text-gray-500 mt-1">Rates as of April 19, 2025</span>
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Minimum Opening</span>
                        <span className="font-medium text-gray-900">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Monthly Fee</span>
                        <span className="font-medium text-gray-900">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Interest Compounding</span>
                        <span className="font-medium text-gray-900">Daily</span>
                      </div>
                    </div>
                    <div className="bg-emerald-600 rounded-lg p-4 text-white">
                      <p className="font-medium">Current Offer:</p>
                      <p className="text-lg font-bold">$100 welcome bonus</p>
                      <p className="text-sm mt-1 text-emerald-100">When you maintain $10,000 for 90 days</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'premium' && (
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Banking Package</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    An exclusive banking experience with premium benefits, dedicated support, and exclusive lifestyle perks.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Personal Relationship Manager</h4>
                        <p className="mt-1 text-gray-500">Direct access to a dedicated financial advisor for personalized service</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Premium Travel Benefits</h4>
                        <p className="mt-1 text-gray-500">Airport lounge access, travel insurance, and concierge services</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Preferred Rates</h4>
                        <p className="mt-1 text-gray-500">Higher savings rates and discounted loan rates for premium members</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Apply for Premium
                    </a>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-purple-600">NexusBank</span>
                        <h4 className="text-xl font-bold text-gray-900 mt-1">Premium Package</h4>
                      </div>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                        <Gift className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Monthly Fee</span>
                        <span className="font-medium text-gray-900">$35 (waivable)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Fee Waiver</span>
                        <span className="font-medium text-gray-900">$25,000 combined balance</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">ATM Fees</span>
                        <span className="font-medium text-gray-900">All refunded worldwide</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Exclusive Events</span>
                        <span className="font-medium text-gray-900">Included</span>
                      </div>
                    </div>
                    <div className="bg-purple-600 rounded-lg p-4 text-white">
                      <p className="font-medium">Premium Card:</p>
                      <p className="text-lg font-bold">Metal Visa Signature</p>
                      <p className="text-sm mt-1 text-purple-100">With 3x points on travel and dining</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'student' && (
              <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Student Banking</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Banking designed for students with no fees, educational resources, and tools to build financial literacy.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Zero Monthly Fees</h4>
                        <p className="mt-1 text-gray-500">No monthly maintenance fees or minimum balance requirements for students</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Fee Forgiveness</h4>
                        <p className="mt-1 text-gray-500">First two overdraft fees forgiven per year while you learn to manage finances</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <ChevronRight className="h-5 w-5 text-blue-500" />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-lg font-medium text-gray-900">Financial Education</h4>
                        <p className="mt-1 text-gray-500">Access to financial literacy courses and budget planning tools</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8">
                    <a
                      href="#"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                    >
                      Open Student Account
                    </a>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0">
                  <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-xl p-8 shadow-lg">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600">NexusBank</span>
                        <h4 className="text-xl font-bold text-gray-900 mt-1">Student Banking</h4>
                      </div>
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-cyan-600 text-white">
                        <Users className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Eligibility</span>
                        <span className="font-medium text-gray-900">Age 16-24 with studentID</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Monthly Fee</span>
                        <span className="font-medium text-gray-900">$0</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Minimum Opening</span>
                        <span className="font-medium text-gray-900">$10</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Mobile Banking</span>
                        <span className="font-medium text-gray-900">Free with budgeting tools</span>
                      </div>
                    </div>
                    <div className="bg-cyan-600 rounded-lg p-4 text-white">
                      <p className="font-medium">Student Offer:</p>
                      <p className="text-lg font-bold">$50 welcome bonus</p>
                      <p className="text-sm mt-1 text-cyan-100">Plus free custom card design</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Digital Banking Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Digital Experience</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Banking that fits your lifestyle
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Manage your money anytime, anywhere with our award-winning digital banking platform.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="relative lg:h-[500px] overflow-hidden rounded-2xl shadow-xl"
              >
                <Image
                  src="/images/financial-app.jpg"
                  alt="Mobile banking app interface"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">4.9</div>
                <div className="text-sm">App Store Rating</div>
              </div>
            </div>

            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Smartphone className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Mobile Banking App</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Our intuitive mobile app gives you full control of your finances with real-time notifications, mobile check deposit, and biometric security. Set spending limits, freeze cards instantly, and manage your investments all from one place.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <ChartBar className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Financial Insights</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Get personalized insights into your spending patterns with AI-powered analytics. Set and track budget goals, identify saving opportunities, and receive custom recommendations based on your financial behavior.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    <Wallet className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900">Digital Wallet Integration</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Connect your accounts to Apple Pay, Google Pay, and other digital wallets for seamless payments. Send money to friends or split bills instantly with Zelle® integration and contactless payment options.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Customer Stories</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What our customers are saying
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden">
                  <Image src="/api/placeholder/100/100" alt="Customer portrait" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Sarah L.</h4>
                  <p className="text-sm text-gray-500">Small Business Owner</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;NexusBank&apos;s mobile app completely changed how I manage my business finances. I can deposit checks, transfer money, and pay bills while on the go, saving me hours each week.&quot;</p>
              <div className="flex mt-4 text-yellow-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden">
                  <Image src="/api/placeholder/100/100" alt="Customer portrait" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Michael T.</h4>
                  <p className="text-sm text-gray-500">Recent Graduate</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;As a recent grad with student loans, I was worried about managing my finances. NexusBank&apos;s budget tools and financial literacy resources have been invaluable in helping me plan for my future.&quot;</p>
              <div className="flex mt-4 text-yellow-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 overflow-hidden">
                  <Image src="/api/placeholder/100/100" alt="Customer portrait" width={48} height={48} className="h-full w-full object-cover" />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900">Elena R.</h4>
                  <p className="text-sm text-gray-500">Retired Teacher</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;The customer service at NexusBank is exceptional. When I had questions about my retirement accounts, my personal banker took the time to explain everything clearly and help optimize my savings.&quot;</p>
              <div className="flex mt-4 text-yellow-400">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
                <svg className="h-5 w-5 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" /></svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Financial Education Section */}
      <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-base font-semibold text-blue-600">Resources & Education</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                Knowledge is the foundation of financial success
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Access free financial education resources designed to help you make informed decisions at every stage of life. Our expert-written content covers everything from budgeting basics to retirement planning.
              </p>

              <div className="mt-10 space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <Landmark className="h-5 w-5 text-blue-500 mr-2" />
                    Improving Your Credit Score
                  </h3>
                  <p className="mt-2 text-gray-600">Learn practical strategies to build and improve your credit score for better financial opportunities.</p>
                  <a href="#" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read the guide <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <h3 className="text-lg font-medium text-gray-900 flex items-center">
                    <PiggyBank className="h-5 w-5 text-blue-500 mr-2" />
                    First-Time Home Buyer&apos;s Guide
                  </h3>
                  <p className="mt-2 text-gray-600">Everything you need to know about purchasing your first home, from saving for a down payment to closing costs.</p>
                  <a href="#" className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read the guide <ChevronRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                >
                  Browse Resources Center
                </a>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="grid grid-cols-2 gap-5">
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-40 bg-blue-100 relative">
                    <Image src="/api/placeholder/400/320" alt="Financial education resources" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900">Financial Planning Basics</h4>
                    <p className="text-sm text-gray-500 mt-1">12 min read</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-40 bg-green-100 relative">
                    <Image src="/api/placeholder/400/320" alt="Saving and investing resources" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900">Investing 101</h4>
                    <p className="text-sm text-gray-500 mt-1">15 min read</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-40 bg-yellow-100 relative">
                    <Image src="/api/placeholder/400/320" alt="Retirement planning resources" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900">Retirement Planning</h4>
                    <p className="text-sm text-gray-500 mt-1">10 min read</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-lg overflow-hidden shadow-md"
                >
                  <div className="h-40 bg-purple-100 relative">
                    <Image src="/api/placeholder/400/320" alt="Debt management resources" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-medium text-gray-900">Debt Management</h4>
                    <p className="text-sm text-gray-500 mt-1">8 min read</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branch Locations Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Find Us</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Banking online and in person
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Convenient access to NexusBank services nationwide through our branches and ATM network.
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-xl h-96 relative overflow-hidden">
                <Image src="/api/placeholder/800/600" alt="Branch locations map" fill className="object-cover" />
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm h-full">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Find a Branch or ATM</h3>

                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter ZIP code or address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button className="absolute right-3 top-3 text-blue-600">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </button>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-gray-900">Downtown Financial Center</h4>
                    <p className="text-sm text-gray-600 mt-1">123 Main Street, Suite 100</p>
                    <p className="text-sm text-gray-600">New York, NY 10001</p>
                    <div className="flex items-center mt-2 text-sm text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Open today: 9:00 AM - 5:00 PM</span>
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <h4 className="font-medium text-gray-900">Midtown Branch</h4>
                    <p className="text-sm text-gray-600 mt-1">456 Park Avenue</p>
                    <p className="text-sm text-gray-600">New York, NY 10022</p>
                    <div className="flex items-center mt-2 text-sm text-blue-600">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>Open today: 9:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>

                <a
                  href="#"
                  className="mt-6 inline-block text-blue-600 font-medium hover:text-blue-800"
                >
                  View all locations <ChevronRight className="inline-block ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to take control of your finances?</span>
              <span className="block text-blue-200">Open an account in minutes.</span>
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-lg">
              Join the millions of customers who trust NexusBank with their financial future. Get started online today or schedule an appointment with a personal banker.
            </p>
          </div>
          <div className="mt-8 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4 lg:mt-0 lg:flex-shrink-0">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 shadow-md transition-all duration-300"
            >
              Open an Account
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 shadow-md transition-all duration-300"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Talk to an Advisor
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Personal;