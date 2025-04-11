import Image from 'next/image'
import React from 'react'

function Investments() {
  return (
    <div className='w-full bg-white rounded-lg shadow-md pt-4 hidden lg:flex lg:flex-col'>
        <h2 className='text-2xl font-bold text-center mb-3'>Investments</h2>
        <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
            <Image 
            src='/images/uniliver.png'
            alt='Uniliver'
            width={20}
            height={20}
            />
            <h4 className='text-sm font-semibold'>Uniliver</h4>
            <div>
                <p className='text-sm'>7, Nov, 2021</p>
                <small className='text-gray-500'>9:14pm</small>
            </div>
            <div className=''>
                <p className=''>1402</p>
                <small className='text-gray-500'>Bonds</small>
            </div>
            <div>
                <p className='font-medium'>$20,000</p>
                <small className='text-green-500'>+2.5%</small>
            </div>
        </div>


        <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
            <Image 
            src='/images/mcdonalds.png'
            alt='Uniliver'
            width={20}
            height={20}
            />
            <h4 className='text-sm font-semibold'>McDonalds</h4>
            <div>
                <p className='text-sm'>7, Nov, 2021</p>
                <small className='text-gray-500'>9:14pm</small>
            </div>
            <div className=''>
                <p className=''>1402</p>
                <small className='text-gray-500'>Bonds</small>
            </div>
            <div>
                <p className='font-medium'>$20,000</p>
                <small className='text-green-500'>+2.5%</small>
            </div>
        </div>


        <div className='flex items-center justify-between py-4 px-2 border-b border-b-gray-300'>
            <Image 
            src='/images/tesla.png'
            alt='Uniliver'
            width={20}
            height={20}
            />
            <h4 className='text-sm font-semibold'>Tesla</h4>
            <div>
                <p className='text-sm'>7, Nov, 2021</p>
                <small className='text-gray-500'>9:14pm</small>
            </div>
            <div className=''>
                <p className=''>1402</p>
                <small className='text-gray-500'>Bonds</small>
            </div>
            <div>
                <p className='font-medium'>$20,000</p>
                <small className='text-green-500'>+2.5%</small>
            </div>
        </div>


        <div className='flex items-center justify-between py-4 px-2'>
            <Image 
            src='/images/monster.png'
            alt='Uniliver'
            width={20}
            height={20}
            />
            <h4 className='text-sm font-semibold'>Monster</h4>
            <div>
                <p className='text-sm'>7, Nov, 2021</p>
                <small className='text-gray-500'>9:14pm</small>
            </div>
            <div className=''>
                <p className=''>1402</p>
                <small className='text-gray-500'>Bonds</small>
            </div>
            <div>
                <p className='font-medium'>$20,000</p>
                <small className='text-green-500'>+2.5%</small>
            </div>
        </div>
    </div>
  )
}

export default Investments