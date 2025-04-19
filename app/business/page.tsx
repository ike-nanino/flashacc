"use client"
import Image from 'next/image';
import { Briefcase, TrendingUp, DollarSign, Users, Globe, Landmark, Menu, X, ChartBar, Shield, Cpu, Headphones, Building, FileText, PieChart, CheckIcon } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function BusinessBanking() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSolution, setActiveSolution] = useState('startups');
  const [activeTab, setActiveTab] = useState('checking');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechGrowth Inc.",
      content: "NexusBank's business solutions have transformed how we manage our finances. Their digital platform saves us countless hours each month, and the dedicated relationship manager truly understands our unique needs.",
      image: "/api/placeholder/64/64",
      company: "TechGrowth Inc.",
      logo: "/api/placeholder/100/40"
    },
    {
      name: "Marcus Johnson",
      title: "CFO, Greenfield Manufacturing",
      content: "As our business expanded internationally, NexusBank provided the expertise and tools we needed to navigate global markets. Their treasury management solutions have optimized our cash flow and reduced operational costs.",
      image: "/api/placeholder/64/64",
      company: "Greenfield Manufacturing",
      logo: "/api/placeholder/100/40"
    },
    {
      name: "Elena Rodriguez",
      title: "Founder, Urban Eats Co-op",
      content: "Starting a business is challenging, but NexusBank made the banking part simple. Their startup-focused account had exactly what we needed, and their small business advisors guided us through every financial decision.",
      image: "/api/placeholder/64/64",
      company: "Urban Eats Co-op",
      logo: "/api/placeholder/100/40"
    }
  ];

  const faqs = [
    {
      id: 1,
      question: "What documentation do I need to open a business account?",
      answer: "To open a business account, you'll typically need: business formation documents (such as articles of incorporation or partnership agreement), EIN verification from the IRS, business license or permit, photo ID for all signatories, and initial deposit. Additional requirements may apply based on your business structure and industry."
    },
    {
      id: 2,
      question: "How long does the business loan application process take?",
      answer: "Our business loan application process typically takes 3-7 business days for initial review. For smaller loans (under $250,000), approval can be as quick as 48 hours with expedited funding available. Larger loans or specialized financing options may require additional underwriting time of 2-3 weeks."
    },
    {
      id: 3,
      question: "What treasury management services are available for mid-sized businesses?",
      answer: "Our mid-sized business treasury solutions include: automated payables and receivables processing, advanced fraud protection, liquidity management tools, cash concentration services, electronic payment systems, real-time account monitoring, and integrated accounting software connections. All services can be tailored to your specific business needs."
    },
    {
      id: 4,
      question: "Can NexusBank help with international expansion?",
      answer: "Yes, we offer comprehensive international banking solutions including: multi-currency accounts, competitive FX services, international payment processing, trade finance, documentary collections, letters of credit, global market insights, and personalized guidance from our international banking specialists who understand the unique challenges of cross-border business."
    },
    {
      id: 5,
      question: "What digital banking features are available for business accounts?",
      answer: "Our digital business banking platform includes: real-time transaction monitoring, role-based user access, mobile check deposits, bill pay and invoicing tools, integrated accounting software connections, cash flow forecasting, customizable alerts, secure document storage, and advanced security features including multi-factor authentication and encryption."
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      icon: <Shield className="h-8 w-8" />,
      description: "Specialized solutions for practices, clinics, hospitals and healthcare providers."
    },
    {
      name: "Technology",
      icon: <Cpu className="h-8 w-8" />,
      description: "Tailored banking for startups, SaaS companies, and established tech firms."
    },
    {
      name: "Professional Services",
      icon: <Briefcase className="h-8 w-8" />,
      description: "Financial solutions for legal, accounting, consulting and other service firms."
    },
    {
      name: "Manufacturing",
      icon: <Building className="h-8 w-8" />,
      description: "Banking services designed for production facilities and supply chain businesses."
    },
    {
      name: "Retail & E-commerce",
      icon: <Globe className="h-8 w-8" />,
      description: "Solutions for both brick-and-mortar and online retail operations."
    },
    {
      name: "Non-profit",
      icon: <Users className="h-8 w-8" />,
      description: "Specialized accounts and services for foundations, charities and organizations."
    }
  ];

  return (
    <div className="bg-white">
      {/* Navigation - Keeping as requested */}
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

      {/* Hero Section - Keeping as requested */}
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
              <span className="block text-blue-200 text-lg font-medium mb-2">Business Banking</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Solutions that grow with your business
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                From startups to enterprises, our business banking services are designed to help you succeed in today&apos;s competitive landscape.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 shadow-lg transition-all duration-300"
                >
                  Open Business Account
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="px-6 py-3 border border-blue-200 text-base font-medium rounded-md text-blue-100 hover:bg-blue-800/30 md:py-4 md:text-lg md:px-8 transition-all duration-300"
                >
                  Schedule Consultation
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Business Tailored Solutions */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Tailored Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Banking that understands your business journey
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Whatever stage your business is in, we have the expertise and solutions to support your financial success.
            </p>
          </div>

          <div className="mt-12">
            <div className="flex overflow-x-auto pb-2 mb-8 space-x-4 justify-center">
              <button
                onClick={() => setActiveSolution('startups')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeSolution === 'startups'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Startups & New Businesses
              </button>
              <button
                onClick={() => setActiveSolution('growth')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeSolution === 'growth'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Growing Companies
              </button>
              <button
                onClick={() => setActiveSolution('established')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeSolution === 'established'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Established Enterprises
              </button>
              <button
                onClick={() => setActiveSolution('international')}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeSolution === 'international'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                International Expansion
              </button>
            </div>

            <div className="mt-12 lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {activeSolution === 'startups' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-1"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">Launch your vision with confidence</h3>
                    <p className="mt-4 text-lg text-gray-500">
                      Starting a business requires financial solutions as agile and innovative as you are. Our startup-focused services help you establish a strong foundation.
                    </p>
                    <div className="mt-8 space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Fee-free business checking</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Zero monthly maintenance fees for the first year to help manage your startup costs.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Startup financing options</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Access to specialized lending programs designed for early-stage businesses.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Founder advisory services</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Complimentary consultations with business banking specialists who understand startup challenges.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                        Learn more about our startup solutions
                        <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                  <div className="mt-10 lg:mt-0 lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative lg:ml-10"
                    >
                      <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="/api/placeholder/600/500"
                          alt="Startup business team meeting"
                          width={600}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </>
              )}

              {activeSolution === 'growth' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-1"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">Scale with strategic financial tools</h3>
                    <p className="mt-4 text-lg text-gray-500">
                      As your business grows, so do your financial needs. Our scalable solutions adapt to your expanding operations and increasing complexity.
                    </p>
                    <div className="mt-8 space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Expanded credit options</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Business lines of credit and equipment financing to fuel your company&apos;s expansion.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Enhanced cash flow solutions</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Treasury management tools that optimize working capital and streamline operations.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Dedicated relationship manager</h4>
                          <p className="mt-1 text-base text-gray-500">
                            A single point of contact who understands your business and helps coordinate your banking needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                        Explore growth-stage solutions
                        <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                  <div className="mt-10 lg:mt-0 lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative lg:ml-10"
                    >
                      <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="/api/placeholder/600/500"
                          alt="Growing business team analyzing financial data"
                          width={600}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </>
              )}

              {activeSolution === 'established' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-1"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">Optimize operations at enterprise scale</h3>
                    <p className="mt-4 text-lg text-gray-500">
                      Complex businesses need sophisticated financial solutions. Our enterprise services deliver the advanced tools and expertise you need.
                    </p>
                    <div className="mt-8 space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Advanced treasury management</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Sophisticated cash management tools designed for multi-entity operations and complex financial structures.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Commercial lending solutions</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Customized financing structures that align with your enterprise&apos;s strategic objectives.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Enterprise banking team</h4>
                          <p className="mt-1 text-base text-gray-500">
                            A dedicated team of specialists across treasury, lending, and industry expertise.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-10">
                      <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                        Discover enterprise solutions
                        <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </a>
                    </div>
                  </motion.div>
                  <div className="mt-10 lg:mt-0 lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative lg:ml-10"
                    >
                      <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="/api/placeholder/600/500"
                          alt="Enterprise business headquarters"
                          width={600}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </>
              )}

              {activeSolution === 'international' && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="lg:col-span-1"
                  >
                    <h3 className="text-2xl font-bold text-gray-900">Expand your global footprint</h3>
                    <p className="mt-4 text-lg text-gray-500">
                      International markets bring unique opportunities and challenges. Our global banking solutions help you navigate cross-border complexities.
                    </p>
                    <div className="mt-8 space-y-6">
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Multi-currency accounts</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Hold and manage funds in multiple currencies with competitive exchange rates.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-gray-900">Trade finance solutions</h4>
                          <p className="mt-1 text-base text-gray-500">
                            Letters of credit, documentary collections, and international payment processing.
                          </p>
                        </div>
                      </div>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-100 text-blue-600">
                            <CheckIcon className="h-6 w-6" />
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium text-gray-900">International banking specialists</h4>
                            <p className="mt-1 text-base text-gray-500">
                              Expert advisors who understand global markets and regulatory requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mt-10">
                        <a href="#" className="text-blue-600 font-medium hover:text-blue-800 flex items-center">
                          Explore global banking solutions
                          <svg className="ml-2 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                  <div className="mt-10 lg:mt-0 lg:col-span-1">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="relative lg:ml-10"
                    >
                      <div className="relative h-64 sm:h-72 md:h-96 lg:h-full rounded-2xl overflow-hidden shadow-xl">
                        <Image
                          src="/api/placeholder/600/500"
                          alt="Global business operations"
                          width={600}
                          height={500}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Digital Banking Platform */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Digital Experience</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Advanced Business Banking Platform
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Manage your finances anytime, anywhere with our intuitive digital tools designed for modern businesses.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
              <div className="lg:col-span-5">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                  <div className="bg-blue-600 px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
                          <Landmark className="h-4 w-4 text-blue-600" />
                        </div>
                      </div>
                      <h3 className="ml-3 text-lg font-medium text-white">NexusBank Business Portal</h3>
                    </div>
                  </div>
                  <div className="px-6 py-8">
                    <div className="space-y-8">
                      <div>
                        <div className="flex items-center">
                          <button
                            onClick={() => setActiveTab('checking')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'checking'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                              }`}
                          >
                            Dashboard
                          </button>
                          <button
                            onClick={() => setActiveTab('accounts')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'accounts'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                              }`}
                          >
                            Accounts
                          </button>
                          <button
                            onClick={() => setActiveTab('payments')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'payments'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                              }`}
                          >
                            Payments
                          </button>
                          <button
                            onClick={() => setActiveTab('reports')}
                            className={`px-4 py-2 text-sm font-medium ${activeTab === 'reports'
                                ? 'text-blue-600 border-b-2 border-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                              }`}
                          >
                            Reports
                          </button>
                        </div>
                      </div>

                      {activeTab === 'checking' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">ACCOUNT OVERVIEW</h4>
                            <div className="mt-2 bg-gray-50 rounded-lg p-4">
                              <div className="flex justify-between items-center">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Business Checking</p>
                                  <p className="text-xs text-gray-500">**** 4832</p>
                                </div>
                                <p className="text-lg font-bold text-gray-900">$42,587.29</p>
                              </div>
                              <div className="mt-4 h-2 bg-gray-200 rounded-full">
                                <div className="h-2 bg-blue-600 rounded-full" style={{ width: '65%' }}></div>
                              </div>
                              <div className="mt-2 flex justify-between text-xs text-gray-500">
                                <span>Monthly activity</span>
                                <span>65%</span>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-sm font-medium text-gray-500">RECENT TRANSACTIONS</h4>
                            <div className="mt-2 space-y-3">
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <TrendingUp className="h-4 w-4" />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Vendor Payment</p>
                                    <p className="text-xs text-gray-500">Apr 18, 2025</p>
                                  </div>
                                </div>
                                <p className="text-sm font-medium text-red-600">-$2,340.00</p>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                    <DollarSign className="h-4 w-4" />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Client Deposit</p>
                                    <p className="text-xs text-gray-500">Apr 15, 2025</p>
                                  </div>
                                </div>
                                <p className="text-sm font-medium text-green-600">+$8,750.00</p>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <Users className="h-4 w-4" />
                                  </div>
                                  <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">Payroll</p>
                                    <p className="text-xs text-gray-500">Apr 15, 2025</p>
                                  </div>
                                </div>
                                <p className="text-sm font-medium text-red-600">-$12,450.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'accounts' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">ALL ACCOUNTS</h4>
                            <div className="mt-2 space-y-3">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">Business Checking</p>
                                    <p className="text-xs text-gray-500">**** 4832</p>
                                  </div>
                                  <p className="text-lg font-bold text-gray-900">$42,587.29</p>
                                </div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">Business Savings</p>
                                    <p className="text-xs text-gray-500">**** 7291</p>
                                  </div>
                                  <p className="text-lg font-bold text-gray-900">$128,932.54</p>
                                </div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4">
                                <div className="flex justify-between items-center">
                                  <div>
                                    <p className="text-sm font-medium text-gray-900">Line of Credit</p>
                                    <p className="text-xs text-gray-500">**** 3517</p>
                                  </div>
                                  <div className="text-right">
                                    <p className="text-lg font-bold text-gray-900">$65,000.00</p>
                                    <p className="text-xs text-gray-500">Available: $35,000</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'payments' && (
                        <div className="space-y-6">
                          <div>
                            <div className="flex justify-between items-center">
                              <h4 className="text-sm font-medium text-gray-500">PAYMENT TOOLS</h4>
                              <button className="text-xs text-blue-600 font-medium hover:text-blue-800">New Payment</button>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-4">
                              <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <div className="mx-auto h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                                  <Users className="h-5 w-5" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">Payroll</p>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <div className="mx-auto h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                                  <Briefcase className="h-5 w-5" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">Vendors</p>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <div className="mx-auto h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                                  <Globe className="h-5 w-5" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">International</p>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <div className="mx-auto h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-2">
                                  <FileText className="h-5 w-5" />
                                </div>
                                <p className="text-sm font-medium text-gray-900">Invoices</p>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">SCHEDULED PAYMENTS</h4>
                            <div className="mt-2 space-y-3">
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Office Rent</p>
                                  <p className="text-xs text-gray-500">Apr 30, 2025</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$4,200.00</p>
                              </div>
                              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                                <div>
                                  <p className="text-sm font-medium text-gray-900">Equipment Lease</p>
                                  <p className="text-xs text-gray-500">May 5, 2025</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">$1,850.00</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === 'reports' && (
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">BUSINESS INSIGHTS</h4>
                            <div className="mt-4">
                              <div className="bg-gray-50 rounded-lg p-4">
                                <p className="text-sm font-medium text-gray-900 mb-2">Cash Flow Trend</p>
                                <div className="h-32 w-full bg-white rounded-lg p-2">
                                  <div className="h-full w-full flex items-end space-x-2">
                                    <div className="w-1/6 h-40% bg-blue-200 rounded-t"></div>
                                    <div className="w-1/6 h-60% bg-blue-300 rounded-t"></div>
                                    <div className="w-1/6 h-50% bg-blue-400 rounded-t"></div>
                                    <div className="w-1/6 h-70% bg-blue-500 rounded-t"></div>
                                    <div className="w-1/6 h-90% bg-blue-600 rounded-t"></div>
                                    <div className="w-1/6 h-75% bg-blue-700 rounded-t"></div>
                                  </div>
                                </div>
                                <div className="mt-2 flex justify-between text-xs text-gray-500">
                                  <span>November</span>
                                  <span>April</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium text-gray-500">AVAILABLE REPORTS</h4>
                            <div className="mt-2 space-y-2">
                              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <PieChart className="h-4 w-4" />
                                  </div>
                                  <p className="ml-3 text-sm font-medium text-gray-900">Expense Analysis</p>
                                </div>
                                <button className="text-xs text-blue-600">View</button>
                              </div>
                              <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
                                <div className="flex items-center">
                                  <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                    <ChartBar className="h-4 w-4" />
                                  </div>
                                  <p className="ml-3 text-sm font-medium text-gray-900">Quarterly Performance</p>
                                </div>
                                <button className="text-xs text-blue-600">View</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:col-span-7">
                <div className="lg:pl-16">
                  <div className="space-y-10">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Everything you need in one platform</h3>
                      <p className="mt-3 text-lg text-gray-500">
                        Our digital banking platform gives you complete control over your finances with features designed for modern businesses.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                      <div className="relative">
                        <div className="absolute h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <Shield className="h-6 w-6" />
                        </div>
                        <div className="pl-16">
                          <h4 className="text-lg font-medium text-gray-900">Advanced Security</h4>
                          <p className="mt-2 text-base text-gray-500">
                            Enterprise-grade security with multi-factor authentication, encryption, and proactive fraud monitoring.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <Users className="h-6 w-6" />
                        </div>
                        <div className="pl-16">
                          <h4 className="text-lg font-medium text-gray-900">User Management</h4>
                          <p className="mt-2 text-base text-gray-500">
                            Assign role-based permissions to team members with granular control over account access.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <Cpu className="h-6 w-6" />
                        </div>
                        <div className="pl-16">
                          <h4 className="text-lg font-medium text-gray-900">API Integration</h4>
                          <p className="mt-2 text-base text-gray-500">
                            Connect with your accounting software, ERP, and other business tools for seamless workflows.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <ChartBar className="h-6 w-6" />
                        </div>
                        <div className="pl-16">
                          <h4 className="text-lg font-medium text-gray-900">Business Analytics</h4>
                          <p className="mt-2 text-base text-gray-500">
                            Gain insights into your financial performance with customizable reports and dashboards.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <Globe className="h-6 w-6" />
                        </div>
                        <div className="pl-16">
                          <h4 className="text-lg font-medium text-gray-900">Global Banking</h4>
                          <p className="mt-2 text-base text-gray-500">
                            Manage international accounts, make cross-border payments, and handle multiple currencies.
                          </p>
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                          <Headphones className="h-6 w-6" />
                        </div>
                        <div className="pl-16">
                          <h4 className="text-lg font-medium text-gray-900">24/7 Support</h4>
                          <p className="mt-2 text-base text-gray-500">
                            Access dedicated support through chat, phone, or email whenever you need assistance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                      >
                        Schedule Demo
                      </a>
                      <a
                        href="#"
                        className="inline-flex items-center justify-center px-5 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Specialization */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Industry Expertise</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Specialized banking for your industry
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We understand the unique financial challenges and opportunities in your industry.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="bg-gray-50 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-500">{industry.description}</p>
                <a href="#" className="mt-6 inline-block text-blue-600 font-medium hover:text-blue-800">
                  Learn more &rarr;
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our business clients say
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Hear from businesses like yours about their experience with NexusBank.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="flex overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: activeTestimonial === index ? 1 : 0,
                    x: `${(index - activeTestimonial) * 100}%`
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full flex-shrink-0"
                >
                  <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="text-xl md:text-2xl font-medium text-gray-900 italic mb-8">
                      &ldquo;{testimonial.content}&rdquo;
                    </div>
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="h-16 w-16 rounded-full"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-lg font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-base text-gray-500">{testimonial.title}</div>
                        <div className="mt-3">
                          <Image
                            src={testimonial.logo}
                            alt={testimonial.company}
                            width={100}
                            height={40}
                            className="h-8"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10 flex justify-center space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`h-3 w-3 rounded-full ${activeTestimonial === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">FAQ</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Find answers to common questions about our business banking services.
            </p>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <dl className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.id} className="bg-gray-50 rounded-xl p-6 shadow-sm">
                  <dt>
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="text-left w-full flex justify-between items-center focus:outline-none"
                    >
                      <span className="text-lg font-medium text-gray-900">{faq.question}</span>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${openId === faq.id ? 'rotate-180' : ''
                          }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {openId === faq.id && (
                      <motion.dd
                        key="content"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-gray-600"
                      >
                        {faq.answer}
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
} 