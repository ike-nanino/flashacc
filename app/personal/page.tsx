
import Image from 'next/image';
import { Shield, CreditCard, PiggyBank, ArrowRight, Gift, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import HomeNav from '@/components/HomeNav';

 function Personal() {
  return (
    <div className="bg-white">
        <HomeNav />
      {/* Hero Section */}
      <div className="relative h-[500px] lg:h-[600px]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/20 z-10" />
        <div className="relative h-full w-full">
          <Image
            src="/images/menteam.jpg"
            alt="Person using mobile banking app"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        <div className="relative z-20 h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
            <div className="max-w-lg">
              <span className="block text-blue-200 text-lg font-medium mb-2">Personal Banking</span>
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Banking that revolves around you
              </h1>
              <p className="mt-3 text-base text-blue-100 sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Discover financial solutions designed for your unique lifestyle and goals, with the convenience of modern digital banking.
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
                  Compare Accounts
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Types */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold tracking-wide uppercase text-blue-600">Account Options</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Banking tailored to your needs
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose from our range of personal accounts designed to fit your lifestyle and financial goals.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <CreditCard className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Everyday Checking</h3>
              <p className="text-gray-600 mb-4">
                Our most popular account for daily banking needs with no minimum balance and free online and mobile banking.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">No monthly fee with direct deposit</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">Free debit card with rewards</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">Mobile check deposit</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <PiggyBank className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">High-Yield Savings</h3>
              <p className="text-gray-600 mb-4">
                Earn more on your savings with competitive interest rates and no hidden fees.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">Industry-leading APY</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">No minimum balance requirements</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">Automated savings plans</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>

            <motion.div 
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-5">
                <Gift className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Rewards</h3>
              <p className="text-gray-600 mb-4">
                Get more from your bank with our premium account featuring exclusive rewards and benefits.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">Premium travel benefits</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">Dedicated relationship manager</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="h-5 w-5 text-blue-500 flex-shrink-0 mr-2" />
                  <span className="text-gray-500">Exclusive event invitations</span>
                </li>
              </ul>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Personal Tools Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Tools designed for your financial success
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Our suite of personal banking tools helps you stay on top of your finances, reach your goals faster, and make smarter money decisions.
              </p>
              
              <div className="mt-10 space-y-10">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Financial Dashboard</h3>
                    <p className="mt-2 text-base text-gray-500">Get a complete view of your finances with our intuitive dashboard that tracks spending, savings goals, and account balances.</p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                      <RefreshCw className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Automated Savings</h3>
                    <p className="mt-2 text-base text-gray-500">Set up rules to automatically move money to your savings based on spending habits, payday, or custom milestones.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 relative">
              <div className="relative mx-auto">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative rounded-xl overflow-hidden shadow-xl"
                >
                  <Image
                    src="/images/financial-app.jpg"
                    alt="Financial management dashboard"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover"
                  />
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
            <span className="block">Ready to take control of your finances?</span>
            <span className="block text-blue-200">Open an account in minutes.</span>
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
                Talk to an Advisor
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal;