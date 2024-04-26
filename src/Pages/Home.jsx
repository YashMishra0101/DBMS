import React from 'react'
import Skymentor from "../Image/22.png"
export const Home = () => {
  return (
    <>
      <div className='flex  container bg-[rgb(181,181,181)] h-screen'>
        <div className='container bg-white h-screen w-3/12 ml-3'>
          {/* IMAGE CONTAINER */}
          <div>
            <img src={Skymentor} alt="" />
          </div>
          {/* OPTIONS */}
          <div className='flex flex-col gap-10 mt-14'>
            <div className=' bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'> Students Data </div>
            <div className='  bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>Certificate's Data</div>
            <div className='  bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>Digitial Marketing</div>
            <div className=' bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>Invoice Data</div>
            <div className='  bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>Employee Data</div>
          </div>
        </div>
        <div className='m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git ad'> 
        </div>
      </div>

    </>
  )
}
