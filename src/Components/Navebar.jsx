import React from 'react';
import Skymentor from "../assets/22.png";
import { NavLink } from "react-router-dom";

function Navebar() {
  return (
    <>
      <div className='container bg-white h-screen w-3/12 ml-3'>
        <div>
          <img src={Skymentor} alt="" />
        </div>
        <div className='flex flex-col gap-10 mt-14'>
          <NavLink to="/StudentData" className=' bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>
            Students Data 
          </NavLink>
          <NavLink to="/certificatedata" className=' bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>
            Certificate's Data
          </NavLink>
          <NavLink to="/digitalmaketing" className=' bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>
            Digital Marketing
          </NavLink>
          <NavLink to="/invoicedata" className=' bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>
            Invoice Data
          </NavLink>
          <NavLink to="/employeedata" className=' bg-black text-white rounded-full p-4 text-center w-5/6 m-auto hover:bg-[#FD7401]'>
            Employee Data
          </NavLink>
          <NavLink to="/" className=' bg-lime-500 rounded-full p-4 text-center w-2/6 m-auto hover:bg-[#FD7401] text-white'>
            Log Out
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Navebar;
