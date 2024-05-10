import React, { useState, useEffect } from 'react';
import Navebar from '../Components/Navebar';
import { getFirestore, collection, getDocs } from "firebase/firestore";

const ViewInvoiceData = () => {
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      const db = getFirestore();
      const querySnapshot = await getDocs(collection(db, "invoices"));
      const invoicesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setInvoices(invoicesData);
    };

    fetchInvoices();
  }, []);

  return (
    <div>
      <div className='flex container bg-[rgb(181,181,181)] h-screen'>
        <Navebar />
        <div className='m-auto justify-center container h-[600px] w-[1000px] bg-white rounded-xl git '>
          <h1 className='text-center font-serif font-bold text-4xl mt-5'> Digital Marketing Invoice </h1>
          <div className='flex justify-center items-center my-10 py-20 space-x-40'>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Client Name
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Invoice Date
                  </th>
                  <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                    Invoice Category
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
                      <div className="text-sm leading-5 font-medium text-gray-900">{invoice.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 font-medium text-gray-900">{invoice.date}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap">
                      <div className="text-sm leading-5 font-medium text-gray-900">{invoice.category}</div>
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

export default ViewInvoiceData;
