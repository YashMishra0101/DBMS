import React from 'react';
import Navebar from '../Components/Navebar';
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';

const Form = () => {
    return (
        <>
            <div className='flex container bg-[rgb(181,181,181)] h-screen'>
                <Navebar />
                <div className='m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git '>
                    <h1 className='text-center font-serif font-bold text-4xl'>Form</h1>

                    {/* Form Section */}
                    <div className="bg-white rounded-xl p-8 mt-8 shadow-md">
                        <form>
                            {/* Your provided form content */}
                            <div className="space-y-12">
                                {/* Profile Section */}
                                <div className="border-b border-gray-900/10 pb-12">
                                    {/* Photo */}
                                    <div className="col-span-full">
                                        <label htmlFor="photo" className="block text-sm font-medium leading-6 text-gray-900">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <UserCircleIcon className="h-12 w-12 text-gray-300" aria-hidden="true" />
                                            <button
                                                type="button"
                                                className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                            >
                                                Change
                                            </button>
                                        </div>
                                    </div>
                                    {/* Username */}
                                    <div className="sm:col-span-4">
                                        <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                            Name of Candidate
                                        </label>
                                        <div className="mt-2">
                                            <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="username"
                                                    id="username"
                                                    autoComplete="username"
                                                    className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Full Name"
                                                />
                                            </div>

                                        </div>
                                    </div>
                                    {/* DOB */}
                                    <div className="sm:col-span-4">
                                        <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                                            Date of Birth
                                        </label>
                                        <div className="mt-2">
                                            <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="date" // Set type as "date"
                                                    name="dob"
                                                    id="dob"
                                                    autoComplete="bday"
                                                    className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="DD-MM-YYYY"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                            Contact Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="contact"
                                                    id="contact"
                                                    autoComplete="tel"
                                                    className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Contact Number"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email Address
                                        </label>
                                        <div className="mt-2">
                                            <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    autoComplete="email"
                                                    className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-4">
                                        <label htmlFor="contact" className="block text-sm font-medium leading-6 text-gray-900">
                                            Aadhar Number
                                        </label>
                                        <div className="mt-2">
                                            <div className="rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                <input
                                                    type="text"
                                                    name="contact"
                                                    id="contact"
                                                    autoComplete="tel"
                                                    className="block w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    placeholder="Aadhar Number"
                                                />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Form;
