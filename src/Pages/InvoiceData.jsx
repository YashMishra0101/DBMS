import React from 'react'
import Navebar from '../Components/Navebar'
function InvoiceData() {
  return (
    <>
    <div className='flex  container bg-[rgb(181,181,181)] h-screen'>
        <Navebar />
        <div className='m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git '>
            <h1 className='text-center font-serif font-bold text-4xl'> Invoice Data</h1>
        </div>
    </div>
</>
  )
}

export default InvoiceData;