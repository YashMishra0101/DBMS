import React from 'react';
import Navebar from '../Components/Navebar';

const ViewData = () => {
    const formData = [
        { username: 'John Doe', dob: '1990-01-01', contact: '1234567890', email: 'john@example.com', aadhar: '1234 5678 9012', remainingPayment: '$500' },
        { username: 'Jane Smith', dob: '1995-05-05', contact: '9876543210', email: 'jane@example.com', aadhar: '9876 5432 1098', remainingPayment: '$300' }
    ];

    return (
        <>
            <div className='flex container bg-[rgb(181,181,181)] h-screen'>
                <Navebar />
                <div className='m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git '>
                    <h1 className='text-center font-serif font-bold text-4xl'>Form Data</h1>

                    {/* Table Section */}
                    <div className="bg-white rounded-xl p-8 mt-8 shadow-md">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Date of Birth
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Contact Number
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Email Address
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Aadhar Number
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Remaining Payment
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-200 divide-y divide-gray-200">
                                {formData.map((entry, index) => (
                                    <tr key={index}>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {entry.username}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {entry.dob}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {entry.contact}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {entry.email}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {entry.aadhar}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {entry.remainingPayment}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewData;
