'use client'
// pages/index.js
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import {
  ArrowRight, ChevronRight, Shield, Landmark, PieChart,
  CreditCard, Briefcase, Menu, X, Smartphone,
  TrendingUp, Clock, Lock,
} from 'lucide-react';
import HomeNav from '@/components/HomeNav';

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentHero, setCurrentHero] = useState(0);

  // Hero content
  const heroContent = [
    {
      id: 1,
      title: "Banking that works for you",
      subtitle: "Experience seamless digital banking with powerful tools to manage your finances, investments, and future all in one place.",
      image: "/images/man.jpg",
      altText: "Person using banking app on smartphone"
    },
    {
      id: 2,
      title: "Invest in your future",
      subtitle: "Grow your wealth with personalized investment strategies tailored to your goals and risk tolerance.",
      image: "/images/hero3.jpg",
      altText: "Financial investment visualization"
    },
    {
      id: 3,
      title: "Bank securely, anywhere",
      subtitle: "Industry-leading security protocols protect your data and assets while you bank on the go.",
      image: "/images/woman.jpg",
      altText: "Secure mobile banking interface"
    }
  ];

  // Auto-rotate hero content
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
<HomeNav />

      {/* <nav className="bg-white shadow-sm sticky top-0 z-50">
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

          
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Personal</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Business</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">Wealth</a>
              <a href="#" className="text-gray-900 hover:text-blue-600 px-3 py-2 font-medium">About</a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors duration-300">Sign In</a>
            </div>

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

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Personal</a>
              <a href="#" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Business</a>
              <a href="#" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">Wealth</a>
              <a href="#" className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md font-medium">About</a>
              <a href="#" className="bg-blue-600 text-white block px-3 py-2 rounded-md font-medium">Sign In</a>
            </div>
          </div>
        )}
      </nav> */}

      {/* Hero Section with Left-to-Right Transitions */}
      <div className="relative bg-white overflow-hidden h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentHero}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/20 z-10" />
            <div className="relative h-full w-full">
              <Image
                src={heroContent[currentHero].image}
                alt={heroContent[currentHero].altText}
                fill
                priority
                style={{ objectFit: 'cover' }}
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative z-20 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentHero}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="max-w-lg"
              >
                <span className="block text-blue-200 text-lg font-medium mb-2">Welcome to NexusBank</span>
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  {heroContent[currentHero].title}
                </h1>
                <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                  {heroContent[currentHero].subtitle}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#"
                    className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 shadow-lg"
                  >
                    Open Account
                  </a>
                  <a
                    href="#"
                    className="px-6 py-3 border border-blue-200 text-base font-medium rounded-md text-blue-100 hover:bg-blue-800/30 md:py-4 md:text-lg md:px-8"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Hero indicators */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
            {heroContent.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentHero(index)}
                className={`w-3 h-3 rounded-full ${index === currentHero ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Smart banking for the digital age
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover a new way of managing your finances with innovative tools designed for your lifestyle.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Advanced Security</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Bank with confidence using our multi-layered security protocols and real-time fraud monitoring.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <PieChart className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Smart Investments</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Grow your wealth with personalized investment strategies tailored to your financial goals.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Digital Cards</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Instantly create virtual cards for online shopping with customizable spending limits.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Smartphone className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Mobile Banking</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Manage your accounts, transfer money, and pay bills from anywhere with our award-winning app.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Financial Insights</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Gain valuable insights into your spending habits with AI-powered analytics and recommendations.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Business Solutions</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Comprehensive banking solutions for businesses of all sizes with dedicated support.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Banking at your fingertips
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-blue-100">
                Download our award-winning mobile app to enjoy a seamless banking experience wherever you go.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                >
                  App Store
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700"
                >
                  Google Play
                </a>
              </div>

              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="bg-blue-700 rounded-lg p-4">
                  <Clock className="h-8 w-8 text-blue-200" />
                  <h3 className="mt-2 text-lg font-medium text-white">24/7 Access</h3>
                  <p className="mt-1 text-sm text-blue-200">Bank anytime, anywhere with round-the-clock access to your accounts.</p>
                </div>
                <div className="bg-blue-700 rounded-lg p-4">
                  <Lock className="h-8 w-8 text-blue-200" />
                  <h3 className="mt-2 text-lg font-medium text-white">Secure Transactions</h3>
                  <p className="mt-1 text-sm text-blue-200">Industry-leading security with biometric authentication.</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative mx-auto w-64 lg:max-w-md">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 -right-4 -bottom-4 bg-blue-400 rounded-2xl transform -rotate-6"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden shadow-xl">
                    <div className="h-12 bg-gray-100 flex items-center justify-center border-b">
                      <div className="w-16 h-1 bg-gray-300 rounded-full"></div>
                    </div>
                    <div className="relative h-96 w-full">
                      <Image
                        src="/images/screenshot.jpg"
                        alt="Banking app interface"
                        width={375}
                        height={667}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Types Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Banking Solutions</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight">
              Choose the account that's right for you
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              From everyday banking to wealth management, we have solutions tailored to your needs.
            </p>
          </div>

          <div className="mt-12 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
            <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900">Personal Checking</h3>
              <p className="mt-2 text-sm text-gray-500">Perfect for everyday banking needs with no minimum balance.</p>
              <p className="mt-4 text-3xl font-extrabold text-gray-900">$0<span className="text-lg font-medium text-gray-500">/month</span></p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">No minimum balance required</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Free online and mobile banking</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Digital debit card access</p>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-base font-medium rounded-md hover:bg-blue-50"
                >
                  Open Account
                </a>
              </div>
            </div>

            <div className="border-2 border-blue-600 rounded-lg shadow-sm p-6 bg-white relative hover:shadow-md transition-shadow duration-300">
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                  Popular
                </span>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Premier Account</h3>
              <p className="mt-2 text-sm text-gray-500">Enhanced features for those who want more from their bank.</p>
              <p className="mt-4 text-3xl font-extrabold text-gray-900">$12<span className="text-lg font-medium text-gray-500">/month</span></p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">All Personal Checking features</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Higher interest rates</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Premium travel benefits</p>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 bg-blue-600 border border-transparent text-white text-base font-medium rounded-md hover:bg-blue-700"
                >
                  Open Account
                </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg shadow-sm p-6 bg-white hover:shadow-md transition-shadow duration-300">
              <h3 className="text-lg font-medium text-gray-900">Business Banking</h3>
              <p className="mt-2 text-sm text-gray-500">Comprehensive solutions for businesses of all sizes.</p>
              <p className="mt-4 text-3xl font-extrabold text-gray-900">$20<span className="text-lg font-medium text-gray-500">/month</span></p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Dedicated business support</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Integrated accounting tools</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-blue-500" />
                  </div>
                  <p className="ml-2 text-sm text-gray-500">Cash flow management</p>
                </li>
              </ul>
              <div className="mt-8">
                <a
                  href="#"
                  className="block w-full text-center px-4 py-2 border border-blue-600 text-blue-600 text-base font-medium rounded-md hover:bg-blue-50"
                >
                  Open Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-blue-100 rounded-full opacity-70"></div>
                <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-50 rounded-full opacity-70"></div>
                <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/grap.png"
                    alt="Investment growth chart"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0">
              <div className="lg:pl-10">
                <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Wealth Management</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Invest in your financial future</p>
                <p className="mt-4 text-lg text-gray-500">
                  Our expert advisors help you build a personalized investment strategy aligned with your goals and risk tolerance.
                </p>

                <div className="mt-10 space-y-10">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <TrendingUp className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Retirement Planning</h3>
                      <p className="mt-2 text-base text-gray-500">Secure your future with tax-advantaged retirement accounts and strategic planning.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                        <PieChart className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">Portfolio Management</h3>
                      <p className="mt-2 text-base text-gray-500">Diversified investment strategies managed by industry professionals.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Schedule a Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials with actual images */}
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Testimonials</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
              Trusted by thousands
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Hear what our customers have to say about their experience with NexusBank.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 italic">&quot;The mobile app is intuitive and makes managing my finances so much easier. I can track spending patterns and make informed decisions.&quot;</p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 relative rounded-full overflow-hidden">
                    <Image
                      src="/images/passport.jpg"
                      alt="Sarah Johnson"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Personal Banking Customer</p>
                  </div>
                </div>
              </div>


              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 italic">&quot;As a small business owner, I needed a bank that understood my unique challenges. NexusBank has been a true financial partner in our growth.&quot;</p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 relative rounded-full overflow-hidden">
                    <Image
                      src="/images/passport.jpg"
                      alt="Michael Torres"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Michael Torres</p>
                    <p className="text-sm text-gray-500">Business Account Holder</p>

                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                <p className="text-gray-600 italic">&quot;As a small business owner, I needed a bank that understood my unique challenges. NexusBank has been a true financial partner in our growth.&quot;</p>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 relative rounded-full overflow-hidden">
                    <Image
                      src="/images/passport.jpg"
                      alt="Michael Torres"
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Michael Torres</p>
                    <p className="text-sm text-gray-500">Business Account Holder</p>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      {/* <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Testimonials</h2>
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
              Trusted by thousands
            </p>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              Hear what our customers have to say about their experience with NexusBank.
            </p>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <p className="text-gray-600 italic">&quot;The mobile app is intuitive and makes managing my finances so much easier. I can track spending patterns and make informed decisions.&quot;</p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">Personal Banking Customer</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <p className="text-gray-600 italic">&quot;As a small business owner, I needed a bank that understood my unique challenges. NexusBank has been a true financial partner in our growth.&quot;</p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Michael Torres</p>
                    <p className="text-sm text-gray-500">Business Account Holder</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
                <p className="text-gray-600 italic">&quot;Their wealth management team helped me create a retirement plan that I feel confident about. Excellent service and professional advice.&quot;</p>
                <div className="mt-4 flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">Jennifer Lee</p>
                    <p className="text-sm text-gray-500">Wealth Management Client</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block text-blue-600">Open an account in minutes.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Products</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Checking</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Savings</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Credit Cards</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Loans</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Online Banking</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Mobile App</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Wealth Management</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Business Banking</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Press</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Security</a></li>
                <li><a href="#" className="text-base text-gray-300 hover:text-white">Accessibility</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-base text-gray-400 md:mt-0">
              &copy; 2025 NexusBank. All rights reserved.
            </p>
          </div>
        </div>
      </footer>


    </div>
  );
}