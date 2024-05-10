import React, { useState } from 'react';
import Navebar from '../Components/Navebar';
import { Link } from 'react-router-dom';

const ViewInvoiceDigitalMarketingData = () => {
  // Sample data to demonstrate, replace with actual data fetched from Firebase
  const [invoices, setInvoices] = useState([
    { id: 1, clientName: 'Person A', invoiceName: 'Certificate 1', fileUrl: 'https://example.com/invoice1.pdf', date: '2022-05-01', position: 'Manager', documentType: 'Aadhar Card', documentNumber: '1234 5678 9012' },
    { id: 2, clientName: 'Person B', invoiceName: 'Certificate 2', fileUrl: 'https://example.com/invoice2.pdf', date: '2022-06-15', position: 'Supervisor', documentType: 'PAN Card', documentNumber: 'ABCD1234E' }
  ]);

  return (
    <div>
      <div className='flex container bg-[rgb(181,181,181)] h-screen'>
        <Navebar />
        <div className='m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git '>
          <h1 className='text-center font-serif font-bold text-4xl mt-5'> Experience Certificate  </h1>
          <div className='flex justify-center items-center my-10 py-20 space-x-40'>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Document Type
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Document Number
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    View File
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {invoices.map((invoice) => (
                  <tr key={invoice.id}>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 font-medium text-gray-900">{invoice.clientName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">{invoice.date}</div>
                    </td>
                    
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">{invoice.documentType}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 text-gray-900">{invoice.documentNumber}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <a href={invoice.fileUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-900">View File</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewInvoiceDigitalMarketingData;
