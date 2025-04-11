"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeadphonesSimple, faBagShopping, faGamepad, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Investments from './Investments';
import Image from 'next/image';
config.autoAddCss = false;

function RightSide() {
  return (

    <aside className='no-scrollbar hidden  min-h-screen flex-col lg:flex w-[355px] xl:overflow-y-hidden'>


    
    
    <div className='flex-1 mr-2'>
    <Investments />

    <div className='mt-4 bg-transparent rounded-lg shadow-md'>
                <div className='flex items-center justify-between p-2'>
                  <h1 className='font-bold'>Recent Transactions</h1>
                  <p className='text-sm text-blue-600 hover:text-blue-800 duration-300 cursor-pointer'>More</p>
          
                </div>
          
                <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
                  <div className='flex gap-2'>
                    <span className='px-3 py-2 rounded-lg bg-pink-300'><FontAwesomeIcon icon={faHeadphonesSimple} className='text-pink-500 text-lg'/></span>
                    <div className=''>
                      <h4 className='font-bold text-md'>Music</h4>
                      <p className='text-xs text-white'>20.11.2021</p>
                    </div>
                  </div>
          
                  <div className="flex items-center gap-2">
                      
                      <div className='p-3 rounded-lg bg-gradient-to-r from-indigo-200 to-yellow-100'>
                        <Image 
                        src='/images/visa.png'
                        alt="card"
                        width={40}
                        height={40}
                        />
                      </div>
                      <div className='details'>
                        <h2 className='text-sm text-black'>*2342</h2>
                        <p className='text-xs text-white'>Credit Card</p>
                  </div>
                </div>
          
                <h4 className='font-bold text-md'>$20</h4>
              </div>
          
                <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
                  <div className='flex gap-2'>
                    <span className='px-3 py-2 rounded-lg bg-[#7bf8f8]'>  <FontAwesomeIcon icon={faBagShopping} className='text-[#00c0c0] text-lg' /></span>
                    <div className=''>
                      <h4 className='font-bold text-md'>Shopping</h4>
                      <p className='text-xs text-white'>20.11.2021</p>
                    </div>
                  </div>
          
                  <div className="flex items-center gap-2">
                      
                      <div className='p-3 rounded-lg bg-gradient-to-r from-indigo-200 to-yellow-100'>
                        <Image 
                        src='/images/visa.png'
                        alt="card"
                        width={40}
                        height={40}
                        />
                      </div>
                      <div className='details'>
                        <h2 className='text-sm text-black'>*2342</h2>
                        <p className='text-xs text-white'>Credit Card</p>
                  </div>
                </div>
          
                <h4 className='font-bold text-md'>$20</h4>
              </div>
          
                <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
                  <div className='flex gap-2'>
                    <span className='px-3 py-2 rounded-lg bg-[#ad92b9]'>
                    <FontAwesomeIcon icon={faGamepad} className='text-[#7e00b4] text-lg' /></span>
                    <div className=''>
                      <h4 className='font-bold text-md'>Games</h4>
                      <p className='text-xs text-white'>20.11.2021</p>
                    </div>
                  </div>
          
                  <div className="flex items-center gap-2">
                      
                      <div className='p-3 rounded-lg bg-gradient-to-r from-indigo-200 to-yellow-100'>
                        <Image 
                        src='/images/visa.png'
                        alt="card"
                        width={40}
                        height={40}
                        />
                      </div>
                      <div className='details'>
                        <h2 className='text-sm text-black'>*2342</h2>
                        <p className='text-xs text-white'>Credit Card</p>
                  </div>
                </div>
          
                <h4 className='font-bold text-md'>$20</h4>
              </div>
          
                <div className='flex items-center justify-between py-4 px-2 '>
                  <div className='flex gap-2'>
                    <span className='px-3 py-2 rounded-lg bg-green-300'><FontAwesomeIcon icon={faUtensils} className='text-green-500 text-lg'/></span>
                    <div className=''>
                      <h4 className='font-bold text-md'>Restaurant</h4>
                      <p className='text-xs text-white'>20.11.2021</p>
                    </div>
                  </div>
          
                  <div className="flex items-center gap-2">
                      
                      <div className='p-2 rounded-lg bg-gradient-to-r from-violet-200 to-pink-200'>
                        <Image 
                        src='/images/mastercard.png'
                        alt="card"
                        width={40}
                        height={40}
                        />
                      </div>
                      <div className='details'>
                        <h2 className='text-sm text-black'>*2342</h2>
                        <p className='text-xs text-white'>Credit Card</p>
                  </div>
                </div>
          
                <h4 className='font-bold text-md'>$20</h4>
              </div>
          
          
          
          
              </div>
    

  </div>
  </aside>
  )
}

export default RightSide