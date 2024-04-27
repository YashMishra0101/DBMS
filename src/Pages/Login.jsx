import React from 'react';
import bg from '../assets/Frame2.png';
import pic from '../assets/girl.png'
import mail from '../assets/mailicon.png'
import pass from '../assets/password.png'
import { ReactTyped } from "react-typed";

const Login = () => {
  return (
    <div className=' h-screen relative' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover' }}>
      <div className='absolute h-[34rem] w-[59rem]  right-20 top-[10rem]  border-8 border-blue-900 shadow-lg shadow-blue-500/50 rounded-3xl grid grid-cols-2 '>
        <div className='bg-white h-full rounded-xl flex flex-col justify-center items-center'>
          {/* <h3 className='font-extrabold  text-xl text-slate-600'>Login to your account</h3> */}
          <ReactTyped
          className='text-xl uppercase text-slate-600 text-center font-extrabold'
                    strings={['Login to your account']}
                    typeSpeed={50}
                    backSpeed={60}
                    loop
                />
          <form action="/studentData" className='mt-4 flex flex-col gap-4'>
            
            <div className='flex flex-col'>
              <label htmlFor="email" className='text-slate-600 font-extrabold text-base'>Email address</label>
              <div className='flex '>
              <input type="email" id='email' placeholder='xyz@gmail.com' className='bg-gray-200 w-72 h-10 rounded-sm placeholder-slate-400 pl-4 '/> <img src={mail} alt="" srcset="" className='size-10'/>
              </div>
            </div>

            <div className='flex flex-col'>
              <label htmlFor="password" className='text-slate-600 font-extrabold text-base'>Password</label>
              <div className='flex '>
              <input type="password" id='password' placeholder='Enter your password' className='bg-gray-200 w-72 h-10 rounded-sm placeholder-slate-400 pl-4 '/> <img src={pass} alt="" srcset="" className='size-10'/>
              </div>
            </div>

            <div className='flex justify-center '>
              <button type='submit' className='bg-orange-500 w-48 h-8 text-white font-bold rounded-md hover:bg-orange-600 '>Login</button>
            </div>
          </form>

          <div className='flex justify-end  w-72 mt-2'>
            <h4 className='text-green-600 font-bold underline decoration-slate-200 decoration-2 cursor-pointer'>forgot password?</h4>
          </div>
          <div className='flex mt-2'>
            <div className='h-[2px] w-10 bg-gray-200 mt-[6px]'></div>
            <h6 className='text-[10px] px-2 text-green-600'>OR</h6>
            <div className='h-[2px] w-10 bg-gray-200 mt-[6px]'></div>
          </div>

          <div className='flex justify-center'>
             <a href="/Signup"><button type='submit' className='border border-green-600 w-48 h-8 text-green-600 font-bold rounded-md mt-4 hover:bg-slate-100'>Signup now</button></a>
            </div>
        </div>


        <div className='bg-gray-200 h-full rounded-xl'><img src={pic} alt="" srcset="" className='mt-12'/></div>
      </div>
      
    </div>
  );
};

export default Login;
