"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
import VirtualCreditCard from '@/components/VirtualCreditCard';
import Investments from '@/components/Investments';
import Image from 'next/image';
import clsx from 'clsx';
import RightSide from '@/components/RightSide';
import StatisticsDashboard from '@/components/StatisticsBoard';
config.autoAddCss = false;

type CardType = 'visa' | 'mastercard'

interface VirtualCardProps {
  cardType: CardType
  cardHolder: string
  lastFour: string
  expiry: string
  limit: number
  available: number
  bgGradient?: string
}

function Dashboard({
}: VirtualCardProps) {



  return (
    <section className=' bg-[#c7c7c7] flex no-scrollbar pt-20 lg:pt-3 w-full flex-1'>

      <div className='flex gap-4'>

        <div className='w-full lg:pl-4 lg:w-2/3 flex flex-col items-center justify-center'>

          <div className='flex flex-col lg:flex-row items-center gap-4 lg:gap-1'>


            <div
              className="relative w-[350px] sm:w-[350px] h-[240px] sm:h-[220px] perspective cursor-pointer"

            >
              <div
                className=
                'relative w-full h-full transition-transform duration-1000'>
                {/* FRONT */}
                <div className={clsx(
                  'absolute w-full h-full rounded-xl overflow-hidden px-4 sm:px-6 py-4 sm:py-6 backface-hidden z-10 bg-gradient-to-r from-indigo-200 to-yellow-100'
                )}>

                  <div className="relative z-10 flex justify-between items-center mb-6">
                    <Image
                      src="/images/chip.png"
                      alt="Chip"
                      width={50}
                      height={50}
                    />
                    <Image
                      src='/images/visa.png'
                      alt='Visa'
                      width={60}
                      height={60}
                    />
                  </div>

                  {/* Card Number */}
                  <div className="relative z-10 text-white text-lg sm:text-2xl tracking-widest flex justify-between mb-6">
                    <p>****</p>
                    <p>****</p>
                    <p>****</p>
                    <p>1412</p>
                  </div>



                  {/* Cardholder + Expiry */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between text-xs sm:text-sm text-white">
                    <div>
                      <p className="opacity-70 mb-1">CARD HOLDER</p>
                      <p>Johnson</p>
                    </div>
                    <div className="text-right">
                      <p className="opacity-70 mb-1">VALID TILL</p>
                      <p>24/12</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div
              className="relative w-[350px] sm:w-[350px] h-[240px] sm:h-[220px] perspective cursor-pointer"

            >
              <div
                className=
                'relative w-full h-full transition-transform duration-1000'>
                {/* FRONT */}
                <div className={clsx(
                  'absolute w-full h-full rounded-xl overflow-hidden px-4 sm:px-6 py-4 sm:py-6 backface-hidden z-10 bg-gradient-to-r from-violet-200 to-pink-200'
                )}>

                  <div className="relative z-10 flex justify-between items-center mb-6">
                    <Image
                      src="/images/chip.png"
                      alt="Chip"
                      width={50}
                      height={50}
                    />
                    <Image
                      src='/images/mastercard.png'
                      alt='Mastercard'
                      width={60}
                      height={60}
                    />
                  </div>

                  {/* Card Number */}
                  <div className="relative z-10 text-white text-lg sm:text-2xl tracking-widest flex justify-between mb-6">
                    <p>****</p>
                    <p>****</p>
                    <p>****</p>
                    <p>1412</p>
                  </div>



                  {/* Cardholder + Expiry */}
                  <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex justify-between text-xs sm:text-sm text-white">
                    <div>
                      <p className="opacity-70 mb-1">CARD HOLDER</p>
                      <p>Johnson</p>
                    </div>
                    <div className="text-right">
                      <p className="opacity-70 mb-1">VALID TILL</p>
                      <p>24/12</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>


          </div>


          <div className='mt-3 flex flex-col items-center justify-between px-1'>
            <div className='flex items-center gap-4'>


              <h2 className='font-medium my-4'>Fast Payment</h2>
              <div className='px-2 py-1 bg-blue-400 rounded-md'>
                <FontAwesomeIcon icon={faPlus} />
              </div>

            </div>
            <div className='grid grid-cols-3 md:grid-cols-4 gap-4'>


              <div className='flex items-center gap-2 bg-white rounded-sm p-2'>
                <span className='w-4 h-4 rounded-full bg-orange-500'></span>
                <div className='flex items-center gap-2'>
                  <h5>Food</h5>
                  <h4 className='font-bold'>$50</h4>
                </div>
              </div>

              <div className='flex items-center gap-2 bg-fuchsia-300 rounded-sm p-2'>
                <span className='w-4 h-4 rounded-full bg-fuchsia-500'></span>
                <div className='flex items-center gap-2'>
                  <h5>Internet</h5>
                  <h4 className='font-bold'>$50</h4>
                </div>
              </div>

              <div className='flex items-center gap-2 bg-rose-300 rounded-sm p-2'>
                <span className='w-4 h-4 rounded-full bg-rose-500'></span>
                <div className="flex items-center gap-2">
                  <h5 className='text-rose-500'>Gas</h5>
                  <h4 className='text-rose-500 font-bold'>$50</h4>
                </div>
              </div>

              <div className='flex items-center gap-2 bg-[#7bf8f8] rounded-sm p-2'>
                <span className='w-4 h-4 rounded-full bg-[#00c0c0]'></span>
                <div className='flex items-center gap-2'>
                  <h5 className='text-[#00c0c0]'>Electricity</h5>
                  <h4 className='text-[#00c0c0] font-bold'>$50</h4>
                </div>
              </div>

              <div className='flex items-center gap-2 bg-[#d170c1] rounded-sm p-2'>
                <span className='w-4 h-4 rounded-full bg-[#72005f]'></span>
                <div className='flex items-center gap-2'>
                  <h5 className='text-[#72005f]'>Shopping</h5>
                  <h4 className='font-bold text-[#72005f]' >$50</h4>
                </div>
              </div>

              <div className='flex items-center gap-2 bg-[#ad92b9] rounded-sm p-2'>
                <span className='w-4 h-4 rounded-full bg-[#7e00b4]'></span>
                <div className='flex items-center gap-2'>
                  <h5 className='text-[#7e00b4]'>Movies</h5>
                  <h4 className='font-bold text-[#7e00b4]'>$50</h4>
                </div>
              </div>
            </div>
          </div>


          <StatisticsDashboard />
        </div>


        <RightSide />
      </div>

    </section>

  )
}

export default Dashboard