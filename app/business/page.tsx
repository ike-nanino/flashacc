
import Image from 'next/image';
import { Briefcase, TrendingUp, DollarSign, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import HomeNav from '@/components/HomeNav';

export default function BusinessBanking() {
  return (
    <div className="bg-white">
        <HomeNav />
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/20 z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/images/menteam.jpg"
            alt="Business professionals in a meeting"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="relative z-20 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-lg">
              <span className="block text-blue-200 text-lg font-medium mb-2">Business Banking</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Solutions that grow with your business
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                From startups to enterprises, our business banking services are designed to help you succeed in toda&apos;'s competitive landscape.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8 shadow-lg"
                >
                  Open Business Account
                </a>
                <a
                  href="#"
                  className="px-6 py-3 border border-blue-200 text-base font-medium rounded-md text-blue-100 hover:bg-blue-800/30 md:py-4 md:text-lg md:px-8"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Business Solutions */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Business Solutions</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Comprehensive banking for every stage of business
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our suite of business solutions helps you manage finances, streamline operations, and focus on what matters most: growing your business.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Business Checking</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Flexible accounts with features designed for businesses of all sizes, from startups to established enterprises.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Merchant Services</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Accept payments online, in-store, or on the go with our secure and reliable payment processing solutions.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <DollarSign className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Business Lending</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Fuel your growth with our range of financing options, from lines of credit to SBA loans and equipment financing.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Users className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Treasury Management</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Optimize cash flow and improve financial operations with our suite of treasury services and tools.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Globe className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">International Banking</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Expand globally with foreign exchange services, international wire transfers, and global payment solutions.
                </dd>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Chart className="h-6 w-6" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Business Insights</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Make data-driven decisions with powerful analytics tools that provide visibility into your financial performance.
                </dd>
              </motion.div>
            </dl>
          </div>
        </div>
      </div>

      {/* Business Banking Platform */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div className="relative">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative mx-auto rounded-xl overflow-hidden shadow-xl"
              >
                <Image
                  src="/images/business-platform.jpg"
                  alt="Business banking platform dashboard"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            
            <div className="mt-10 lg:mt-0">
              <div className="lg:pl-10">
                <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Digital Platform</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">Powerful tools at your fingertips</p>
                <p className="mt-4 text-lg text-gray-500">
                  Our business banking platform gives you complete control over your finances with intuitive tools designed for the way you work.
                </p>

                <ul className="mt-8 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      <span className="font-medium text-gray-900">Real-time cash flow management</span> - Track money coming in and going out with instant notifications and insights.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      <span className="font-medium text-gray-900">Integrated accounting</span> - Seamlessly connect with popular accounting software to streamline bookkeeping.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-base text-gray-500">
                      <span className="font-medium text-gray-900">Custom permissions</span> - Assign role-based access to employees for secure and efficient financial management.
                    </p>
                  </li>
                </ul>

                <div className="mt-10">
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    Request Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Ready to take your business to the next level?</span>
            <span className="block text-blue-200">Our business advisors are here to help.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50"
              >
                Open Account
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-700 hover:bg-blue-800"
              >
                Contact Business Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}