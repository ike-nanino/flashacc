"use client"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeadphonesSimple } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Investments from './Investments';
import Image from 'next/image';
config.autoAddCss = false;

function RightSide() {
  return (
    
    <div className='flex-1 mr-2'>
    <Investments />

    <div className='mt-4 bg-white rounded-lg shadow-md'>
      <div className='flex items-center justify-between'>
        <h1>Recent Transaactions</h1>
        <p>More</p>

      </div>

      <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
        <div className='flex gap-2'>
          <span className='px-3 py-2 rounded-lg bg-pink-300'><FontAwesomeIcon icon={faHeadphonesSimple} className='text-pink-500 text-lg'/></span>
          <div className=''>
            <h4 className='font-bold text-md'>Music</h4>
            <p className='text-xs text-gray-400'>20.11.2021</p>
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
              <h2 className='text-sm text-gray-400'>*2342</h2>
              <p className='text-xs text-gray-300'>Credit Card</p>
        </div>
      </div>

      <h4 className='font-bold text-md'>$20</h4>
    </div>

      <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
        <div className='flex gap-2'>
          <span className='px-3 py-2 rounded-lg bg-pink-300'><FontAwesomeIcon icon={faHeadphonesSimple} className='text-pink-500 text-lg'/></span>
          <div className=''>
            <h4 className='font-bold text-md'>Music</h4>
            <p className='text-xs text-gray-400'>20.11.2021</p>
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
              <h2 className='text-sm text-gray-400'>*2342</h2>
              <p className='text-xs text-gray-300'>Credit Card</p>
        </div>
      </div>

      <h4 className='font-bold text-md'>$20</h4>
    </div>

      <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
        <div className='flex gap-2'>
          <span className='px-3 py-2 rounded-lg bg-pink-300'><FontAwesomeIcon icon={faHeadphonesSimple} className='text-pink-500 text-lg'/></span>
          <div className=''>
            <h4 className='font-bold text-md'>Music</h4>
            <p className='text-xs text-gray-400'>20.11.2021</p>
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
              <h2 className='text-sm text-gray-400'>*2342</h2>
              <p className='text-xs text-gray-300'>Credit Card</p>
        </div>
      </div>

      <h4 className='font-bold text-md'>$20</h4>
    </div>

      <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
        <div className='flex gap-2'>
          <span className='px-3 py-2 rounded-lg bg-pink-300'><FontAwesomeIcon icon={faHeadphonesSimple} className='text-pink-500 text-lg'/></span>
          <div className=''>
            <h4 className='font-bold text-md'>Music</h4>
            <p className='text-xs text-gray-400'>20.11.2021</p>
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
              <h2 className='text-sm text-gray-400'>*2342</h2>
              <p className='text-xs text-gray-300'>Credit Card</p>
        </div>
      </div>

      <h4 className='font-bold text-md'>$20</h4>
    </div>




    </div>
    

  </div>
  )
}

export default RightSide