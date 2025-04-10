import TransferForm from '@/components/TransferForm'
import React from 'react'

function DomesticTransfer() {
  return (
    <section className='flex flex-col scroll-smooth min-h-screen p-4 lg:p-8 mt-20 md:mt-0'>
        <TransferForm 
  type="domestic"
/>
    </section>
  )
}

export default DomesticTransfer