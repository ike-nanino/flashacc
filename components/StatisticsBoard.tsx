'use client'

import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeadphonesSimple, faBagShopping, faGamepad, faUtensils} from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image';
config.autoAddCss = false;

export default function StatisticsDashboard() {
  // Line Chart Data (Last 7 days)
  const lineData = [
    { date: '1/1', Expenses: 105708, Income: 230905 },
    { date: '1/2', Expenses: 90690, Income: 216700 },
    { date: '1/3', Expenses: 16700, Income: 25300 },
    { date: '1/4', Expenses: 9954410, Income: 195400 },
    { date: '1/5', Expenses: 600560, Income: 1589763 },
    { date: '1/6', Expenses: 1033742, Income: 200678 },
    { date: '1/7', Expenses: 1004678, Income: 9662393 },
    { date: '1/8', Expenses: 10354478, Income: 1762393 },
    { date: '1/9', Expenses: 4330678, Income: 972393 },
    { date: '1/10', Expenses: 2300678, Income: 462393 },
  ];

  return (
    <div className="space-y-6 mt-4 px-3 w-full">
      {/* Statistics Section */}
      <div className="bg-white px-1 py-6 md:py-0 md:p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Statistics</h2>
          <span className="text-sm text-gray-500">Last 10 years</span>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={lineData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="top" height={36} />
              <Line
                type="monotone"
                dataKey="Expenses"
                stroke="rgb(239 68 68)"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
              <Line
                type="monotone"
                dataKey="Income"
                stroke="rgb(34 197 94)"
                strokeWidth={2}
                dot={{ r: 3 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

  


       <div className='my-4 bg-white rounded-lg shadow-md flex flex-col lg:hidden'>
       <div className='flex items-center justify-between p-2'>
                  <h1 className='font-bold'>Recent Transactions</h1>
                  <p className='text-sm text-blue-600 hover:text-blue-800 duration-300 cursor-pointer'>More</p>
          
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
                <span className='px-3 py-2 rounded-lg bg-[#7bf8f8]'>  <FontAwesomeIcon icon={faBagShopping} className='text-[#00c0c0] text-lg' /></span>
                <div className=''>
                  <h4 className='font-bold text-md'>Shopping</h4>
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
                <span className='px-3 py-2 rounded-lg bg-[#ad92b9]'>
                <FontAwesomeIcon icon={faGamepad} className='text-[#7e00b4] text-lg' /></span>
                <div className=''>
                  <h4 className='font-bold text-md'>Games</h4>
                  <p className='text-xs text-gray-400'>20.11.2021</p>
                </div>
              </div>
      
              <div className="flex items-center gap-2">
                  
                  <div className='p-3 rounded-lg bg-gradient-to-r from-violet-200 to-pink-200'>
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
      
            <div className='flex items-center justify-between py-4 px-2 '>
              <div className='flex gap-2'>
                <span className='px-3 py-2 rounded-lg bg-green-300'><FontAwesomeIcon icon={faUtensils} className='text-green-500 text-lg'/></span>
                <div className=''>
                  <h4 className='font-bold text-md'>Restaurant</h4>
                  <p className='text-xs text-gray-400'>20.11.2021</p>
                </div>
              </div>
      
              <div className="flex items-center gap-2">
                  
                  <div className='p-3 rounded-lg bg-gradient-to-r from-indigo-200 to-yellow-100'>
                    <Image 
                    src='/images/mastercard.png'
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
  );
}