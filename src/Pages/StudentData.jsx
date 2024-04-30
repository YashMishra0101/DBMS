import React from 'react'
import { Link } from 'react-router-dom';
import { FaEye, FaPlus } from 'react-icons/fa';
import Navebar from '../Components/Navebar'
function StudentData() {
  return (
    <>
      <div className='flex  container bg-[rgb(181,181,181)] h-screen'>
        <Navebar />
        <div className='m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git '>
          <h1 className='text-center font-serif font-bold text-4xl'>  Student Data</h1>
          <div className='flex justify-center items-center my-10 py-20 space-x-40'>
            <Link to="/viewdata">
              <div className='bg-black text-white h-30 w-30 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-[#FD7401]'>
                <FaEye className="text-5xl mb-2" />
                <div className="text-4xl">View Data</div>
              </div>

              {/* Add a bold and bigger line */}
            </Link>
            <div className="border-l border-orange-600 h-80 border-solid border-8"></div>

            <Link to="/form">
              <div className='bg-black text-white h-30 w-30 rounded-lg p-4 flex flex-col items-center justify-center hover:bg-[#FD7401]'>
                <FaPlus className="text-5xl mb-2" />
                <div className="ml-2 text-4xl">Insert Data</div>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default StudentData;