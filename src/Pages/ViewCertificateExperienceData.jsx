import React, { useState, useEffect } from 'react';
import Navebar from '../Components/Navebar';
import { Link } from 'react-router-dom';

const ViewInternsInvoiceData = () => {
  // Sample data to demonstrate, replace with actual data fetched from Firebase
  const [invoices, setInvoices] = useState([
    { id: 1, clientName: 'Client A', invoiceName: 'Invoice 1', fileUrl: 'https://example.com/invoice1.pdf' },
    { id: 2, clientName: 'Client B', invoiceName: 'Invoice 2', fileUrl: 'https://example.com/invoice2.pdf' }
  ]);

  return (
    <div>
      <div className="flex container bg-[rgb(181,181,181)] h-screen">
  <Navebar />
  <div className="m-auto container w-[65%] bg-white rounded-xl git">
    <h1 className="text-center font-serif font-bold text-4xl mt-5">Certificate Data</h1>
    <form >
      <table className="w-full mt-10">
        <tbody>
          <tr>
            <td>
              <label htmlFor="username" className="text-sm font-medium leading-6 text-gray-900">Name of Candidate</label>
            </td>
            <td>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="username"
                className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm leading-6"
                placeholder="Full Name"
               
              />
            </td>
            <td>
              <label htmlFor="dob" className="text-sm font-medium leading-6 text-gray-900">Date Issued</label>
            </td>
            <td>
              <input
                type="date"
                name="dob"
                id="dob"
                autoComplete="bday"
                className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm leading-6"
                placeholder="DD-MM-YYYY"
                
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="contact" className="text-sm font-medium leading-6 text-gray-900">Reference Remark</label>
            </td>
            <td>
              <input
                type="text"
                name="contact"
                id="contact"
                autoComplete="tel"
                className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm leading-6"
                placeholder="Remark"
                
              />
            </td>
            <td>
              <label htmlFor="position" className="text-sm font-medium leading-6 text-gray-900">Position/Designation</label>
            </td>
            <td>
              <input
                type="text"
                name="position"
                id="position"
                autoComplete="position"
                className="w-full border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm leading-6"
                placeholder="Position/Designation"
              
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="dropdown" className="text-lg font-bold text-gray-800">Document Type</label>
            </td>
            <td>
              <select
                id="dropdown"
                value={formData.selectedOption}
                onChange={handleDropdownChange}
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
              >
                <option value="option1">Adhar card</option>
                <option value="option2">PAN card</option>
              </select>
            </td>
            <td colSpan="2">
              {formData.selectedOption === 'option1' && (
                <input
                  type="text"
                  id="aadharNumber"
                  name="aadharNumber"
                  value={formData.aadharNumber}
                  
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter Aadhar Card Number"
                />
              )}
              {formData.selectedOption === 'option2' && (
                <input
                  type="text"
                  id="PanNumber"
                  name="PanNumber"
                  className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder="Enter PAN Card Number"
                />
              )}
            </td>
          </tr>
          <tr>
            <td colSpan="4" className="text-center py-6">
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none"
              >
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
</div>

    </div>
  );
}

export default ViewInternsInvoiceData;
