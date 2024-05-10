import React from 'react';
import Navebar from '../../Components/Navebar';
import { Link } from 'react-router-dom';

const InvoiceCategory = () => {
  return (
    <div className='flex container bg-[rgb(181,181,181)] h-screen'>
      <Navebar />
      <div className='m-auto flex justify-center items-center h-[600px] w-[1000px] bg-white rounded-xl git'>
        <div className="text-center">
          <h1 className='font-serif font-bold text-4xl'>Category</h1>
          <div className='flex justify-center items-center flex-wrap my-10 py-20 space-x-10'>
            <Link to="/viewinvoiceJobconsultancydata" className="flex items-center justify-center flex-col">
              <div className='bg-black text-2xl text-white h-30 w-40 rounded-lg p-6 flex items-center justify-center hover:bg-[#FD7401]'>
                Job Consultancy Invoices
              </div>
            </Link>
            <div className="border-r border-orange-600 h-48 border-4"></div> {/* Increased height of line */}
            <Link to="/viewinvoicedigitalmarketingdata" className="flex items-center justify-center flex-col">
              <div className='bg-black text-2xl text-white h-30 w-40 rounded-lg p-6 flex items-center justify-center hover:bg-[#FD7401]'>
                Digital Marketing Invoices
              </div>
            </Link>
            <div className="border-r border-orange-600 h-48  border-4"></div> {/* Increased height of line */}
            <Link to="/viewinvoiceinterdata" className="flex items-center justify-center flex-col">
              <div className='bg-black text-2xl text-white h-30 w-40 rounded-lg p-6 flex items-center justify-center hover:bg-[#FD7401]'>
                Internship Invoices
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvoiceCategory;
